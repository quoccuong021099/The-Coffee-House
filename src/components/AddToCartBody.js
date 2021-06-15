import React from "react";
import AddToCartChooseSize from "./AddToCartChooseSize";
import AddToCartTopping from "./AddToCartTopping";
import AddToCartNote from "./AddToCartNote";
class AddToCartBody extends React.Component {
  render() {
    const { productInfo, onClick, onChange } = this.props;
    return (
      <>
        <div className="add-to-cart__body">
          <AddToCartChooseSize productInfo={productInfo} onClick={onClick} />
          {productInfo.topping_list.length > 0 ? (
            <AddToCartTopping productInfo={productInfo} onchange={onChange} />
          ) : null}
          <AddToCartNote />
        </div>
      </>
    );
  }
}

export default AddToCartBody;
