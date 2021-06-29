import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import "../assets/login.css";
import Vn from "../image/vn.png";
import Image from "../common/Image";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  constructor() {
    super();
    this.state = {
      phoneNumberValue: null,
      submitPhoneFlag: false,
    };
  }
  handleChangePhoneNumber = (e) => {
    this.setState({
      phoneNumberValue: e.target.value,
      submitPhoneFlag: false,
    });
  };
  handleSubmitPhone = (e) => {
    e.preventDefault();
    if (!this.state.phoneNumberValue)
      this.setState({
        submitPhoneFlag: true,
      });
  };

  blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  render() {
    const { phoneNumberValue, submitPhoneFlag } = this.state;
    return (
      <div className="wrapper-login">
        <div className="login">
          <h2>Đăng Nhập</h2>
          <form
            className="form-control-login"
            onSubmit={this.handleSubmitPhone}
          >
            <div className="number">
              <Image src={Vn} width="36" height="24" />
              <span>+84</span>
            </div>
            <Input
              className="input-phone-login"
              placeholder="Nhập số điện thoại của bạn"
              type="number"
              onChange={this.handleChangePhoneNumber}
              onKeyDown={this.blockInvalidChar}
              min="0"
            />
            {phoneNumberValue &&
              (phoneNumberValue.length < 9 || phoneNumberValue.length > 11) && (
                <span className="error">Giá trị nằm trong khoảng 9-11 số!</span>
              )}
            {(submitPhoneFlag || phoneNumberValue === "") && (
              <span className="error">Không được để trống trường này</span>
            )}
          </form>
          <Button
            className="btn-login"
            type="button"
            value="ĐĂNG NHẬP"
            disabled={
              phoneNumberValue &&
              (phoneNumberValue.length < 9 || phoneNumberValue.length > 11)
                ? false
                : true
            }
            onSubmit={this.handleSubmitPhone}
          />
          <Link to="/Register">Đăng kí thành viên mới ?</Link>
          <p>hoặc đăng nhập bằng</p>
          <div className="social-login">
            <Button
              className="btn-facebook-login"
              type="button"
              value="FACEBOOK"
            />
            <Button className="btn-email-login" type="button" value="EMAIL" />
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
