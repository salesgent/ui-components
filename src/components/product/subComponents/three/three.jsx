import React, { useContext, useState } from 'react';
import { ShoppingCartOutlined } from '@ant-design/icons';

import { Button } from 'antd';
import styled from 'styled-components';
import { ProductContext } from '../../product';
import { preventOuterClick } from '../../../../utils/commons';
import NotifyMe from '../one/NotifyMe';
import { StyledFlex } from '../one/styled/one.styled';
import QtyMeter from '../one/QtyMeter';

const StyledThree = styled.div``;

const StyledPrice = styled.div`
  font-weight: bold;
`;

const StyledAddToCartButton = styled(Button)`
  width: 100%;
`;

const StyledPriceQtyContainer = styled(StyledFlex)`
  align-items: center;
  margin-bottom: 10px;

  .qty-container {
    position: relative;
    width: 70px;
    height: 35px;

    input {
      width: inherit;
      text-align: left;
    }

    .increment,
    .decrement {
      position: absolute;
      right: 8px;
      height: 14px;
      width: 14px;
      font-size: 12px;
      z-index: 1;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .increment {
      top: 3px;
    }
    .decrement {
      bottom: 3px;
    }
  }
`;

const StyledQty = styled.div``;

function Three() {
  const {
    item: { price, currency, qty, id },
    addToCart,
  } = useContext(ProductContext);
  const [newUpdatedQty, setNewUpdatedQty] = useState(0);

  const amount = `${currency} ${price}`;
  const isProductOutOfStock = qty === 0;

  const onAddToCartClick = (e) => {
    preventOuterClick(e);
    addToCart({
      id,
      qty: newUpdatedQty,
    });
  };

  return (
    <StyledThree>
      {!isProductOutOfStock && (
        <StyledPriceQtyContainer>
          <StyledPrice>{amount}</StyledPrice>
          <StyledQty>
            <QtyMeter updatedQty={setNewUpdatedQty} />
          </StyledQty>
        </StyledPriceQtyContainer>
      )}

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
