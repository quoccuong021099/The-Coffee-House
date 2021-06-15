import React from "react";
import Button from "./common/Button";
import Input from "./common/Input";
import DropdownItem from "./DropdownItem";
import logo from "./image/logo.png";
import Image from "./common/Image";
import locationImg from "./image/location.png";
import CartIcon from "./common/CartIcon";
import DropdownDelivery from "./DropdownDelivery";
class Logo extends React.Component {
  render() {
    return (
      <a href="#a" className="header__logo">
        <img src={logo} alt="logo" />
      </a>
    );
  }
}

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      getAddress: [],
      dropdown: false,
      delivery: false
    };
  }
  handleDelivery = () => {
    this.setState({
      delivery: !this.state.delivery
    })
  }
  getValueInputAddress = (e) =>
    this.setState({
      location: e.target.value.toLowerCase(),
      getAddress: [],
    });

  onclick = (description) => {
    this.setState({
      location: description,
      dropdown: true,
    });
  };

  API = (e) => {
    fetch(
      `https://order.thecoffeehouse.com/api/location?address=${e.target.value.toLowerCase()}`
    )
      .then((res) => res.json())
      .then((loca) => {
        if (
          loca.status !== "FAIL" &&
          loca.predictions !== undefined &&
          e.target.value > 1
        ) {
          this.setState({
            getAddress: loca.predictions,
            dropdown: false,
          });
        }
      });
  };

  render() {
    const { getAddress, location, dropdown, delivery } = this.state;
    const { cartNumber } = this.props;
    return (
      <header className="header">
        <Logo />
        <div className="form-delivery">
          <Button
            className="btn__delivery"
            type="button"
            value="GIAO NGAY"
            onClick={this.handleDelivery}
          ></Button>
          <div className="form-control">
            <span className="input-icon">
              <Image src={locationImg} alt="Location Image" />
            </span>
            <div className="dropdown">
              <form onSubmit={(e) => e.preventDefault()}>
                <Input
                  type="text"
                  className="input-address"
                  placeholder="Nhập địa chỉ giao hàng"
                  onChange={this.getValueInputAddress}
                  onKeyUp={this.API}
                  value={location}
                />
                <ul
                  className={
                    dropdown ? "dropdown-menu display-none" : "dropdown-menu"
                  }
                >
                  {location.length !== 0 ? (
                    getAddress.length > 0 ? (
                      getAddress.map((i) => (
                        <DropdownItem
                          address={i}
                          key={i.place_id}
                          onClick={() => this.onclick(i.description)}
                        />
                      ))
                    ) : (
                      <li>
                        <span className="input-icon-dropdown">
                          <img
                            src="https://order.thecoffeehouse.com/img/icon/location.png"
                            alt=""
                          />
                        </span>
                        <a href="#a">
                          <h3 className="dropdown-menu-title">
                            Không tìm thấy địa chỉ{" "}
                          </h3>
                          <h3 className="dropdown-menu-title">"{location}"</h3>
                        </a>
                      </li>
                    )
                  ) : null}
                </ul>
              </form>
            </div>
          </div>
          {
            delivery ? 
            <DropdownDelivery />
            : null
          }
        </div>
        <div className="form-login">
          <Button
            className="btn--login"
            type="button"
            value="ĐĂNG NHẬP"
          ></Button>
          {cartNumber > 0 ? (
            <div className="cart-icon">
              <span>{cartNumber}</span> <CartIcon />
            </div>
          ) : null}
        </div>
      </header>
    );
  }
}
export default Header;
