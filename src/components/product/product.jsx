import React from 'react';
import 'antd/dist/antd.css';
import { Card, Col } from 'antd';
import One from './subComponents/one/one';
import { StyledCardProductContainer } from './styled/product.styled';
import { OneQuickAction } from '../quickActions/one.quickAction';
import { QuickAction } from './common/quickAction';

const { Meta } = Card;

const noop = () => {};
const defaultProps = {
  addToCart: noop,
  onNotifyClick: noop,
  onLoginClick: noop,
  item: {},
  variant: '',
  showLogin: false,
};

export const ProductContext = React.createContext(defaultProps);

const getComponent = (variant) => {
  switch (variant) {
    case 'one':
      return { quickAction: <OneQuickAction />, subComponent: <One /> };
    default:
      return { quickAction: '', subComponent: '' };
  }
};

const Product = (props) => {
  const {
    item: { imgUrl, title, description, qty },
    colValues,
    layoutModel,
    showBoxShadow,
    showLogin,
  } = props;
  const c = getComponent(props.variant);
  let showQuickAction = layoutModel.showQuickActions && !showLogin && qty > 0;

  return (
    <Col span={colValues}>
      <ProductContext.Provider value={{ ...props }}>
        <StyledCardProductContainer
          showBoxShadow={showBoxShadow}
          layout={layoutModel}
          cover={
            <>
              {showQuickAction && <QuickAction>{c.quickAction}</QuickAction>}
              <img alt="example" src={imgUrl} />
            </>
          }
        >
          <Meta title={title} description={description} />
          {c.subComponent}
        </StyledCardProductContainer>
      </ProductContext.Provider>
    </Col>
  );
};

export default Product;
