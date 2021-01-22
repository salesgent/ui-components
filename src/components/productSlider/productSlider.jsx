import React from 'react';
import { Row } from 'antd';
import Product from '../product/product';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../../styles/theme';

const noop = () => {};

export const getLayoutModel = ({
  rowSpace = 8,
  colSpace = 8,
  imageSize = 100,
  imageBottomSpace = 15,
  titleBottomSpace = 10,
  titleLineClamp = 2,
  detailBottomSpace = 0,
  showBoxShadow = true,
  showQuickActions = false,
  backgroundColor = 'white',
  variant = 'one',
} = {}) => {
  return {
    rowSpace, // px
    colSpace, // px
    showBoxShadow,
    backgroundColor,
    showQuickActions,
    variant,
    image: {
      size: imageSize, // in percentage.
      mb: imageBottomSpace,
    },
    title: {
      lineCamp: titleLineClamp,
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
  onImageClick: noop,
  onProductClick: noop,
};

const ProductSlider = (props = {}) => {
  const newProps = { ...defaultProps, ...props };
  const { colCount, items, theme, ...restProps } = newProps;

  const {
    colSpace,
    rowSpace,
    showBoxShadow,
    backgroundColor,
    variant,
  } = restProps.layoutModel;

  const commonProps = {
    variant,
    colValues: 24 / colCount,
    showBoxShadow,
    ...restProps,
  };

  const products = items.map((item) => (
    <Product item={item} {...commonProps} key={item.id} />
  ));

  const newTheme = {
    ...defaultTheme,
    colors: { ...defaultTheme.colors, ...theme.colors },
  };

  return (
    <ThemeProvider theme={newTheme}>
      <Row
        gutter={[colSpace, rowSpace]}
        style={{ background: backgroundColor }}
      >
        {products}
      </Row>
    </ThemeProvider>
  );
};

export default ProductSlider;
