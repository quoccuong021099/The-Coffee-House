import React from "react";
import ProductContainer from "./ProductContainer";
import SearchProduct from "./SearchProduct";
import Image from "./common/Image"
import search1 from './image/search.png'
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      flagActive: false,
    };
  }
  onchange = (e) => this.setState({ search: e.target.value });

  render() {
    let { search, flagActive } = this.state;
    let { products } = this.props;

    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY !== 134) {
        // this.setState({ flagActive: true });
      }
    });

    console.log(flagActive);
    return (
      <>
        <SearchProduct onChange={this.onchange} />
        <div className="all__product">
          {products.map((category) =>
            category.ListProduct.length !== 0 ? (
              <ProductContainer
                category={category}
                key={category._id}
                search={search}
              />
            ) : null
          )}
          <div className="none_product">
            <Image
              src={search1}
              width="300"
              height="300"
              alt="no data"
            />
            <p>
              Rất tiếc chúng tôi không tìm <br /> thấy sản phẩm!
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
