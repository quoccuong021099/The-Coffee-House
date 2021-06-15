import React from "react";
import Image from "./common/Image";
import CloseButton from "./common/CloseButton";
class AddToCartHeader extends React.Component {
  render() {
    const { productInfo,size,name } = this.props;
    return (
      <>
        <div className="add-to-cart__header">
          <div className="add-to-cart__header-left">
            <Image
              src={productInfo.image}
              width="80"
              height="80"
              alt="Product image"
            />
            <div className="add-to-cart__header-info">
              <h3>{productInfo.product_name}</h3>
              <p>{size}</p>
              <p>{name.slice(0,-2)}</p>
            </div>
          </div>
          <div className="add-to-cart__header-right">
            <CloseButton closeModal={this.props.closeModal} />
          </div>
        </div>
      </>
    );
  }
}

export default AddToCartHeader;
