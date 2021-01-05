import React from 'react';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const AddToCartButton = ({ onClick }) => (
  <Button danger type="primary" onClick={onClick}>
    <ShoppingCartOutlined />
  </Button>
);
