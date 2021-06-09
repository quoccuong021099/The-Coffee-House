import React from "react";

class DropdownItem extends React.Component {
  render() {
    let { address } = this.props;
    return (
      <li  onClick={this.props.onClick} >
        <span className="input-icon-dropdown">
          <img
            src="https://order.thecoffeehouse.com/img/icon/location.png"
            alt=""
          />
        </span>
        <a href="#a">
          <h3 className="dropdown-menu-title">
            {address.structured_formatting.main_text}
          </h3>
          <p>{address.structured_formatting.secondary_text}</p>
        </a>
      </li>
    );
  }
}
export default DropdownItem;
