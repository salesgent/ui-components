import React, { useContext } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { Button } from 'antd';
import styled from 'styled-components';
import { ProductContext } from '../../product';
import { preventOuterClick } from '../../../../utils/commons';
import { primaryButtonStyle } from '../../../../styles/buttons';

const StyledTwo = styled.div`
  min-height: 60px;
`;

const StyledPrice = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const StyledOutOfStock = styled.div`
  height: 35px;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledAddToCartButton = styled(Button)`
  height: 35px;

  ${primaryButtonStyle}
`;

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
