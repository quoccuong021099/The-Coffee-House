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
    const { onUpdateCartNumber, closeModal } = this.props;
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
          <div className="add-to-cart__submit" onClick={closeModal}>
            <Button
              className="add-to-cart__btn-submit"
              type="submit"
              value={`THÊM VÀO GIỎ ${this.props.price * this.state.amount}`}
              onClick={onUpdateCartNumber}
              
            >
            </Button>
             
          </div>
        </div>
      </>
    );
  }
}

export default AddToCart;
