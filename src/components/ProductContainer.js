import React from "react";
import ProductItem from './ProductItem'
class ProductContainer extends React.Component {
  render() {
    return (
      <div>
        {this.props.products.map((category) =>
           category.ListProduct.length !== 0 ? (
              <ul className="product" key={category._id} id={`${category._id}`}>
                <span> {category.name} </span>
                <ProductItem
                  products={category.ListProduct}
                />
              </ul>
            ) : null
          )}
      </div>
    );
  }
}

export default ProductContainer;
