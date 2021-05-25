import React from "react";
import "./main.css";
import Product from "./Product";
import Cart from "./cart";
import Category from "./Category";
class Main extends React.Component {
  render() {
    return (
      <section className="main">
        <Category />
        <Product />
        <Cart />
      </section>
    );
  }
}

export default Main;
