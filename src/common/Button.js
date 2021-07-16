import React from "react";
class Button extends React.Component {
  render() {
    return (
      <button
        className={`btn ${this.props.className}`}
        type={`${this.props.type}`}
        onClick={this.props.onClick}
        onSubmit={this.props.onSubmit}
        disabled={this.props.disabled}
        style={this.props.style}
      >
        {`${this.props.value}`}
      </button>
    );
  }
}

export default Button;
