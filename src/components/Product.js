import React from "react";
import "./product.css";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    fetch("https://api.thecoffeehouse.com/api/v2/menu")
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          items: result.data,
        });
      });
  }
  render() {
    return (
      <div>
        {this.state.items.map((item) => ( item.categ_id.includes(this.props.categoryID) ?
          <li className="product__item" key={item.id} >
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
          : null
        ))}
      </div>
    );
  }
}

export default Product;
