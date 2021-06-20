import React from "react";
import AddToCartChooseSize from "./AddToCartChooseSize";
import AddToCartTopping from "./AddToCartTopping";
import AddToCartNote from "./AddToCartNote";
class AddToCartBody extends React.Component {
  render() {
    const { productInfo, handleSize, handlePrices,getValueNoteProduct } = this.props;
    return (
      <>
        <div className="add-to-cart__body">
          <AddToCartChooseSize productInfo={productInfo} handleSize={handleSize} />
          {productInfo.topping_list.length > 0 ? (
            <AddToCartTopping productInfo={productInfo} handlePrices={handlePrices} />
          ) : null}
          <AddToCartNote getValueNoteProduct={getValueNoteProduct}/>
        </div>
      </>
    );
  }
}

export default AddToCartBody;
