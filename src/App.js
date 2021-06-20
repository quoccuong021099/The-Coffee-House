import React from "react";
import "./assets/App.css";
import "./assets/Header.css";
import "./assets/Body.css";
import "./assets/PlaceholderSidebar.css";
import "./assets/PlaceholderProduct.css";
import "./assets/ProductContainer.css";
import "./assets/add-to-cart.css";
import "./assets/CartContainer.css";
import "./assets/Footer.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cartNumber: 0,
      // amount: 0,
      // totalPrice: 0,
      // size: '',
      // name: '',
      // productNameInCart: '',
      productInfoForCart: [],
      deliveryCharge: false,
    };
  }

  onUpdateCartNumber = (amount,totalPrice,size,name,productNameInCart,valueNoteProduct) => {
    // console.log(amount,totalPrice,size,name,productNameInCart);
    let productInfo = [amount,totalPrice,size,name,productNameInCart,valueNoteProduct]
    this.setState({
      cartNumber: this.state.cartNumber + amount, 
      productInfoForCart: productInfo
    });
  };

  changeDeliveryCharge = () => {
    this.setState({
      deliveryCharge: true,
    });
  };
 
  render() {
    const { cartNumber,deliveryCharge,productInfoForCart} = this.state;
    return (
      <div className="App">
        <Header
          cartNumber={cartNumber}
          changeDeliveryCharge={this.changeDeliveryCharge}
        />
        <Body
          onUpdateCartNumber={this.onUpdateCartNumber}
          changeDeliveryCharge={this.changeDeliveryCharge}
          deliveryCharge={deliveryCharge}
          productInfoForCart={productInfoForCart}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
