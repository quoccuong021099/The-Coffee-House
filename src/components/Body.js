import React from "react";
import Sidebar from "./Sidebar";
import ProductContainer from "./ProductContainer";
import CartContainer from "./CartContainer";
import Input from "./components_child/Input";
import SearchProduct from "./SearchProduct";
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      categories: [],
    };
  }

  componentDidMount() {
    fetch("https://api.thecoffeehouse.com/api/v2/category/web")
      .then((response) => response.json())
      .then((categoryList) => {
        this.setState({ categories: categoryList });
      });
    fetch("https://api.thecoffeehouse.com/api/v2/menu")
      .then((res) => res.json())
      .then((product) => {
        this.setState({
          products: product.data,
        });
      });
  }

  render() {
    this.state.categories.forEach((category) => {
      let arr = [];
      this.state.products.forEach((product) => {
        if (product.categ_id.includes(category.id)) {
          arr.push(product);
        }
      });
      category.ListProduct = arr;
    });
    return (
      <section className="main">
        <Sidebar categories={this.state.categories} />
        <div className="products">
          <SearchProduct/>
          {this.state.categories.map((category) =>
            Object.keys(category.ListProduct).length !== 0 ? (
              <ul className="product" key={category._id} id={`${category._id}`}>
                <span> {category.name} </span>
                <ProductContainer
                  products={this.state.products}
                  categoryID={category.id}
                />
              </ul>
            ) : null
          )}
        </div>
        <CartContainer />
      </section>
    );
  }
}

export default Body;
