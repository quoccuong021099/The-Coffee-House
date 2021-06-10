import React from "react";
import ProductItem from "./ProductItem";
class ProductContainer extends React.Component {
  constructor(){
    super()
    this.state={
      class: false
    }
    this._handleScroll = this._handleScroll.bind(this);
  }
  _handleScroll(e) {
    console.log('scrolling')
  }

  render() {
    let { category, search } = this.props;
    const filteredProduct = category.ListProduct.filter((i) => {
      return i.product_name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    if (filteredProduct.length === 0) return null;
    return (
      <ul className="product" id={`${category._id}`}  onScroll={this._handleScroll}>
        <span> {category.name} </span>
        {filteredProduct.map((item) => (
          <ProductItem
            item={item}
            key={item._id}
            filteredProduct={filteredProduct}
          />
        ))}
      </ul>
    );
  }
}

export default ProductContainer;
