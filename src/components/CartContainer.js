import React from "react";
import Button from './common/Button'
import Input from './common/Input'
import Currency from './common/Currency'
class CartContainer extends React.Component {

  render() {
    const {deliveryCharge} = this.props
    // productInfoForCart
    // console.log(productInfoForCart);
    return (
      <div className="cart">
        <div className="cart-fixed">
        <div className="btn__cart">
        <Button className="btn-cart" type="button" value="XEM GIỎ HÀNG"></Button>
        </div>
        {/* <div className="cart-list-product">
        <h2>{productInfoForCart[0]}</h2>
        <h2>{productInfoForCart[1]}</h2>
        <h2>{productInfoForCart[2]}</h2>
        <h2>{productInfoForCart[3]}</h2>
        <h2>{productInfoForCart[4]}</h2>
        </div> */}
        <div className="coupon">
          <div className="total-price">
            <span>Cộng (0 món)</span>
            <Currency value="0"/>
          </div>
          <div className="delivery">
            <span>Vận chuyển</span>
            <Currency className="currency__delivery" value={deliveryCharge ? `10.000` : `0`}/>
          </div>
          <form className="form-control">
            <Input type="text" className="input__coupon"  placeholder="Nhập mã ưu đãi tại đây" />
            <Button className="btn__apply" type="submit" value="ÁP DỤNG"></Button>
          </form>
        </div>
          <div className="total">
            <span>Tổng cộng</span>
            <Currency className="currency__total" value={deliveryCharge ? `10.000` : `0`}/>
          </div>
          </div>
      </div>
    );
  }
}

export default CartContainer;
