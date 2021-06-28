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
import Body from "./components/Body/Body";
import Footer from "./components/Footer";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deliveryChargeFlag: false,
      cartNumber: 0,
    };
  }
  changeDeliveryChargeFlag = () => {
    this.setState({
      deliveryChargeFlag: true,
    });
  };
  getAmount = (number) => {
    let amount = 0;
    if (number.length > 0) {
      number.map((item) => (amount += item.amount));
    }
    this.setState({
      cartNumber: amount,
    });
  };
  render() {
    return (
      <div className="App">
        <Header
          changeDeliveryChargeFlag={this.changeDeliveryChargeFlag}
          cartNumber={this.state.cartNumber}
        />
        <Body
          changeDeliveryChargeFlag={this.changeDeliveryChargeFlag}
          deliveryChargeFlag={this.state.deliveryChargeFlag}
          getAmount={this.getAmount}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
