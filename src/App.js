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
  constructor(){
    super()
    this.state={
      cartNumber: 0
    }
  }

  onUpdateCartNumber = () => {
    this.setState({
      cartNumber: this.state.cartNumber + 1
    })
  }
  render() {
    const {cartNumber} = this.state
    return (
      <div className="App">
        <Header cartNumber = {cartNumber}/>
        <Body onUpdateCartNumber={this.onUpdateCartNumber}/>
        <Footer />
      </div>
    );
  }
}

export default App;
