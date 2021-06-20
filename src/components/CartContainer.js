import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Currency from "../common/Currency";
class CartContainer extends React.Component {
  render() {
    const { deliveryCharge, productInfoForCart } = this.props;
    // productInfoForCart
    // console.log(productInfoForCart);
    return (
      <div className="cart">
        <div className="cart-fixed">
          <div className="btn__cart">
            <Button
              className="btn-cart"
              type="button"
              value="XEM GIỎ HÀNG"
            ></Button>
          </div>
          {productInfoForCart.length > 0 && (
            <div className="cart-list-product">
              <div className="cart-list-product__left">
                <span className="cart-list-product__left-amount">
                  {productInfoForCart[0]}
                </span>
                <div className="cart-list-product__left-param">
                  <h1 className="cart-list-product__left-name">
                    {productInfoForCart[4]}
                  </h1>
                  <span className="cart-list-product__left-more">
                    {productInfoForCart[2]}
                    {productInfoForCart[3] !== "" &&
                      `+ ${productInfoForCart[3].slice(0, -2)}`}
                  </span>
                  <p className="cart-list-product__left-note">
                    {productInfoForCart[5]}
                  </p>
                </div>
              </div>
              <div className="cart-list-product__right">
                <Currency
                  className="cart-list-product__right-currency"
                  value={productInfoForCart[1]}
                />
              </div>
            </div>
          )}
          <div className="coupon">
            <div className="total-price">
              <span>Cộng (0 món)</span>
              <Currency value="0" />
            </div>
            <div className="delivery">
              <span>Vận chuyển</span>
              <Currency
                className="currency__delivery"
                value={deliveryCharge ? `10.000` : `0`}
              />
            </div>
            <form className="form-control">
              <Input
                type="text"
                className="input__coupon"
                placeholder="Nhập mã ưu đãi tại đây"
              />
              <Button
                className="btn__apply"
                type="submit"
                value="ÁP DỤNG"
              ></Button>
            </form>
          </div>
          <div className="total">
            <span>Tổng cộng</span>
            <Currency
              className="currency__total"
              value={deliveryCharge ? `10.000` : `0`}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CartContainer;
