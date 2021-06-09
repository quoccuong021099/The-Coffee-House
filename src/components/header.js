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
      Dropdown: false,
    };
  }


  getValueInputAddress = (e) =>
    this.setState({
      location: e.target.value.toLowerCase(),
      getAddress: [],
      Dropdown: false,
    });
  // , this.API()
  onclick = (description) => {
    this.setState({
      location: description,
      Dropdown: true,
    });
  };

  API = (e) => {
    e.preventDefault();
    fetch(
      `https://order.thecoffeehouse.com/api/location?address=${this.state.location}`
    )
      .then((res) => res.json())
      .then((loca) => {
        if (loca.status !== "FAIL" && loca.predictions !== undefined) {
          this.setState({
            getAddress: loca.predictions,
          });
        }
        // if(this.state.location === ''){
        //   this.setState({
        //     getAddress: [],
        //   });
        // }
      });
  };

  render() {
    const { getAddress, location, Dropdown } = this.state;
    return (
      <header className="header" >
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
                  onChange={this.getValueInputAddress}
                  value={location}
                />
                <ul
                  className={Dropdown ? "dropdown-menu block" : "dropdown-menu"}
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
                          <h3 className="dropdown-menu-title">Không tìm thấy địa chỉ</h3>
                          <p>Không tìm thấy địa chỉ</p>
                        </a>
                      </li>
                    )
                  ) : null}
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
