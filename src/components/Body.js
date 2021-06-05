import React from "react";
import Sidebar from "./Sidebar";
import ProductContainer from "./ProductContainer";
import CartContainer from "./CartContainer";
import SearchProduct from "./SearchProduct";
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
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <section className="main">
          <Sidebar categories={this.state.categories} />
          <div className="products">
            <SearchProduct />
            <ProductContainer products={this.state.categories} />
          </div>
          <CartContainer />
        </section>
      );
    }
  }
}

export default Body;
