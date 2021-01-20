import React, { useContext } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { Button } from 'antd';
import styled from 'styled-components';
import { ProductContext } from '../../product';
import { preventOuterClick } from '../../../../utils/commons';
import NotifyMe from '../one/NotifyMe';

const StyledThree = styled.div`
  min-height: 50px;
`;

const StyledPrice = styled.div`
  font-weight: bold;
`;

const StyledAddToCartButton = styled(Button)`
  width: 100%;
`;

function Three() {
  const {
    item: { price, currency, qty, id },
    addToCart,
  } = useContext(ProductContext);
  const amount = `${currency} ${price}`;
  const isProductOutOfStock = qty === 0;

  const onAddToCartClick = (e) => {
    preventOuterClick(e);
    addToCart({ id, qty: 1 });
  };

  return (
    <StyledThree>
      <StyledPrice>{amount}</StyledPrice>
      {isProductOutOfStock ? (
        <NotifyMe />
      ) : (
        <StyledAddToCartButton
          type="primary"
          icon={<ShoppingCartOutlined />}
          onClick={onAddToCartClick}
        >
          Add to Cart
        </StyledAddToCartButton>
      )}
    </StyledThree>
  );
}

export default Three;
