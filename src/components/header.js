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
    let day = new Date();
    let nextDay = new Date(day);
    let twoMoreDate = new Date(day);
    nextDay.setDate(day.getDate() + 1);
    twoMoreDate.setDate(day.getDate() + 2);
    let month, month1, month2, date, date1, date2;
    if (day.getMonth() < 10) {
      month = `0${day.getMonth() + 1}`;
    } else month = day.getMonth();
    if (day.getDate() < 10) {
      date = `0${day.getDate() + 1}`;
    } else date = day.getDate();
    if (nextDay.getMonth() < 10) {
      month1 = `0${nextDay.getMonth() + 1}`;
    } else month1 = nextDay.getMonth();
    if (nextDay.getDate() < 10) {
      date1 = `0${nextDay.getDate() + 1}`;
    } else date1 = nextDay.getDate();
    if (twoMoreDate.getMonth() < 10) {
      month2 = `0${twoMoreDate.getMonth() + 1}`;
    } else month2 = twoMoreDate.getDate();
    if (twoMoreDate.getDate() < 10) {
      date2 = `0${twoMoreDate.getDate() + 1}`;
    } else date2 = twoMoreDate.getDate();
    // console.log(month);
    let today = `${date}/${month}/${day.getFullYear()}`;
    let tommorow = `${date1}/${month1}/${nextDay.getFullYear()}`;
    let nextTwoDays = `${date2}/${month2}/${twoMoreDate.getFullYear()}`;
    super(props);
    this.container = React.createRef();
    this.state = {
      location: "",
      getAddress: [],
      dropdown: false,
      delivery: false,
      valueTime: "TRONG 15-30 PHÚT",
      valueDate: today,
      valueTimerOnButton: "",
      timerFlag: false,
      optionValueTime: ["TRONG 15-30 PHÚT", "07:00", "07:30"],
      optionValueTimeNotNow: ["07:00", "07:30"],
      notNow: false,
      today: today,
      tommorow: tommorow,
      nextTwoDays: nextTwoDays,
    };
  }
  handleDelivery = () => {
    this.setState({
      // delivery: !this.state.delivery,
      delivery: true,
    });
  };
  handleShipNow = () => {
    this.setState({
      delivery: !this.state.delivery,
      valueTimerOnButton: "",
      timerFlag: false,
    });
  };

  getValueTimer = () => {
    if (
      this.state.valueDate !== this.state.today &&
      this.state.valueTime !== "TRONG 15-30 PHÚT"
    ) {
      this.setState({
        valueTimerOnButton: this.state.valueDate.concat(
          ` ${this.state.valueTime}`
        ),
        timerFlag: true,
      });
    } else if (
      this.state.valueDate === this.state.today &&
      this.state.valueTime !== "TRONG 15-30 PHÚT"
    ) {
      this.setState({
        valueTimerOnButton: this.state.valueDate.concat(
          ` ${this.state.valueTime}`
        ),
        timerFlag: true,
      });
    } else {
      this.setState({
        timerFlag: !this.state.timerFlag,
        valueTimerOnButton: "",
      });
    }
  };

  handleTimeOrder = () => {
    this.setState({
      timerFlag: true,
      delivery: true,
    });
  };
  getValueTime = (e) => {
    // console.log(e.target.value);
    this.setState({
      valueTime: e.target.value,
    });
  };
  getValueDate = (e) => {
    this.setState({
      valueDate: e.target.value,
      valueTime: this.state.optionValueTimeNotNow[0],
    });
    if (e.target.value === this.state.today)
      this.setState({
        valueTime: this.state.optionValueTime[0],
      });
  };
  getValueInputAddress = (e) =>
    this.setState({
      location: e.target.value.toLowerCase(),
      getAddress: [],
      dropdown: true,
    });

  onclick = (description) => {
    this.setState({
      location: description,
      dropdown: true,
    });
  };

  getOclock = () => {
    let arr = [];
    for (let i = 7; i < 21; i++) {
      arr.push(`${i}:30`);
    }

    return arr;
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
            // dropdown: false,
          });
        }
      });
  };
  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        delivery: false,
        dropdown: false,
      });
    }
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  render() {
    const {
      getAddress,
      location,
      dropdown,
      delivery,
      timerFlag,
      valueTimerOnButton,
      valueTime,
      valueDate,
      optionValueTime,
      optionValueTimeNotNow,
      today,
      tommorow,
      nextTwoDays,
    } = this.state;
    const { cartNumber } = this.props;
    return (
      <header className="header">
        <Logo />
        <div className="form-delivery" ref={this.container}>
          <Button
            className="btn__delivery"
            type="button"
            value={
              valueTimerOnButton === "" ? `GIAO NGAY` : `${valueTimerOnButton}`
            }
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
                <ul className="dropdown-menu">
                  {location.length !== 0
                    ? getAddress.length > 0
                      ? getAddress.map((i) => (
                          <DropdownItem
                            address={i}
                            key={i.place_id}
                            onClick={() => this.onclick(i.description)}
                          />
                        ))
                      : dropdown && (
                          <li>
                            <span className="input-icon-dropdown">
                              <img src={locationImg} alt="" />
                            </span>
                            <a href="#a">
                              <h3 className="dropdown-menu-title">
                                Không tìm thấy địa chỉ{" "}
                              </h3>
                              <h3 className="dropdown-menu-title">
                                "{location}"
                              </h3>
                            </a>
                          </li>
                        )
                    : null}
                </ul>
              </form>
            </div>
          </div>
          {delivery ? (
            <DropdownDelivery
              // onClick={this.handleDelivery}
              handleShipNow={this.handleShipNow}
              getValueTime={this.getValueTime}
              getValueDate={this.getValueDate}
              getValueTimer={this.getValueTimer}
              handleTimeOrder={this.handleTimeOrder}
              timerFlag={timerFlag}
              valueDate={valueDate}
              valueTime={valueTime}
              optionValueTime={optionValueTime}
              optionValueTimeNotNow={optionValueTimeNotNow}
              today={today}
              tommorow={tommorow}
              nextTwoDays={nextTwoDays}
              getOclock={this.getOclock()}
            />
          ) : null}
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
