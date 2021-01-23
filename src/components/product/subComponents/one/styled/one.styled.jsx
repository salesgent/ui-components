import { Button, Input } from 'antd';
import styled from 'styled-components';
import { primaryButtonStyle } from '../../../../../styles/buttons';
import { labelPrimaryStyle } from '../../../../../styles/label';

export const StyledOne = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > div:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const StyledPrice = styled.div`
  ${labelPrimaryStyle};
  font-weight: bold;
`;
export const StyledOutOfStock = styled.div`
  ${labelPrimaryStyle};
  font-weight: 500;
`;

export const StyledStockBG = styled.div`
  background-color: lightgray;
  padding: 3px 5px;
  min-width: 70px;
  border-radius: 3px;
  font-size: 10px;
  font-weight: 500;
`;

export const StyledUpdateQty = styled.div`
  display: flex;
  column-gap: 5px;

  input {
    width: 50px;
  }
`;

export const StyledNumberInput = styled(Input)`
  text-align: center;
`;

export const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const AddToCartContainer = styled(StyledFlex)``;

export const StyledNotifyMe = styled(StyledFlex)``;
export const StyledNotifyButton = styled(Button)`
  margin-left: 15px;
  color: white;
  ${primaryButtonStyle};
`;

export const StyledProductCounter = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  height: 30px;
  width: 30px;

  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 50%;
`;

export const StyledLoginView = styled.div`
  text-transform: uppercase;
  button {
    padding: 0;
    margin-right: 5px;
    text-transform: uppercase;
  }
`;
