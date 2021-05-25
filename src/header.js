import React from "react";
import "./header.css";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <a href="#" className="header__logo">
          <img src="https://order.thecoffeehouse.com/img/logo.png" />
        </a>
        <div className="form-delivery">
          <input type="submit" value="GIAO NGAY" className="btn btn__delivery" />
          <div className="form-control">
          <span className="input-icon">
            <img
              src="https://order.thecoffeehouse.com/img/icon/location.png"
              alt=""
            />
          </span>
          <input
            type="text"
            placeholder="Nhập địa chỉ giao hàng"
            className="input-add"
          />
          </div>
        </div>
        <button className="btn btn--login">ĐĂNG NHẬP</button>
      </header>
    );
  }
}

export default Header;
