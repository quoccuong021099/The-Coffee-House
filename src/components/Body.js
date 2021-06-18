import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import CartContainer from "./CartContainer";
import PlaceholderSidebar from "./placeholder/PlaceholderSidebar";
import PlaceholderProduct from "./placeholder/PlaceholderProduct";
import Image from "./common/Image";
import failData from "./image/search.png";
import SearchProduct from "./SearchProduct";
// import AddToCart from "./AddToCart";
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      categories: [],
      searchProduct: "",
      active: null,
    };
  }

  onchange = (e) => this.setState({ searchProduct: e.target.value });
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

  activeCategory = (id) => {
    this.setState({
      active: id,
    });
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
                  active: newData[0].id,
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
    
    const {
      isLoaded,
      categories,
      error,
      searchProduct,
      active,
      
    } = this.state;
    const {onUpdateCartNumber,deliveryCharge,changeDeliveryCharge,productInfoForCart} = this.props
    if (error) {
      return (
        <div className="failData">
          <Image src={failData} width="300" height="300" alt="no data" />
          <br /> Đường truyền dữ liệu có vấn đề. <br /> Vui lòng thử lại sau!
        </div>
      );
    } else {
      return (
        <section className="main">
          {isLoaded ? (
            <PlaceholderSidebar />
          ) : (
            <Sidebar
              categories={categories}
              active={active}
              activeCategory={this.activeCategory}
            />
          )}
          <div className="products">
            {isLoaded ? (
              <PlaceholderProduct />
            ) : (
              <div>
                <SearchProduct onChange={this.onchange} />
                <div className="all__product">
                  <Main
                    products={categories}
                    searchProduct={searchProduct}
                    active={active}
                    activeCategory={this.activeCategory}
                    onUpdateCartNumber={onUpdateCartNumber}
                    changeDeliveryCharge={changeDeliveryCharge}
                    
                  />
                </div>
              </div>
            )}
          </div>
          <CartContainer deliveryCharge={deliveryCharge} productInfoForCart={productInfoForCart}/>
        </section>
      );
    }
  }
}

export default Body;
