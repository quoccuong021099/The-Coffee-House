import React from "react";
import AddButton from './components_child/AddButton'
import Image from './components_child/Image'
class ProductContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.products.map((item) => ( item.categ_id.includes(this.props.categoryID) ?
          <li className="product__item" key={item._id} >
            <ul className="product__list">
              <li className="product__list-item">
                <a href="#" className="product__list-link">
                  <Image src={item.image} width="80" height="80" />
                  <div className="product__info">
                    <h2>{item.product_name}</h2>
                    <p>{item.description}</p>
                    <div className="product__price">
                      <span>{item.price}</span>
                      <AddButton width="30" height="30"/>
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

export default ProductContainer;
