import React from "react";
import Button from "./common/Button";
import Input from "./common/Input";
class Logo extends React.Component {
  render() {
    return (
      <a href="#a" className="header__logo">
        <img src="https://order.thecoffeehouse.com/img/logo.png" alt="a" />
      </a>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Logo />

        <div className="form-delivery">
          <Button
            className="btn__delivery"
            type="button"
            value="GIAO NGAY"
          ></Button>
          <div className="form-control">
            <span className="input-icon">
              <img
                src="https://order.thecoffeehouse.com/img/icon/location.png"
                alt=""
              />
            </span>
            <Input
              type="text"
              className="input-address"
              placeholder="Nhập địa chỉ giao hàng"
            />
          </div>
        </div>
        <Button className="btn--login" type="button" value="ĐĂNG NHẬP"></Button>
      </header>
    );
  }
}

export default Header;
