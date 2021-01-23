import React, { useEffect, useRef, useState } from 'react';
import Product from './product';
import { products, productsForSliders } from '../__mocks__/products';
import ProductSlider, { getLayoutModel } from '../productSlider/productSlider';
import { useGridSize } from '../../hooks';
import ProductHelper from './utils/ProductHelper';
// import 'antd/dist/antd.css';
import { Variant } from '../../constants';
import theme from '../../styles/theme';
const productHelper = new ProductHelper();

const Template = ({ showMoreProducts = false, ...props }) => {
  const size = useGridSize();
  const listToShowBasedOnWindowSize = productHelper.productListToShow(size);
  const [listToShow, setListToShow] = useState(props.colCount);
  const componentInitialized = useRef(false);

  useEffect(() => {
    setListToShow(listToShowBasedOnWindowSize);
  }, [listToShowBasedOnWindowSize]);

  useEffect(() => {
    if (componentInitialized.current) {
      setListToShow(props.colCount);
      return;
    }
    componentInitialized.current = true;
  }, [props.colCount]);

  const {
    rowSpace,
    colSpace,
    imageSize,
    imageBottomSpace,
    titleBottomSpace,
    titleLineClamp,
    detailBottomSpace,
    showBoxShadow,
    showQuickActions,
    backgroundColor,
    primaryColor,
    ...restProps
  } = props;

  const layoutModel = getLayoutModel({
    rowSpace,
    colSpace,
    imageSize,
    imageBottomSpace,
    titleBottomSpace,
    titleLineClamp,
    detailBottomSpace,
    showBoxShadow,
    showQuickActions,
    backgroundColor,
  });

  const newTheme = { colors: { primary: primaryColor } };
  return (
    <ProductSlider
      theme={newTheme}
      items={showMoreProducts ? productsForSliders : products}
      {...restProps}
      layoutModel={layoutModel}
      colCount={listToShow}
    />
  );
};

export const WithVariantOne = Template.bind({});
WithVariantOne.args = {};

export const WithVariantTwo = WithVariantOne.bind({});
WithVariantTwo.args = {
  variant: Variant.TWO,
};

export const WithVariantThree = WithVariantOne.bind({});
WithVariantThree.args = {
  variant: Variant.THREE,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Molecules/ProductSlider',
  component: Product,
  argTypes: {
    primaryColor: {
      control: 'color',
      defaultValue: theme.colors.primary,
    },
    variant: {
      defaultValue: 'one',
      control: { type: 'select', options: ['none', 'one', 'two', 'three'] },
    },
    colCount: {
      defaultValue: 3,
      control: { type: 'inline-radio', options: [1, 2, 3, 4, 6] },
    },
    rowSpace: {
      defaultValue: 8,
      control: { type: 'range', min: 0, max: 100 },
    },
    colSpace: {
      defaultValue: 8,
      control: { type: 'range', min: 0, max: 100 },
    },
    imageSize: {
      defaultValue: 100,
      control: { type: 'range', min: 10, max: 100 },
    },
    imageBottomSpace: {
      defaultValue: 15,
      control: { type: 'range', min: 0, max: 50 },
    },
    titleLineClamp: {
      defaultValue: 2,
      control: {
        type: 'range',
        min: 1,
        max: 5,
      },
    },
    titleBottomSpace: {
      defaultValue: 10,
      control: { type: 'range', min: 0, max: 50 },
    },
    detailBottomSpace: {
      defaultValue: 1,
      control: { type: 'range', min: 0, max: 50 },
    },
    backgroundColor: { control: 'color', defaultValue: '#FFFFFF' },
    showMoreProducts: {
      description: 'This field is only for the storybook example',
      defaultValue: false,
      control: { type: 'boolean' },
    },
    showBoxShadow: {
      defaultValue: true,
      control: { type: 'boolean' },
    },
    showLogin: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    showQuickActions: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
    onImageClick: { action: 'onImageClick' },
    onLoginClick: { action: 'onLoginClick' },
    onNotifyClick: { action: 'onNotifyClick' },
    onProductClick: { action: 'onProductClick' },
    addToCart: { action: 'addToCart' },
  },
};
