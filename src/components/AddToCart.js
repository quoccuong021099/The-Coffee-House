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
      name: "",
      valueNoteProduct: "",
    };
  }
  handleSize = (size, price) =>
    this.setState({
      size: size,
      price: price,
    });

  handlePrices = (data) => {
    let price = document.getElementById(data.code);
    if (price.checked) {
      this.setState({
        price: this.state.price + data.price,
        name: this.state.name.concat(` ${data.product_name} +`),
      });
    } else {
      this.setState({
        price: this.state.price - data.price,
        name: this.state.name.replace(` ${data.product_name} +`, ""),
      });
    }
  };
  getValueNoteProduct = (e) => {
    this.setState({
      valueNoteProduct: e.target.value,
    });
  };
  render() {
    const {
      productInfo,
      addProductFlag,
      onUpdateCartNumber,
      changeDeliveryCharge,
    } = this.props;
    const { name, size, valueNoteProduct } = this.state;
    return (
      <>
        <div className={`overlay`} onClick={this.props.closeModal}></div>
        <div className={`add-to-cart ${this.props.className}`}>
          <AddToCartHeader
            closeModal={this.props.closeModal}
            productInfo={productInfo}
            size={size}
            name={name}
          />
          <AddToCartBody
            productInfo={productInfo}
            handleSize={this.handleSize}
            handlePrices={this.handlePrices}
            getValueNoteProduct={this.getValueNoteProduct}
          />
          <AddToCartFooter
            closeModal={this.props.closeModal}
            productInfo={productInfo}
            price={this.state.price}
            addProductFlag={addProductFlag}
            onUpdateCartNumber={onUpdateCartNumber}
            changeDeliveryCharge={changeDeliveryCharge}
            size={size}
            name={name}
            valueNoteProduct={valueNoteProduct}
          />
        </div>
      </>
    );
  }
}

export default AddToCart;
