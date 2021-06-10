import React from "react";

class Input extends React.Component {
  render() {
    return (
        <input
          className={`input ${this.props.className}`}
          type={`${this.props.type}`}
          placeholder={`${this.props.placeholder}`}
          onChange={this.props.onChange}
          value={this.props.value}
        />
    );
  }
}

export default Input;
