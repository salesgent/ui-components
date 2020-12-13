import React, { useEffect, useRef, useState } from 'react';
import Product from './product';
import { products, productsForSliders } from '../__mocks__/products';
import ProductSlider, { getLayoutModel } from '../productSlider/productSlider';
import { useGridSize } from '../../hooks';
import ProductHelper from './utils/ProductHelper';

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

  const addToCart = (product) => {
    console.log('add to cart called', product);
  };

  const onNotifyClick = (data) => {
    console.log('nofify', data);
  };

  const onLoginClick = () => {
    alert('login pressed');
  };

  return (
    <ProductSlider
      items={showMoreProducts ? productsForSliders : products}
      {...props}
      layoutModel={getLayoutModel(props)}
      colCount={listToShow}
      addToCart={addToCart}
      onNotifyClick={onNotifyClick}
      onLoginClick={onLoginClick}
    />
  );
};

export const Basic = Template.bind({});
Basic.args = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: 'Molecules/ProductSlider/one',
  component: Product,
  argTypes: {
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
    titleBottomSpace: {
      defaultValue: 10,
      control: { type: 'range', min: 0, max: 50 },
    },
    detailBottomSpace: {
      defaultValue: 1,
      control: { type: 'range', min: 0, max: 50 },
    },
    showMoreProducts: {
      defaultValue: false,
      control: { type: 'boolean' },
    },
  },
};
