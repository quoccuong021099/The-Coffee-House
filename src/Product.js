import React from "react";
import "./product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      categories: [],
    };
  }

  componentDidMount() {
    fetch("https://api.thecoffeehouse.com/api/v2/menu")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          // isLoaded: true,
          items: result.data,
        });
      });
    fetch("https://api.thecoffeehouse.com/api/v2/category/web")
      .then((response) => response.json())
      .then((categoryList) => {
        this.setState({ categories: categoryList });
      });
  }
  render() {
    return (
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
        <ul className="product">
          {this.state.items.map((item) => (
            <li className="product__item" key={item.id}>
              {this.state.categories.map((category) => (
                <span className="product__item-title" key={category.id}>
                  {category.name}
                </span>
              ))}
              <ul className="product__list">
                <li className="product__list-item">
                  <a href="#" className="product__list-link">
                    <img src={item.image} width="80" height="80" />
                    <div className="product__info">
                      <h2>{item.product_name}</h2>
                      <p>{item.description}</p>
                      <div className="product__price">
                        <span>{item.price}</span>
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle
                            fill="none"
                            stroke="#ea8025"
                            stroke-width="1.1"
                            cx="9.5"
                            cy="9.5"
                            r="9"
                          ></circle>
                          <line
                            fill="none"
                            stroke="#ea8025"
                            x1="9.5"
                            y1="5"
                            x2="9.5"
                            y2="14"
                          ></line>
                          <line
                            fill="none"
                            stroke="#ea8025"
                            x1="5"
                            y1="9.5"
                            x2="14"
                            y2="9.5"
                          ></line>
                        </svg>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Product;
