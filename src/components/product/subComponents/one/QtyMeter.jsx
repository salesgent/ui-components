import React, { useContext, useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import {
  StyledNumberInput,
  StyledProductCounter,
  StyledUpdateQty,
} from './styled/one.styled';
import { preventOuterClick } from '../../../../utils/commons';
import { ProductContext } from '../../product';

const ProductCounter = ({ qty }) => {
  const hasQty = qty > 0;
  return hasQty && <StyledProductCounter>{qty}</StyledProductCounter>;
};

const QtyMeter = ({ updatedQty }) => {
  const [qtyToBuy, setQtyToBuy] = useState(0);
  const [showInput, setShowInput] = useState(true);
  const containerRef = useRef(null);
  const {
    item: { qty: totalQty },
  } = useContext(ProductContext);

  useEffect(() => {
    const onResize = () => {
      const { width } = containerRef.current
        .closest('.ant-card')
        .getBoundingClientRect();

      setShowInput(width > 200);
    };

    window.addEventListener('resize', onResize);
    onResize();
    return () => {
      window.removeEventListener('resize', onResize);
    };
  });

  const updateQty = (value) => {
    setQtyToBuy(value);
    updatedQty(value);
  };

  const increaseQty = (e) => {
    preventOuterClick(e);

    if (qtyToBuy >= 0 && qtyToBuy < totalQty) {
      updateQty(qtyToBuy + 1);
    }
  };

  const decreaseQty = (e) => {
    preventOuterClick(e);

    if (qtyToBuy > 0) {
      updateQty(qtyToBuy - 1);
    }
  };

  const onInputChange = (e) => {
    const { value } = e.target;
    const regex = /^[0-9]+$/;

    if (value.match(regex)) {
      updateQty(+value);
    }
  };

  return (
    <>
      <ProductCounter qty={qtyToBuy} />
      <StyledUpdateQty ref={containerRef} className="qty-container">
        <Button onClick={increaseQty} className="increment">
          +
        </Button>
        {showInput && (
          <StyledNumberInput
            value={qtyToBuy}
            onChange={onInputChange}
            onClick={preventOuterClick}
          />
        )}
        <Button onClick={decreaseQty} className="decrement">
          -
        </Button>
      </StyledUpdateQty>
    </>
  );
};

export default QtyMeter;
