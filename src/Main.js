import React from "react";
import "./main.css";
import Product from "./Product";
import Cart from "./cart"
class Main extends React.Component {
  render() {
    return (
      <section className="main">
        <div className="category">
        <ul className="category-fixed">
            <li className="category__item"><a href="#">Phổ biến</a></li>
            <li className="category__item"><a href="#">Cà phê</a></li>
            <li className="category__item"><a href="#">Cà phê pha máy</a></li>
        </ul>
        </div>
        <div className="products">
            <div className="form-group">
            <svg className="search__icon" width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"> 
                <circle fill="none" stroke="#c5c5c5" stroke-width="1.1" cx="9" cy="9" r="7"></circle> 
                <path fill="none" stroke="#c5c5c5" stroke-width="1.1" d="M14,14 L18,18 L14,14 Z"></path>
            </svg>
            <input type="text" className="input-search input-add" placeholder="Tìm kiếm sản phẩm"/>
            </div>
            <Product />
        </div>
        < Cart/>
      </section>
    );
  }
}

export default Main;
