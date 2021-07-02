import React from "react";
import Button from "../common/Button";
import "../assets/login.css";
import FormPhone from "../common/FormPhone";
import InputOTP from "../common/InputOTP";
import firebase from "../firebase/Firebase";

class LoginAndRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      otpValue: null,
      login: false,
      flagOTP: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          this.onSignInSubmit();
          console.log("Recaptca varified");
        },
        defaultCountry: "IN",
      }
    );
  };
  onSignInSubmit = (e) => {
    e.preventDefault();
    this.configureCaptcha();
    const phoneNumber = "+84" + this.state.phone.slice(1);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        document.querySelector(".notify").textContent = "OTP has been sent !!";
      })
      .catch((error) => {
        document.querySelector(".notify").textContent = "SMS not sent !!";
      });
    this.setState({
      flagOTP: true,
      login: false,
    });
  };
  onSubmitOTP = (e) => {
    e.preventDefault();
    const code = this.state.otp;
    if (code !== undefined && window.confirmationResult !== undefined) {
      window.confirmationResult
        .confirm(code)
        .then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(JSON.stringify(user));
          alert("User is verified");
          // ...
        })
        .catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
          alert("User is not verified");
        });
    }
    this.setState({
      flagOTP: false,
      login: false,
    });
  };
  handleReturn = () => {
    this.setState({
      phone: undefined,
      flagOTP: false,
      login: false,
    });
  };
  handleRegister = () => {
    this.setState({
      login: true,
    });
  };
  render() {
    const { login, flagOTP, phone } = this.state;
    return (
      <div className="wrapper-login">
        {flagOTP && (
          <InputOTP
            handleChange={this.handleChange}
            onSubmitOTP={this.onSubmitOTP}
            valueInputPhone={phone}
          />
        )}
        {login && (
          <div className="register">
            <h2>Chào Bạn,</h2>
            <p>Nhập số điện thoại để tiếp tục</p>
            <FormPhone
              onSignInSubmit={this.onSignInSubmit}
              handleChange={this.handleChange}
              nameInput="phone"
              valueInputPhone={phone}
              textButton="Tiếp tục"
            />
            <p className="link-register return" onClick={this.handleReturn}>
              Quay về
            </p>
          </div>
        )}
        {/* Đăng nhập  */}
        {!flagOTP && !login && (
          <div className="login ">
            <h2>Đăng Nhập</h2>

            <FormPhone
              onSignInSubmit={this.onSignInSubmit}
              handleChange={this.handleChange}
              textButton="Đăng nhập"
              nameInput="phone"
              valueInputPhone={phone}
            />

            <p className="link-register" onClick={this.handleRegister}>
              <label htmlFor="" className="abc"></label>
              Đăng kí thành viên mới ?
            </p>
            <div id="recaptcha"></div>
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
        )}
        <div id="sign-in-button"></div>
      </div>
    );
  }
}

export default LoginAndRegister;
