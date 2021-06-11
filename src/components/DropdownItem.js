import React from "react";

class DropdownItem extends React.Component {
  render() {
    let { address } = this.props;
    return (
      <li >
        <span className="input-icon-dropdown">
          <img
            src="https://order.thecoffeehouse.com/img/icon/location.png"
            alt=""
          />
        </span>
        <a href="#a" onClick={this.props.onClick}>
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
