import React from "react";
import Input from "./Input";
class InputGroup extends React.Component {
  render() {
    return (
      <>
        <div className="input-group">
          <Input 
            defaultChecked={this.props.defaultChecked} 
            type={this.props.type} 
            name={this.props.name} 
            id={this.props.id} 
            onClick={this.props.handleSize}
            onChange={this.props.handlePrices}
          />
          <label htmlFor={this.props.htmlFor}></label>
          <label htmlFor={this.props.htmlFor} >{this.props.value}</label>
        </div>
      </>
    );
  }
}

export default InputGroup;
