import React from 'react';
import { Row } from 'antd';
import Product from '../product/product';

const noop = () => {};

export const getLayoutModel = ({
  rowSpace = 8,
  colSpace = 8,
  imageSize = 100,
  imageBottomSpace = 15,
  titleBottomSpace = 10,
  detailBottomSpace = 0,
} = {}) => {
  return {
    rowSpace, // px
    colSpace, // px
    image: {
      size: imageSize, // in percentage.
      mb: imageBottomSpace,
    },
    title: {
      mb: titleBottomSpace, // px
    },
    detail: {
      mb: detailBottomSpace, // px
    },
  };
};

const defaultProps = {
  items: [],
  layoutModel: getLayoutModel(),
  colCount: 3,
  onLoginClick: noop,
  onNotifyClick: noop,
  addToCart: noop,
};

const ProductSlider = (props = {}) => {
  const newProps = { ...defaultProps, ...props };
  const { colCount, items, ...restProps } = newProps;

  const { colSpace, rowSpace } = restProps.layoutModel;

  const commonProps = {
    variant: 'one',
    colValues: 24 / colCount,
    ...restProps,
  };

  const products = items.map((item) => (
    <Product item={item} {...commonProps} key={item.id} />
  ));
  products.push(
    <Product item={items[0]} {...commonProps} showLogin key="login" />
  );

  return (
    <>
      <Row gutter={[colSpace, rowSpace]}>{products}</Row>
    </>
  );
};

export default ProductSlider;
