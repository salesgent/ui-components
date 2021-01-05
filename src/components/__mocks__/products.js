const lessThenFifty = { qty: 30 };
const outOfStock = { qty: 0 };
const moreThenFifty = { qty: 55 };

const defaultProducts = [lessThenFifty, outOfStock, moreThenFifty];

const Product = (modifyEntries = {}) => ({
  id: 1,
  imgUrl: 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png',
  title:
    'iPad Air 2 / iPad Air 3 / iPad Mini 4 / iPad Pro 12.9 1st Gen / iPad Pro 10.5 Front Camera Flex Cable',
  description: 'SKU: S-180A1-MAT',
  price: 100,
  currency: '$',
  qty: 10,
  ...modifyEntries,
});

const getDefaultProductByIndex = (index) => {
  return defaultProducts[index] || {};
};

const createProducts = (total = 10) => {
  const products = [];

  for (let i = 0; i < total; i++) {
    const defaultProduct = getDefaultProductByIndex(i);
    const p = Product({
      id: i + 1,
      ...defaultProduct,
    });

    products.push(p);
  }

  return products;
};

export const productsForSliders = createProducts();
export const products = defaultProducts.map((dp, index) => {
  const prod = { ...getDefaultProductByIndex(index) };
  prod.id = index + 1;
  return Product({ ...prod });
});
