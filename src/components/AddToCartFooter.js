import React from "react";
import Button from "./common/Button";
import SubtractButton from "./common/SubtractButton";
import AddButton from "./common/AddButton";
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
      onUpdateCartNumber,
      closeModal,
      changeDeliveryCharge,
      size,
      name,
      productInfo,
    } = this.props;
    // console.log(productInfo.product_name);
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
          <div onClick={changeDeliveryCharge}>
            <div className="add-to-cart__submit" onClick={closeModal}>
              <Button
                className="add-to-cart__btn-submit"
                type="submit"
                value={`THÊM VÀO GIỎ ${this.props.price * this.state.amount} ₫`}
                onClick={() =>
                  onUpdateCartNumber(
                    this.state.amount,
                    this.props.price * this.state.amount,
                    size,
                    name,
                    productInfo.product_name
                  )
                }
              ></Button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddToCart;
