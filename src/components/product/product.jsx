import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Card, Col } from 'antd';
import One from './subComponents/one/one';
import { StyledCardProductContainer } from './styled/product.styled';

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

const SubComponent = () => {
  const { variant } = useContext(ProductContext);

  switch (variant) {
    case 'one':
      return <One />;
    default:
      return null;
  }
};

const Product = (props) => {
  const {
    item: { imgUrl, title, description },
    colValues,
    layoutModel,
  } = props;

  return (
    <Col span={colValues}>
      <ProductContext.Provider value={{ ...props }}>
        <StyledCardProductContainer
          layout={layoutModel}
          cover={<img alt="example" src={imgUrl} />}
        >
          <Meta title={title} description={description} />
          <SubComponent />
        </StyledCardProductContainer>
      </ProductContext.Provider>
    </Col>
  );
};

export default Product;
