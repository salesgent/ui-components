import React, { useContext, useState } from 'react';
import { ProductContext } from '../../product';
import { StyledNotifyButton, StyledNotifyMe } from './styled/one.styled';
import { Input } from 'antd';
import { BellOutlined } from '@ant-design/icons';

const NotifyMeButton = ({ onClick }) => (
  <StyledNotifyButton type="primary" danger onClick={onClick}>
    <BellOutlined />
  </StyledNotifyButton>
);

const NotifyMe = () => {
  const [email, setEmail] = useState('');
  const {
    item: { id },
    onNotifyClick,
  } = useContext(ProductContext);

  const onInputChange = ({ target: { value } }) => {
    setEmail(value);
  };
  const onNotifyPressed = () => {
    onNotifyClick({ email, id });
  };

  return (
    <StyledNotifyMe>
      <Input onChange={onInputChange} />
      <NotifyMeButton onClick={onNotifyPressed} />
    </StyledNotifyMe>
  );
};

export default NotifyMe;
