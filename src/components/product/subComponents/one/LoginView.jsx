import React from 'react';
import { Button } from 'antd';
import { StyledLoginView } from './styled/one.styled';

export const LoginView = ({ onClick }) => (
  <StyledLoginView>
    <Button type="link" danger onClick={onClick}>
      Login
    </Button>
    to view price.
  </StyledLoginView>
);
