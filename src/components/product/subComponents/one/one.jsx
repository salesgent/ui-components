import React, { useContext, useState } from 'react';
import {
  AddToCartContainer,
  StyledOne,
  StyledOutOfStock,
  StyledPrice,
  StyledStockBG,
} from './styled/one.styled';
import QtyMeter from './QtyMeter';
import { ProductContext } from '../../product';
import NotifyMe from './NotifyMe';
import { AddToCartButton } from './AddToCartButton';
import { LoginView } from './LoginView';
import { preventOuterClick } from '../../../../utils/commons';

const One = () => {
  const {
    item: { price, currency, qty, id },
    addToCart,
    showLogin,
    onLoginClick,
  } = useContext(ProductContext);
  const [newUpdatedQty, setNewUpdatedQty] = useState(0);

  const amount = `${currency} ${price}`;
  const productCount = qty > 50 ? '50+' : qty;
  const inStockMessage = `In-stock: ${productCount}`;
  const outOfStock = <StyledOutOfStock>Out Of Stock</StyledOutOfStock>;
  const isProductOutOfStock = qty === 0;
  const stockTitle = isProductOutOfStock ? outOfStock : inStockMessage;

  const handleAddToCart = (e) => {
    preventOuterClick(e);
    addToCart({
      id,
      qty: newUpdatedQty,
    });
  };

  const renderSubModules = () => {
    return (
      <React.Fragment>
        <StyledPrice>{amount}</StyledPrice>
        <StyledStockBG>{stockTitle}</StyledStockBG>
        {isProductOutOfStock && <NotifyMe />}
        {!isProductOutOfStock && (
          <AddToCartContainer>
            <QtyMeter updatedQty={setNewUpdatedQty} />
            <AddToCartButton onClick={handleAddToCart} />
          </AddToCartContainer>
        )}
      </React.Fragment>
    );
  };

  return (
    <StyledOne>
      {showLogin ? (
        <LoginView
          onClick={(e) => {
            preventOuterClick(e);
            onLoginClick(e);
          }}
        />
      ) : (
        renderSubModules()
      )}
    </StyledOne>
  );
};

export default One;
