import React from 'react';

const ProductDetail = (props) => {
  const { product } = props;

// Conditional rendering
  if (!product) {
    return (
      <div className='pt-5'>
        <p>Chưa có sản phẩm nào được chọn</p>
      </div>
    );
  }

  const { title, thumbnail, details = {} } = product;
  const { monitor, frontCam, backCam, ram, rom, os } = details;

  return (
    <div className='pt-5'>
      <div className='row'>
        <div className='col-3'>
          <p className='h5 text-center'>{title}</p>
          <img src={thumbnail} alt='' width={300} />
        </div>
        <div className='col-9'>
          <h5 className='h5'>Thông số kỹ thuật</h5>
          <table class='table'>
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{monitor}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{os}</td>
              </tr>
              <tr>
                <td>Cam trước</td>
                <td>{frontCam}</td>
              </tr>
              <tr>
                <td>Cam sau</td>
                <td>{backCam}</td>
              </tr>
              <tr>
                <td>Ram</td>
                <td>{ram}</td>
              </tr>
              <tr>
                <td>Rom</td>
                <td>{rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
