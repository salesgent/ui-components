import React, { useContext, useState } from 'react';
import { Button } from 'antd';
import {
  AddToCartContainer,
  StyledLoginView,
  StyledOne,
  StyledOutOfStock,
  StyledPrice,
  StyledStockBG,
} from './styled/one.styled';
import { ShoppingCartOutlined } from '@ant-design/icons';
import QtyMeter from './QtyMeter';
import { ProductContext } from '../../product';
import NotifyMe from './NotifyMe';

const AddToCartButton = ({ onClick }) => (
  <Button danger type="primary" onClick={onClick}>
    <ShoppingCartOutlined />
  </Button>
);

const LoginView = ({ onClick }) => (
  <StyledLoginView>
    <Button type="link" danger onClick={onClick}>
      Login
    </Button>
    to view price.
  </StyledLoginView>
);

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

  const handleAddToCart = () => {
    addToCart({
      id,
      qty: newUpdatedQty,
    });
  };

  const renderSubModules = () => {
    return (
      <>
        <StyledPrice>{amount}</StyledPrice>
        <StyledStockBG>{stockTitle}</StyledStockBG>
        {isProductOutOfStock && <NotifyMe />}
        {!isProductOutOfStock && (
          <AddToCartContainer>
            <QtyMeter updatedQty={setNewUpdatedQty} />
            <AddToCartButton onClick={handleAddToCart} />
          </AddToCartContainer>
        )}
      </>
    );
  };

  return (
    <StyledOne>
      {showLogin ? <LoginView onClick={onLoginClick} /> : renderSubModules()}
    </StyledOne>
  );
};

export default One;
