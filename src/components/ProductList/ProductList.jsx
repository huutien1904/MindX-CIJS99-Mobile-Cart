import React from 'react';
import Product from '../Product/Product';

// Danh sách objects -> Danh sách nhưng cái mảng Component
const ProductList = (props) => {
  const { products = [], handleSelectProduct, handleAddToCart } = props;

  // Phải có unique key cho child element
  // khi dùng map
  // Array Prototype
  const listProduct =
    products &&
    products.map((product) => (
      <Product
        product={product}
        handleSelectProduct={handleSelectProduct}
        handleAddToCart={handleAddToCart}
        key={product.id}
      />
    ));

  return (
    <div className='d-flex align-items-center justify-content-center gap-4 pt-5'>
      {listProduct}
    </div>
  );
};

export default ProductList;
