import React from "react";
import ProductItem from "./ProductItem";
import AddToCart from "./AddToCart";
class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addProductFlag: false,
      productInfo: null,
    };
  }

  addProduct = (data) =>
    this.setState({ addProductFlag: true, productInfo: data });

  closeModal = () =>{
    this.setState({
      addProductFlag: false
    });
    setTimeout(()=>{
      this.setState({
        productInfo: null
      })
    }, 300
    );
    }
  render() {
    let { category, searchProduct, onUpdateCartNumber,changeDeliveryCharge } = this.props;
    let { addProductFlag, productInfo } = this.state;

    const filteredProduct = category.ListProduct.filter((i) => {
      return i.product_name.toLowerCase().includes(searchProduct.toLowerCase());
    });
    if (filteredProduct.length === 0) return null;

    return (
      <>
        <ul className="product" id={`${category.id}`}>
          <span> {category.name} </span>
          {filteredProduct.map((filteredItem) => (
            <ProductItem
              filteredItem={filteredItem}
              key={filteredItem._id}
              filteredProduct={filteredProduct}
              addProduct={this.addProduct}
              addProductFlag={addProductFlag}
            />
          ))}
        </ul>
        {productInfo !== null ? (
          <AddToCart
            className={addProductFlag ? " " : "add-to-cart__display"}
            closeModal={this.closeModal}
            productInfo={productInfo}
            addProductFlag={addProductFlag}
            onUpdateCartNumber={onUpdateCartNumber}
            changeDeliveryCharge={changeDeliveryCharge}
          />
        ) : null}
      </>
    );
  }
}

export default ProductContainer;
