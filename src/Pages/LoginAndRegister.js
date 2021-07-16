import React from "react";
import Button from "../common/Button";
import "../assets/login.css";
import FormPhone from "../common/FormPhone";
import InputOTP from "../common/InputOTP";
import firebase, { db } from "../firebase/Firebase";
import FormCustomer from "../common/FormCustomer";

class LoginAndRegister extends React.Component {
  constructor() {
    super();
    this.state = {
      otpValue: null,
      login: true,
      flagOTP: false,
      customers: null,
      flagCustomer: false,
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
          this.onSignUpSubmit();
          console.log("Recaptca varified");
        },
        defaultCountry: "IN",
      }
    );
  };
  onSignUpSubmit = (e) => {
    e.preventDefault();
    const index = this.state.customers.findIndex(
      (i) => i.phone === this.state.phoneSignUp
    );
    this.setState({
      flagOTP: true,
      login: false,
      flagCustomer: false,
    });
    if (index >= 0) return alert("Số điện thoại đã tồn tại");
    this.sendOTP();
  };

  sendOTP = () => {
    this.configureCaptcha();
    let phoneNumber = null;
    if (this.state.phoneSignUp) {
      phoneNumber = "+84" + this.state.phoneSignUp.slice(1);
    }
    if (this.state.phoneSignIn) {
      phoneNumber = "+84" + this.state.phoneSignIn.slice(1);
    }
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log("OTP is sent");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onSignInSubmit = (e) => {
    e.preventDefault();
    const index = this.state.customers.findIndex(
      (i) => i.phone === this.state.phoneSignIn
    );
    if (index >= 0) {
      this.sendOTP();
      this.setState({
        flagOTP: true,
        login: false,
      });
    } else {
      alert("Số điện thoại chưa được đăng ký");
    }
  };

  onSubmitOTP = (e) => {
    e.preventDefault();
    const index = this.state.customers.findIndex(
      (i) => i.phone === this.state.phoneSignUp
    );
    if (index >= 0) {
      // đăng nhập
      return alert("Số điện thoại đã tồn tại");
    } else {
      const code = this.state.otp;
      if (code !== undefined && window.confirmationResult !== undefined) {
        window.confirmationResult
          .confirm(code)
          .then((result) => {
            const user = result.user;
            console.log(user);
            alert("User is verified");
          })
          .catch((error) => {
            alert("User is not verified");
          });
      }
      this.setState({
        flagOTP: false,
        login: false,
      });
    }
  };
  handleReturn = () => {
    this.setState({
      phoneSignUp: undefined,
      flagOTP: false,
      login: false,
    });
  };
  handleRegister = () => {
    this.setState({
      login: true,
    });
  };

  componentDidMount() {
    db.collection("customer")
      .get()
      .then((result) => {
        const customers = [];
        result.forEach((item) => {
          const data = item.data();
          customers.push(data);
        });
        this.setState({
          customers: customers,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  onSubmitCustomer = (e) => {
    const { name, lastname, age, phoneSignUp } = this.state;
    e.preventDefault();
    console.log(phoneSignUp);
    db.collection("customer").add({
      name: name,
      lastname: lastname,
      age: age,
      phone: phoneSignUp,
    });
    alert("Đăng ký thành công");
    this.setState({
      flagCustomer: false,
      login: true,
    });
  };
  render() {
    const {
      login,
      flagOTP,
      phoneSignUp,
      phoneSignIn,
      otp,
      customers,
      flagCustomer,
    } = this.state;
    console.log(flagCustomer);
    return (
      <div className="wrapper-login">
        {flagOTP && (
          <InputOTP
            handleChange={this.handleChange}
            onSubmitOTP={this.onSubmitOTP}
            valueInputPhone={phoneSignUp}
            handleReturn={this.handleReturn}
          />
        )}
        {flagCustomer && (
          <FormCustomer
            handleChange={this.handleChange}
            onSubmitCustomer={this.onSubmitCustomer}
            handleReturn={this.handleReturn}
          />
        )}
        {login && (
          <div className="register">
            <h2>Chào Bạn,</h2>
            <p>Nhập số điện thoại để tiếp tục</p>
            <FormPhone
              onSubmit={this.onSignUpSubmit}
              handleChange={this.handleChange}
              nameInput="phoneSignUp"
              valueInputPhone={phoneSignUp}
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
              onSubmit={this.onSignInSubmit}
              handleChange={this.handleChange}
              textButton="Đăng nhập"
              nameInput="phoneSignIn"
              valueInputPhone={phoneSignIn}
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
