import React from "react";
import Sidebar from "./Sidebar";
import ProductContainer from "./ProductContainer";
import CartContainer from "./CartContainer";
import SearchProduct from "./SearchProduct";
import PlaceholderSidebar from "./placeholder/PlaceholderSidebar";
import PlaceholderProduct from "./placeholder/PlaceholderProduct"
// import Loading from './Loading'
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      products: [],
      categories: [],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      fetch("https://api.thecoffeehouse.com/api/v2/menu")
        .then((res) =>
          // console.log(res)
          res.json()
        )
        .then((product) => {
          this.setState({
            isLoaded: true,
            products: product.data,
          });
        });
      fetch("https://api.thecoffeehouse.com/api/v2/category/web")
        .then((res) => res.json())
        .then((categoryList) => {
          this.setState({
            isLoaded: true,
            categories: categoryList,
          });
        });
    }, 2000);
  }

  render() {
    this.state.categories.map((category) => {
      let arr = [];
      this.state.products.map((product) => {
        if (product.categ_id.includes(category.id)) {
          arr.push(product);
        }
        return arr;
      });
      category.ListProduct = arr;
      return arr;
    });
    const { isLoaded } = this.state;

    return (
      <section className="main">
        {!isLoaded ? (
          <PlaceholderSidebar />
        ) : (
          <Sidebar categories={this.state.categories} />
        )}
        <div className="products">
          <SearchProduct />
          {!isLoaded ? (
            <PlaceholderProduct />
          ) : (
            <ProductContainer products={this.state.categories} />
          )}
        </div>
        <CartContainer />
      </section>
    );
  }
}

export default Body;
