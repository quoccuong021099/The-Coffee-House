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
      name: ''
    };
  }
  handleSize = (data,data1) =>
    this.setState({
      size: data,
      price: data1
    });

  handlePrices = (data) => {
    console.log(data);
    let price = document.getElementById(data.code);
    if (price.checked) {
      this.setState({
        price: this.state.price + data.price,
        name: this.state.name.concat(` ${data.product_name} +`)
      });
    }
    else{
      this.setState({
        price: this.state.price - data.price,
        name: this.state.name.replace(`${data.product_name} +`,'')
      });
    }
  };

  render() {
    const { productInfo, addProductFlag } = this.props;
    const {name,size} = this.state
    return (
      <>
        <div
          className={`overlay ${this.props.className}`}
          onClick={this.props.closeModal}
        ></div>
        <div className={`add-to-cart ${this.props.className}`}>
          <AddToCartHeader
            closeModal={this.props.closeModal}
            productInfo={productInfo}
            size={size}
            name={name}
          />
          <AddToCartBody
            productInfo={productInfo}
            onClick={this.handleSize}
            onChange={this.handlePrices}
            
          />
          <AddToCartFooter productInfo={productInfo} price={this.state.price} addProductFlag={addProductFlag}/>
        </div>
      </>
    );
  }
}

export default AddToCart;