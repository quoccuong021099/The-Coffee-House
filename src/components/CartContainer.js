import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Currency from "../common/Currency";
class CartContainer extends React.Component {
  plusPrice = () => {
    let price1 = 0;
    if (this.props.productInfoForCart.length > 0) {
      this.props.productInfoForCart.map((item) => (price1 += item.totalPrice));
    }
    return price1;
  };
  plusNumberCart = () => {
    let amount = 0;
    if (this.props.productInfoForCart.length > 0) {
      this.props.productInfoForCart.map((item) => (amount += item.amount));
    }
    return amount;
  };
  render() {
    const { productInfoForCart, editProduct } = this.props;
    let plusPrice = this.plusPrice();
    let plusNumberCart = this.plusNumberCart();
    
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
          <div className="cart-list">
            {productInfoForCart.length > 0 &&
              productInfoForCart.map(
                (item, index) =>
                  item.amount > 0 && (
                    <div
                      className="cart-list-product"
                      key={`${index}`}
                      onClick={() => editProduct(item, index)}
                    >
                      <div className="cart-list-product__left">
                        <span className="cart-list-product__left-amount">
                          {item.amount}
                        </span>
                        <div className="cart-list-product__left-param">
                          <h1 className="cart-list-product__left-name">
                            {item.product_name}
                          </h1>
                          <span className="cart-list-product__left-more">
                            {item.size}
                            {item.toppingName !== "" &&
                              `+ ${item.toppingName.slice(0, -2)}`}
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
                  )
              )}
          </div>
          <div className="coupon">
            <div className="total-price">
              <span>Cộng ({plusNumberCart} món)</span>
              <Currency value={plusPrice > 0 ? plusPrice : 0} />
            </div>
            <div className="delivery">
              <span>Vận chuyển</span>
              <Currency
                className="currency__delivery"
                value={
                  this.props.deliveryChargeFlag
                    ? plusPrice > 50000
                      ? 0
                      : 10000
                    : 0
                }
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
          <div className="total" >
            <span>Tổng cộng</span>
            <Currency
              className="currency__total"
              value={
                this.props.deliveryChargeFlag
                  ? plusPrice > 50000
                    ? plusPrice
                    : plusPrice + 10000
                  : 0
              }
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CartContainer;
