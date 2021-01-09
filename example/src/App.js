import React from 'react';

import { ProductSlider } from '@salesgenterp/ui-components';

const App = () => {
  return (
    <ProductSlider
      addToCart={() => {}}
      colCount={3}
      items={[
        {
          currency: '$',
          description: 'SKU: S-180A1-MAT',
          id: 1,
          imgUrl:
            'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          price: 100,
          qty: 30,
          title:
            'iPad Air 2 / iPad Air 3 / iPad Mini 4 / iPad Pro 12.9 1st Gen / iPad Pro 10.5 Front Camera Flex Cable',
        },
        {
          currency: '$',
          description: 'SKU: S-180A1-MAT',
          id: 2,
          imgUrl:
            'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          price: 100,
          qty: 0,
          title:
            'iPad Air 2 / iPad Air 3 / iPad Mini 4 / iPad Pro 12.9 1st Gen / iPad Pro 10.5 Front Camera Flex Cable',
        },
        {
          currency: '$',
          description: 'SKU: S-180A1-MAT',
          id: 3,
          imgUrl:
            'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
          price: 100,
          qty: 55,
          title:
            'iPad Air 2 / iPad Air 3 / iPad Mini 4 / iPad Pro 12.9 1st Gen / iPad Pro 10.5 Front Camera Flex Cable',
        },
      ]}
      layoutModel={{
        backgroundColor: '#FFFFFF',
        colSpace: 8,
        detail: {
          mb: 1,
        },
        image: {
          mb: 15,
          size: 100,
        },
        rowSpace: 8,
        showBoxShadow: true,
        showQuickActions: false,
        title: {
          lineCamp: 2,
          mb: 10,
        },
        variant: 'one',
      }}
      onLoginClick={function noRefCheck() {}}
      onNotifyClick={function noRefCheck() {}}
      variant="one"
    />
  );
};

export default App;
