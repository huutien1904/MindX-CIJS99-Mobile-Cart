import { formatCurrencyFromNumberToVND } from "../../utils/currency";

const CartModal = (props) => {
  // eslint-disable-next-line react/prop-types
  const { cart = [], increaseQuantity, decreaseQuantity, handleDeleteProductFromCart } = props;
  const isEmpty = cart.length === 0;
  let cartBodyElement = null;

  if (isEmpty) {
    cartBodyElement = (
      <div>
        <p>Không có sản phẩm nào trong giỏ hàng!</p>
      </div>
    );
  } else {
    cartBodyElement = cart.map((cartItem, index) => {
      const { data, quantity } = cartItem;
      const { id, title, price, thumbnail } = data;
      const totalPricePerProduct = quantity * price;
      return (
        <tr key={id}>
          <th scope="row">{index + 1}</th>
          <td>{title}</td>
          <td>
            <img src={thumbnail} width={30} />
          </td>
          <td>
            <div className="d-flex align-items-center gap-2">
              <button className="btn btn-primary" onClick={() => decreaseQuantity(id)}>
                -
              </button>
              <span>{quantity}</span>
              <button className="btn btn-primary" onClick={() => increaseQuantity(id)}>
                +
              </button>
            </div>
          </td>
          <td>{formatCurrencyFromNumberToVND(price)}</td>
          <td>{formatCurrencyFromNumberToVND(totalPricePerProduct)}</td>
          <td>
            <button className="btn btn-danger" onClick={() => handleDeleteProductFromCart(id)}>
              Xóa
            </button>
          </td>
        </tr>
      );
    });
  }

  const totalPrice = isEmpty
    ? 0
    : cart.reduce((acc, cur) => {
        return acc + cur.data.price * cur.quantity;
      }, 0);

  return (
    <div className="modal fade" id="cartModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Giỏ hàng
            </h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>

          <div className="modal-body">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Tên SP</th>
                  <th scope="col">Hình ảnh</th>
                  <th scope="col">Số lượng</th>
                  <th scope="col">Giá</th>
                  <th scope="col">Thành tiền</th>
                  <th>...</th>
                </tr>
              </thead>
              <tbody>
                {cartBodyElement}
                <tr>
                  <td>Tổng tiền</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <b>{formatCurrencyFromNumberToVND(totalPrice)}</b>
                  </td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
              Đóng
            </button>
            <button type="button" className="btn btn-primary">
              Thanh toán
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
