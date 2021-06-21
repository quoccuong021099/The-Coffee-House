import React from "react";
import InputGroup from "../common/InputGroup";
class AddToCartBody extends React.Component {
  render() {
    const { productInfo,handlePrices } = this.props;
    return (
      <>
        <div className="add-to-cart__topping">
          <p>Topping -</p>
          {productInfo.topping_list.map((item) => (
            <InputGroup
            key={item.code}
              type="checkbox"
              name={item.id}
              id={item.code}
              value={`${item.product_name} (+${
                item.price
              }₫)`}
              handlePrices={()=>handlePrices(item)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default AddToCartBody;
