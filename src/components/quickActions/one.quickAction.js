import React, { useContext } from 'react';
import { AddToCartButton } from '../product/subComponents/one/AddToCartButton';
import { ProductContext } from '../product/product';
import { preventOuterClick } from '../../utils/commons';

export const OneQuickAction = () => {
  const {
    item: { id },
    addToCart,
  } = useContext(ProductContext);

  return (
    <div>
      <AddToCartButton
        onClick={(e) => {
          preventOuterClick(e);
          addToCart({ id, qty: 1 });
        }}
      />
    </div>
  );
};
