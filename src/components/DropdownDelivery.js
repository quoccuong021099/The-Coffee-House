import React from "react";
import Button from "./common/Button";
class DropdownDelivery extends React.Component {
  constructor() {
    super();
    this.state = {
      timeOrder: false,
    };
  }
  handleTimeOrder = () => {
    this.setState({
      timeOrder: !this.state.timeOrder,
    });
  };
  render() {
    return (
      <div className="dropdown-delivery">
        <div className="ship-now">
          <div className="ship-now__left">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                fill="none"
                stroke="#b2b2b2"
                strokeWidth="1.1"
                cx="10"
                cy="10"
                r="9"
              ></circle>{" "}
              <rect x="9" y="4" width="1" height="7"></rect>{" "}
              <path
                fill="none"
                stroke="#b2b2b2"
                strokeWidth="1.1"
                d="M13.018,14.197 L9.445,10.625"
              ></path>
            </svg>
            <h3>GIAO NGAY</h3>
          </div>

          <div className="ship-now__right">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              {" "}
              <polyline
                fill="none"
                stroke="#21bb05"
                strokeWidth="1.1"
                points="4,10 8,15 17,4"
              ></polyline>
            </svg>
          </div>
        </div>
        <div className="time-order" onClick={this.handleTimeOrder}>
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path d="M 2,3 2,17 18,17 18,3 2,3 Z M 17,16 3,16 3,8 17,8 17,16 Z M 17,7 3,7 3,4 17,4 17,7 Z"></path>{" "}
            <rect width="1" height="3" x="6" y="2"></rect>{" "}
            <rect width="1" height="3" x="13" y="2"></rect>
          </svg>
          <h3>Thời gian đặt hàng</h3>
        </div>
        {this.state.timeOrder ? (
          <div className="time-order__description">
            <div className="select-group">
              <span>Ngày đặt</span> <br />
              <select type="select" defaultValue="NGÀY 16-06">
                <option value="NGÀY 16-06" >NGÀY 16-06</option>
                <option value="NGÀY 17-06">NGÀY 17-06</option>
              </select>
            </div>
            <div className="select-group">
              <span>Thời gian đặt</span> <br />
              <select type="select" defaultValue="07:30">
                <option value="07:30" >07:30</option>
                <option value="08:00">08:00</option>
              </select>
            </div>
            <Button className="timer" type="submit" value="HẸN GIỜ"/>
          </div>
        ) : null}
      </div>
    );
  }
}
export default DropdownDelivery;
