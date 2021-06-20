import React from "react";

class Input extends React.Component {
  render() {
    return (
        <input
          defaultChecked={this.props.defaultChecked}
          className={`input ${this.props.className}`}
          id={this.props.id}
          type={`${this.props.type}`}
          placeholder={`${this.props.placeholder}`}
          onChange={this.props.onChange}
          value={this.props.value}
          name={this.props.name}
          onClick={this.props.onClick}
          onSubmit={this.props.onSubmit}
          hidden={this.props.hidden}
        />
    );
  }
}

export default Input;
