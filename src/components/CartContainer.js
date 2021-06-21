import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Currency from "../common/Currency";
class CartContainer extends React.Component {
  render() {

    const { deliveryCharge, productInfoForCart } = this.props;
    // productInfoForCart.length > 1 &&
    // var newArr = productInfoForCart.filter(
    //   (item) =>
    //   item.nameTopping !== productInfo.nameTopping &&
    //   item.size !== productInfo.size &&
    //   item.productNameInCart !== productInfo.productNameInCart
    //   )

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
          
          {
               
              
          }
          {productInfoForCart.length > 0 && (
            productInfoForCart.map((item,index) => (
              <div className="cart-list-product" key={`${index}`}>
              <div className="cart-list-product__left">
                <span className="cart-list-product__left-amount">
                  {item.amount}
                </span>
                <div className="cart-list-product__left-param">
                  <h1 className="cart-list-product__left-name">
                    {item.productNameInCart}
                  </h1>
                  <span className="cart-list-product__left-more">
                    {item.size}
                    {item.nameTopping !== "" &&
                      `+ ${item.nameTopping.slice(0,-2)}`}
                  </span>
                  <p className="cart-list-product__left-note">
                    {item.valueNoteProduct}
                  </p>
                </div>
              </div>
              <div className="cart-list-product__right">
                <Currency
                  className="cart-list-product__right-currency"
                  value={item.totalPrice}
                />
              </div>
            </div>
            ))
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
