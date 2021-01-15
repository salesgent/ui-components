import React, { useContext, useState } from 'react';
import { ProductContext } from '../../product';
import { StyledNotifyButton, StyledNotifyMe } from './styled/one.styled';
import { Input } from 'antd';
import { BellOutlined } from '@ant-design/icons';
import { preventOuterClick } from '../../../../utils/commons';

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

  const onNotifyPressed = (e) => {
    preventOuterClick(e);
    onNotifyClick({ email, id });
  };

  return (
    <StyledNotifyMe>
      <Input onChange={onInputChange} onClick={preventOuterClick} />
      <NotifyMeButton onClick={onNotifyPressed} />
    </StyledNotifyMe>
  );
};

export default NotifyMe;
