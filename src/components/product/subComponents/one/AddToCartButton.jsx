import React from 'react';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import { primaryButtonStyle } from '../../../../styles/buttons';

const StyledAddToCartIconButton = styled(Button)`
  ${primaryButtonStyle};
`;

export const AddToCartButton = ({ onClick }) => (
  <StyledAddToCartIconButton onClick={onClick}>
    <ShoppingCartOutlined />
  </StyledAddToCartIconButton>
);
