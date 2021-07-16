import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
export default class FormCustomer extends Component {
  render() {
    const { handleChange, onSubmitCustomer, handleReturn } = this.props;
    return (
      <div>
        <form className="form-control-verify" onSubmit={onSubmitCustomer}>
          <h2>Nhập Thông Tin Cá Nhân</h2>
          <Input
            className="input-otp"
            type="text"
            name="name"
            placeholder="Nhập tên của bạn"
            required
            onChange={handleChange}
          />
          <Input
            className="input-otp"
            type="text"
            name="lastname"
            placeholder="Nhập họ của bạn"
            required
            onChange={handleChange}
          />
          <Input
            className="input-otp"
            type="number"
            name="age"
            placeholder="Nhập tuổi của bạn"
            required
            onChange={handleChange}
          />
          <div className="notify error"></div>
          <div
            className="bottom"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <p className="link-register return" onClick={handleReturn}>
              Quay về
            </p>
            <Button
              type="submit"
              className="btn-login"
              value="TIẾP TỤC"
              style={{ width: "150px", margin: "0" }}
            />
          </div>
        </form>
      </div>
    );
  }
}
