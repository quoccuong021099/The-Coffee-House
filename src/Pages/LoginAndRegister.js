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
      register: false,
      phoneNumberValue: null,
      submitPhoneFlag: false,
      flagOTP: false,
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

  handleClickLogin = () => {
    this.setState({
      register: !this.state.register,
      phoneNumberValue: null,
      flagOTP: true,
    });
    // let number = "+84869504210";
    // let recaptcha = new firebase.auth.RecaptchaVerifier("recaptcha");
    // firebase
    //   .auth()
    //   .signInWithPhoneNumber(number, recaptcha)
    //   .then((e) => {
    //     let code = prompt("enter the otp", "");
    //     if (code === null) return;
    //     e.confirm(code)
    //       .then((result) => {
    //         console.log(result.user, "user");
    //         document.querySelector(".abc").textContent =
    //           result.user.phoneNumber + "Number verified";
    //       })
    //       .catch((err) => console.log(err));
    //   });
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
      flagOTP: false,
    });
  };

  render() {
    const { register, phoneNumberValue, submitPhoneFlag, flagOTP } = this.state;
    return (
      <>
        <div className="wrapper-login">
          {flagOTP && (
            <div>
              <InputOTP
                phoneNumberValue={phoneNumberValue}
                // submitPhoneFlag={submitPhoneFlag}
                // handleSubmitPhone={this.handleSubmitPhone}
                handleChangePhoneNumber={this.handleChangePhoneNumber}
                handleClickLogin={this.handleClickLogin}
                value="Verify"
              />
              <span
                className="link-register return"
                onClick={this.handleReturn}
              >
                Quay v???
              </span>
            </div>
          )}
          {!register && !flagOTP ? (
            <div className="login">
              <h2>????ng Nh???p</h2>
              <FormPhone
                phoneNumberValue={phoneNumberValue}
                submitPhoneFlag={submitPhoneFlag}
                handleSubmitPhone={this.handleSubmitPhone}
                handleChangePhoneNumber={this.handleChangePhoneNumber}
                handleClickLogin={this.handleClickLogin}
                value="????ng Nh???p"
              />
              <p className="link-register" onClick={this.handleRegister}>
                <label htmlFor="" className="abc"></label>
                ????ng k?? th??nh vi??n m???i ?
              </p>
              <div id="recaptcha"></div>
              <p>ho???c ????ng nh???p b???ng</p>
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
            !flagOTP && (
              <div className="register">
                <h2>Ch??o B???n,</h2>
                <p>Nh???p s??? ??i???n tho???i ????? ti???p t???c</p>
                <FormPhone
                  phoneNumberValue={phoneNumberValue}
                  submitPhoneFlag={submitPhoneFlag}
                  handleSubmitPhone={this.handleSubmitPhone}
                  handleChangePhoneNumber={this.handleChangePhoneNumber}
                  handleClickLogin={this.handleClickLogin}
                  value="Ti???p t???c"
                />

                <p className="link-register return" onClick={this.handleReturn}>
                  Quay v???
                </p>
              </div>
            )
          )}
        </div>
      </>
    );
  }
}

export default LoginAndRegister;
