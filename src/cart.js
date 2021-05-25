import React from "react";
import "./cart.css";

class Cart extends React.Component {
  render() {
    return (
      <div className="cart">
        <div className="cart-fixed">
        <div className="btn__cart">
          <button className="btn-cart">XEM GIỎ HÀNG</button>
        </div>
        <div className="coupon">
          <div className="total-price">
            <span>Cộng (0 món)</span>
            <span>0 ₫</span>
          </div>
          <div className="delivery">
            <span>Vận chuyển</span>
            <span>10.000 ₫</span>
          </div>
          <form className="form-control">
            <input type="text"  placeholder="Nhập mã ưu đãi tại đây" />
            <input type="submit" value="ÁP DỤNG" />
          </form>
        </div>
          <div className="total">
            <span>Tổng cộng</span>
            <h3>10.000đ</h3>
          </div>
          </div>
      </div>
    );
  }
}

export default Cart;
