import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'antd';
import {
  StyledNumberInput,
  StyledProductCounter,
  StyledUpdateQty,
} from './styled/one.styled';

const ProductCounter = ({ qty }) => {
  const hasQty = qty > 0;
  return hasQty && <StyledProductCounter>{qty}</StyledProductCounter>;
};

const QtyMeter = ({ defaultQty = 0, updatedQty }) => {
  const [qtyToBuy, setQtyToBuy] = useState(defaultQty);
  const [showInput, setShowInput] = useState(true);
  const containerRef = useRef(null);

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

  const increaseQty = () => {
    if (qtyToBuy >= 0) {
      updateQty(qtyToBuy + 1);
    }
  };

  const decreaseQty = () => {
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
    <StyledUpdateQty ref={containerRef}>
      <Button onClick={increaseQty}>+</Button>
      {showInput && (
        <StyledNumberInput value={qtyToBuy} onChange={onInputChange} />
      )}
      <Button onClick={decreaseQty}>-</Button>
      <ProductCounter qty={qtyToBuy} />
    </StyledUpdateQty>
  );
};

export default QtyMeter;
