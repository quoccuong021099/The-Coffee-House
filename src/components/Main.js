import React from "react";
import ProductContainer from "./ProductContainer";
import SearchProduct from "./SearchProduct";
import Image from "./common/Image";
import search1 from "./image/search.png";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  onchange = (e) => this.setState({ search: e.target.value });

  onScrollCate = () => {
    let a = window.scrollY;
    let $ = document.getElementById.bind(document);
    let selector = document.querySelectorAll(".product");
    selector.forEach((i) =>
      $(i.id).offsetTop <= a && a <= $(i.id).offsetTop + $(i.id).offsetHeight
        ? this.changeActive(i.id)
        : null
    );
  };

  changeActive = (data) => {
    this.props.activeCategory(data);

    let a = document.querySelectorAll(".active-category");
    if (a.length > 0) {
      document
        .querySelector(".active-category")
        .classList.remove("active-category");
    }
    document.getElementById(`add${data}`).classList.add("active-category");
  };

  render() {
    let { search } = this.props;
    let { products } = this.props;

    window.addEventListener("scroll", this.onScrollCate);

    return (
      <>
        {products.map((category) =>
          category.ListProduct.length !== 0 ? (
            <ProductContainer
              id={category.id}
              category={category}
              key={category._id}
              search={search}
            />
          ) : null
        )}
        <div className="none_product">
          <Image src={search1} width="300" height="300" alt="no data" />
          <p>
            Rất tiếc chúng tôi không tìm <br /> thấy sản phẩm!
          </p>
        </div>
        {/* </div> */}
      </>
    );
  }
}

export default Main;
