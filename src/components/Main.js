import React from "react";
import ProductContainer from "./ProductContainer";
import SearchProduct from "./SearchProduct";
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  onchange = (e) => this.setState({ search: e.target.value });
  render() {
    return (
      <>
        <SearchProduct onChange={this.onchange} />
        <div>
          {this.props.products.map((category) =>
            category.ListProduct.length !== 0 ? (
              <ProductContainer
                category={category}
                key={category._id}
                search={this.state.search}
              />
            ) : null
          )}
        </div>
      </>
    );
  }
}

export default Main;
