import React from "react";
import Button from "../common/Button";
import "../assets/login.css";
import FormPhone from "../common/FormPhone";
class LoginAndRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      register: false,
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

  handleRegister = () => {
    this.setState({
      register: !this.state.register,
    });
  };
  handleReturn = () => {
    this.setState({
      register: !this.state.register,
      phoneNumberValue: null,
    });
  };

  render() {
    const { register, phoneNumberValue, submitPhoneFlag } = this.state;
    return (
      <>
        <div className="wrapper-login">
          {!register ? (
            <div className="login">
              <h2>Đăng Nhập</h2>
              <FormPhone
                phoneNumberValue={phoneNumberValue}
                submitPhoneFlag={submitPhoneFlag}
                handleSubmitPhone={this.handleSubmitPhone}
                handleChangePhoneNumber={this.handleChangePhoneNumber}
                value="Đăng Nhập"
              />
              <p className="link-register" onClick={this.handleRegister}>
                Đăng kí thành viên mới ?
              </p>
              <p>hoặc đăng nhập bằng</p>
              <div className="social-login">
                <Button
                  className="btn-facebook-login"
                  type="button"
                  value="FACEBOOK"
                />
                <Button
                  className="btn-email-login"
                  type="button"
                  value="EMAIL"
                />
              </div>
            </div>
          ) : (
            <div className="register">
              <h2>Chào Bạn,</h2>
              <p>Nhập số điện thoại để tiếp tục</p>
              <FormPhone
                phoneNumberValue={phoneNumberValue}
                submitPhoneFlag={submitPhoneFlag}
                handleSubmitPhone={this.handleSubmitPhone}
                handleChangePhoneNumber={this.handleChangePhoneNumber}
                value="Tiếp tục"
              />

              <p className="link-register return" onClick={this.handleReturn}>
                Quay về
              </p>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default LoginAndRegister;
