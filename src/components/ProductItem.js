import React from "react";
import AddButton from "./common/AddButton";
import Image from "./common/Image";
import Currency from "./common/Currency";
class ProductItem extends React.Component {
  render() {
    let { item } = this.props;
    return (
      <li className="product__item" >
        <ul className="product__list">
          <li className="product__list-item">
            <a href="#a" className="product__list-link">
              <Image src={item.image} width="80" height="80" />
              <div className="product__info">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <div className="product__price">
                  <Currency value={item.price} />
                  <AddButton width="30" height="30" />
                </div>
              </div>
            </a>
          </li>
        </ul>
      </li>
    );
  }
}

export default ProductItem;
