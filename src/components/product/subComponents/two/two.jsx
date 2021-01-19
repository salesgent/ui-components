import React, { useContext } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { Button } from 'antd';
import styled from 'styled-components';
import { ProductContext } from '../../product';
import { preventOuterClick } from '../../../../utils/commons';

const StyledTwo = styled.div`
  min-height: 60px;
`;
const StyledPrice = styled.div``;
const StyledOutOfStock = styled.div``;
const StyledAddToCartButton = styled(Button)``;

function Two() {
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
    <StyledTwo>
      <StyledPrice>{amount}</StyledPrice>
      {isProductOutOfStock ? (
        <StyledOutOfStock>out of stock</StyledOutOfStock>
      ) : (
        <StyledAddToCartButton
          type="primary"
          icon={<ShoppingCartOutlined />}
          onClick={onAddToCartClick}
        >
          Add to Cart
        </StyledAddToCartButton>
      )}
    </StyledTwo>
  );
}

export default Two;
