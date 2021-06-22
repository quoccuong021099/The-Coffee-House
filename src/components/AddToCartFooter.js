import React from "react";
import Button from "../common/Button";
import SubtractButton from "../common/SubtractButton";
import AddButton from "../common/AddButton";
class AddToCart extends React.Component {
  constructor() {
    super();
    this.state = {
      amount: 1,
    };
  }
  onSubtractButton = () => {
    if (this.state.amount > 0)
      this.setState({
        amount: this.state.amount - 1,
      });
  };
  onAddButton = () => {
    this.setState({
      amount: this.state.amount + 1,
    });
  };

  render() {
    const {
      closeModal,
      price,
      toppingName,
      valueNoteProduct,
      size,
      productInfo,
      toppingPrice,
    } = this.props;
    const { amount } = this.state;
    let productInCart = {
      totalPrice: amount * (price + toppingPrice),
      amount: amount,
      toppingName: toppingName,
      valueNoteProduct: valueNoteProduct,
      size: size,
      product_name: productInfo.product_name,
      // productInfo: productInfo,
      image: productInfo.image,
      variants: productInfo.variants,
      topping_list: productInfo.topping_list
    };
    return (
      <>
        <div className="add-to-cart__footer">
          <div className="add-to-cart__amount">
            <SubtractButton
              width="36"
              height="36"
              onSubtractButton={this.onSubtractButton}
            />
            <span>{this.state.amount}</span>
            <AddButton width="36" height="36" onAddButton={this.onAddButton} />
          </div>
          <div>
            <div className="add-to-cart__submit" onClick={closeModal}>
              <Button
                className="add-to-cart__btn-submit"
                type="submit"
                value={`THÊM VÀO GIỎ${amount * (price + toppingPrice)} ₫`}
                onClick={() => this.props.moveToCart(productInCart)}
              ></Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddToCart;
