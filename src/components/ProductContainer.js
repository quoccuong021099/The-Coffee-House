import React from "react";
import ProductItem from "./ProductItem";
import SearchProduct from "./SearchProduct";
import AddButton from "./components_child/AddButton";
import Image from "./components_child/Image";
import Currency from "./components_child/Currency";
class ProductContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  onchange = (e) => this.setState({ search: e.target.value });

  renderProduct = (item) => {
    return (
      <li className="product__item" key={item._id}>
        <ul className="product__list">
          <li className="product__list-item">
            <a href="#a" className="product__list-link">
              <Image src={item.image} width="80" height="80" />
              <div className="product__info">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <div className="product__price">
                  <Currency value={item.price} />
                  <AddButton width="30" height="30" />
                </div>
              </div>
            </a>
          </li>
        </ul>
      </li>
    );
  };

  render() {
    const {search} = this.state;
    console.log(this.props.products);
    const filteredProduct = this.props.products.ListProduct.filter( item => {
      return item.product_name.indexOf(search) !== -1
    })
    return (
      <>
        <SearchProduct onChange={this.onchange} />
        <div>
          {this.props.products.map((category) =>
            category.ListProduct.length > 0  ? (
              <ul className="product" key={category._id} id={`${category._id}`}>
                <span> {category.name} </span>

              
                <ProductItem products={category.ListProduct} />
              </ul>
            ) : ( category.ListProduct.length !== 0 ?
              <Image 
              src="https://i.pinimg.com/originals/c9/22/68/c92268d92cf2dbf96e3195683d9e14fb.png" 
              width="600" height="600"
              alt="none data"
              /> : null
              ) 
            )
          }
        </div>
      </>
    );
  }
}

export default ProductContainer;
