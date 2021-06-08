import React from "react";
import Button from "./common/Button";
import Input from "./common/Input";
import DropdownItem from "./DropdownItem";
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
  constructor(props) {
    super(props);
    this.state = {
      location: "",
      getAddress: [],
    };
  }
  getAddress = (e) => this.setState({ getAddress: e.target.value });
  onchange = (e) => this.setState({ location: e.target.value });

  API = (e) => {
    e.preventDefault();
    fetch(
      `https://order.thecoffeehouse.com/api/location?address=${this.state.location}`
    )
      .then((res) => res.json())
      .then((loca) => {
        if (loca.status !== "FAIL") {
          this.setState({
            getAddress: loca.predictions,
          });
        }
      });
  };

  render() {
    // console.log(this.state.location);
    // console.log(this.state.getAddress);
    const { getAddress } = this.state;
    // console.log(getAddress);
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
            <div className="dropdown">
              <form onKeyUp={this.API}>
                <Input
                  type="text"
                  className="input-address"
                  placeholder="Nhập địa chỉ giao hàng"
                  onChange={this.onchange}
                />
                <ul className="dropdown-menu">
                  {getAddress.map((i) => (
                    <DropdownItem address={i} key={i.id}/>
                  ))}
                </ul>
              </form>
            </div>
          </div>
        </div>
        <Button className="btn--login" type="button" value="ĐĂNG NHẬP"></Button>
      </header>
    );
  }
}
export default Header;
