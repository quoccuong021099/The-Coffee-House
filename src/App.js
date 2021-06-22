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
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
