import React from "react";
import Sidebar from "./Sidebar";
import Main from "./Main";
import CartContainer from "./CartContainer";
import PlaceholderSidebar from "../placeholder/PlaceholderSidebar";
import PlaceholderProduct from "../placeholder/PlaceholderProduct";
import Image from "../common/Image";
import failData from "../image/search.png";
import SearchProduct from "./SearchProduct";
import AddToCart from "./AddToCart";
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: true,
      categories: [],
      searchProduct: "",
      active: null,
      addProductFlag: false,
      productInfo: null,
      productInfoForCart: [],
      co: -1,
    };
  }

  addProduct = (data) =>
    this.setState({ addProductFlag: true, productInfo: data, co: -1 });
  editProduct = (data) =>
    this.setState({ addProductFlag: true, co: 0, productInfo: data });

  closeModal = () => {
    this.setState({
      addProductFlag: false,
    });
    setTimeout(() => {
      this.setState({
        productInfo: null,
      });
    }, 300);
  };

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

  moveToCart = (data) => {
    // if (this.state.co === -1) {
      if (this.state.productInfoForCart.length === 0) {
        this.setState({
          productInfoForCart: [...this.state.productInfoForCart, data],
        });
      } else {
        let flag = 1;
        this.state.productInfoForCart.map((item) =>
          item.product_name === data.product_name &&
          item.size === data.size &&
          item.toppingName === data.toppingName
            ? ((item.amount += data.amount),
              (item.totalPrice += data.totalPrice),
              (flag *= -1))
            : (flag *= 1)
        );
        if (flag === 1) {
          this.setState({
            productInfoForCart: [...this.state.productInfoForCart, data],
          });
        }
      }
    // }
    // if (this.state.co === 0) {
    //   if (this.state.productInfoForCart.length === 0) {
    //     this.setState({
    //       productInfoForCart: [...this.state.productInfoForCart, data],
    //     });
    //   } else {
    //     let flag = 1;
    //     this.state.productInfoForCart.map((item) =>
    //       item.product_name === data.product_name &&
    //       item.size === data.size &&
    //       item.toppingName === data.toppingName
    //         ? ((item.amount += data.amount),
    //           (item.totalPrice += data.totalPrice),
    //           (flag *= -1))
    //         : (flag *= 1)
    //     );
    //     if (flag === 1) {
    //       this.setState({
    //         productInfoForCart: [...this.state.productInfoForCart, data],
    //       });
    //     }
    //   }
    // }
  };
  render() {
    const {
      isLoaded,
      categories,
      error,
      searchProduct,
      active,
      productInfo,
      addProductFlag,
      productInfoForCart,
    } = this.state;
    const { onUpdateCartNumber, deliveryCharge, changeDeliveryCharge } =
      this.props;
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
                    addProduct={this.addProduct}
                  />
                </div>
              </div>
            )}
          </div>
          <CartContainer
            deliveryCharge={deliveryCharge}
            productInfoForCart={productInfoForCart}
            editProduct={this.editProduct}
          />
          {productInfo !== null && (
            <AddToCart
              className={addProductFlag ? " " : "add-to-cart__display"}
              closeModal={this.closeModal}
              productInfo={productInfo}
              addProductFlag={addProductFlag}
              moveToCart={this.moveToCart}
            />
          )}
        </section>
      );
    }
  }
}

export default Body;
