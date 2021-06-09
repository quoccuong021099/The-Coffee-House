import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import CartContainer from "./CartContainer";
import PlaceholderSidebar from "./placeholder/PlaceholderSidebar";
import PlaceholderProduct from "./placeholder/PlaceholderProduct";
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      categories: [],
    };
  }

  merge = (categoryList, products) => {
    categoryList.map((category) => {
      let newData = [];
      products.map((product) => {
        if (product.categ_id.includes(category.id)) {
          newData.push(product);
        }
        return newData;
      });
      category.ListProduct = newData;
      return newData;
    });
    return categoryList;
  };

  componentDidMount() {
    fetch("https://api.thecoffeehouse.com/api/v2/menu")
      .then((res) => res.json())
      .then((products) => {
        if (products.status_code !== 500) {
          fetch("https://api.thecoffeehouse.com/api/v2/category/web")
            .then((res) => res.json())
            .then((categoryList) => {
              if (products.status_code !== 500) {
                let newData = this.merge(categoryList, products.data);
                this.setState({
                  categories: newData,
                  isLoaded: false,
                });
              }
            })
            .catch((error) => {
              this.setState({
                isLoaded: true,
                error,
              });
            });
        }
      })
      .catch((error) => {
        this.setState({
          isLoaded: true,
          error,
        });
      });
  }

  render() {
    const { isLoaded, categories, error } = this.state;
    if (error) {
      return (
        <div className="main">
          Error: {error.message}
        </div>
      );
    } else {
      return (
        <section className="main">
          {isLoaded ? (
            <PlaceholderSidebar />
          ) : (
            <Sidebar categories={categories} />
          )}
          <div className="products">
            {isLoaded ? <PlaceholderProduct /> : <Main products={categories} />}
          </div>
          <CartContainer />
        </section>
      );
    }
  }
}

export default Body;
