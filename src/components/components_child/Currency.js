import React from "react";

class Currency extends React.Component {
 
  render() {
    return (
      <span className={`currency ${this.props.className}`} >{`${this.props.value}`}</span>
    );
  }
}

export default Currency;
