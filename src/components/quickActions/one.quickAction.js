import React, { useContext } from 'react';
import { AddToCartButton } from '../product/subComponents/one/AddToCartButton';
import { ProductContext } from '../product/product';

export const OneQuickAction = () => {
  const {
    item: { id },
    addToCart,
  } = useContext(ProductContext);

  return (
    <div>
      <AddToCartButton
        onClick={() => {
          addToCart({ id });
        }}
      />
    </div>
  );
};
