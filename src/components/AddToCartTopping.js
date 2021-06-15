import React from "react";
import InputGroup from "./common/InputGroup";
class AddToCartBody extends React.Component {
  render() {
    const { productInfo,onchange } = this.props;
    // console.log(productInfo.topping_list);
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
              onChange={()=>onchange(item)}
            />
          ))}
        </div>
      </>
    );
  }
}

export default AddToCartBody;
