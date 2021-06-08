import React from "react";
import Sidebar from "./Sidebar";
import ProductContainer from "./ProductContainer";
import CartContainer from "./CartContainer";
import SearchProduct from "./SearchProduct";
import PlaceholderSidebar from "./placeholder/PlaceholderSidebar";
import PlaceholderProduct from "./placeholder/PlaceholderProduct";
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: true,
      categories: [],
    };
  }

  merge = (categoryList, products) => {
    categoryList.map((category) =>{
      let newData = []
      products.map((product)=>{
        if(product.categ_id.includes(category.id))
          {
            newData.push(product);
          }
      })
      category.ListProduct = newData
    })
    return categoryList
  };

  componentDidMount() {
    fetch("https://api.thecoffeehouse.com/api/v2/menu")
      .then((res) => res.json())
      .then((products) => {
        fetch("https://api.thecoffeehouse.com/api/v2/category/web")
          .then((res) => res.json())
          .then((categoryList) => {
            let newData = this.merge(categoryList, products.data);
            this.setState({
              categories: newData,
              isLoaded: false,
            });
          });
      });
  }

  render() {
    const { isLoaded, categories } = this.state;
    return (
      <section className="main">
        {isLoaded ? (
          <PlaceholderSidebar />
        ) : (
          <Sidebar categories={categories} />
        )}
        <div className="products">
          {isLoaded ? (
            <PlaceholderProduct />
          ) : (
            <ProductContainer products={categories} />
          )}
        </div>
        <CartContainer />
      </section>
    );
  }
}

export default Body;
