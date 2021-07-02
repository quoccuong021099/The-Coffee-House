import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import "../assets/login.css";

class FormPhone extends React.Component {
  blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();

  render() {
    const { handleChange, onSubmitOTP, valueInputPhone, handleReturn } =
      this.props;
    return (
      <>
        <div className="wrapper-verify">
          <form className="form-control-verify" onSubmit={onSubmitOTP}>
            <p>
              Nhập mã xác thực gồm 6 số đã được gửi đến số điện thoại (+84)
              {valueInputPhone} để tiếp tục
            </p>
            <Input
              className="input-otp"
              type="number"
              name="otp"
              placeholder="Mã xác thực"
              required
              onChange={handleChange}
            />
            <div className="notify error"></div>
            <Button type="submit" className="btn-otp" value="Verify">
              Submit
            </Button>
          </form>
        </div>
        <p style={{ margin: "10px" }}>hoặc đăng nhập bằng</p>
        <div className="social-login">
          <Button
            className="btn-facebook-login"
            type="button"
            value="FACEBOOK"
          />
          <Button
            className="btn-email-login"
            type="button"
            value="QUAY VỀ"
            onClick={handleReturn}
          />
        </div>
      </>
    );
  }
}

export default FormPhone;
