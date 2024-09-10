import React from 'react';
import { formatCurrencyFromNumberToVND } from '../../utils/currency';

const Product = (props) => {
  const { product, handleSelectProduct, handleAddToCart } = props;
  const { thumbnail, title, price, id } = product;

  // Cach 1
  // const handleClickViewDetailProduct = () => {
  //   handleSelectProduct(id);
  // };

  return (
    <div className='card'>
      <img src={thumbnail} className='card-img-top p-2' alt={title} />
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{formatCurrencyFromNumberToVND(price)}</p>
        <div className='d-flex align-items-center gap-2'>
          {/* Cach 1 <button
            className='btn btn-success text-nowrap'
            onClick={handleClickViewDetailProduct}>
            Xem chi tiết
          </button> */}
          <button
            className='btn btn-success text-nowrap'
            onClick={() => handleSelectProduct(id)}>
            Xem chi tiết
          </button>

          <button
            className='btn btn-danger text-nowrap'
            onClick={() => handleAddToCart(id)}>
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
