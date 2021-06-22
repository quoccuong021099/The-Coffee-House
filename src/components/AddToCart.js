import React from "react";
import AddToCartFooter from "./AddToCartFooter";
import AddToCartHeader from "./AddToCartHeader";
import AddToCartBody from "./AddToCartBody";
class AddToCart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: this.props.productInfo.variants[0].val,
      price: this.props.productInfo.variants[0].price,
      toppingPrice: 0,
      toppingName: "",
      valueNoteProduct: "",
    };
  }

  handlePrices = (data) => {
    let price = document.getElementById(data.code);
    if (price.checked) {
      this.setState({
        toppingPrice: this.state.toppingPrice + data.price,
        toppingName: this.state.toppingName.concat(` ${data.product_name} +`),
      });
    } else {
      this.setState({
        toppingPrice: this.state.toppingPrice - data.price,
        toppingName: this.state.toppingName.replace(
          ` ${data.product_name} +`,
          ""
        ),
      });
    }
  };
  handleSize = (size, price) =>
    // console.log(size,price);
    this.setState({
      size: size,
      price: price,
    });
  getValueNoteProduct = (e) => {
    this.setState({
      valueNoteProduct: e.target.value,
    });
  };
  render() {
    const { productInfo, addProductFlag, moveToCart, closeModal } = this.props;
    const { toppingName, size, price, valueNoteProduct, toppingPrice } =
      this.state;
    return (
      <>
        <div className={`overlay`} onClick={this.props.closeModal}></div>
        <div className={`add-to-cart ${this.props.className}`}>
          <AddToCartHeader
            closeModal={this.props.closeModal}
            productInfo={productInfo}
            size={size}
            toppingName={toppingName}
          />
          <AddToCartBody
            productInfo={productInfo}
            handleSize={this.handleSize}
            handlePrices={this.handlePrices}
            getValueNoteProduct={this.getValueNoteProduct}
          />
          <AddToCartFooter
            closeModal={closeModal}
            productInfo={productInfo}
            price={price}
            size={size}
            toppingName={toppingName}
            // addProductFlag={addProductFlag}
            moveToCart={moveToCart}
            valueNoteProduct={valueNoteProduct}
            toppingPrice={toppingPrice}
          />
        </div>
      </>
    );
  }
}

export default AddToCart;
