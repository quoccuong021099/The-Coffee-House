import React from "react";
import InputGroup from "./common/InputGroup";
class ChooseSize extends React.Component {
  render() {
    const { productInfo, onClick } = this.props;
    return (
      <>
        <div className="add-to-cart__size">
          <p>Loại</p>
          <p>Size -</p>
          <div className="choose-size">
            {productInfo.variants.map((item) => (
              <InputGroup
                defaultChecked={item.val === productInfo.variants[0].val ? "checked" : ""}
                type='radio'
                htmlFor={`radio${item.code}`}
                key={item.code}
                name="radio"
                id={`radio${item.code}`}
                onClick={() => onClick(item.val,item.price)}
                value={`${item.val} (+${
                  item.price - productInfo.variants[0].price
                })`}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default ChooseSize;
