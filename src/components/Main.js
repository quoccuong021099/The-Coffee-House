import React from "react";
import "./main.css";
import Product from "./Product";
import Cart from "./cart";
import Category from "./Category";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    fetch("https://api.thecoffeehouse.com/api/v2/category/web")
      .then((response) => response.json())
      .then((categoryList) => {
        this.setState({ categories: categoryList });
      });
     
  }

  render() {
    return (
      <section className="main">
        <Category />
        <div className="products">
          <div className="form-group">
          <svg
            className="search__icon"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              fill="none"
              stroke="#c5c5c5"
              stroke-width="1.1"
              cx="9"
              cy="9"
              r="7"
            ></circle>
            <path
              fill="none"
              stroke="#c5c5c5"
              stroke-width="1.1"
              d="M14,14 L18,18 L14,14 Z"
            ></path>
          </svg>
          <input
            type="text"
            className="input-search input-add"
            placeholder="Tìm kiếm sản phẩm"
          />
        </div>
          {this.state.categories.map((category) => (
          <ul className="product">
            <span key={category.id}> {category.name} </span> 
            <Product categoryID={category.id}/>
          </ul>
            ))}
          </div>
       <Cart />
      </section>
    );
  }
}

export default Main;
