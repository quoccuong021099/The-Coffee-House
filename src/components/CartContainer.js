import React from "react";
import Button from './common/Button'
import Input from './common/Input'
import Currency from './common/Currency'
class CartContainer extends React.Component {

  render() {
    return (
      <div className="cart">
        <div className="cart-fixed">
        <div className="btn__cart">
        <Button className="btn-cart" type="button" value="XEM GIỎ HÀNG"></Button>
        </div>
        <div className="coupon">
          <div className="total-price">
            <span>Cộng (0 món)</span>
            <Currency value="0đ"/>
          </div>
          <div className="delivery">
            <span>Vận chuyển</span>
            <Currency className="currency__delivery" value="10.000đ"/>
          </div>
          <form className="form-control">
            <Input type="text" className="input__coupon"  placeholder="Nhập mã ưu đãi tại đây" />
            <Button className="btn__apply" type="submit" value="ÁP DỤNG"></Button>
          </form>
        </div>
          <div className="total">
            <span>Tổng cộng</span>
            <Currency className="currency__total" value="10.000đ"/>
          </div>
          </div>
      </div>
    );
  }
}

export default CartContainer;
