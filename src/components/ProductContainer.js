import React from "react";
import ProductItem from "./ProductItem";
class ProductContainer extends React.Component {
 constructor(){
   super()
   this.state = {
    // active: false,
   }
 }
  
  
  render() {
    let { category, search } = this.props;
    const filteredProduct = category.ListProduct.filter((i) => {
      return i.product_name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
    });
    



    if (filteredProduct.length === 0) return null;
    
    return (
      <ul className="product" id={`${category.id}`}
      >
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
