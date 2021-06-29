import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import "../assets/login.css";
import Vn from "../image/vn.png";
import Image from "../common/Image";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  render() {
    // console.log(this.props.location.pathname);
    return (
      <div className="wrapper-login">
        <div className="login">
          <h2>Đăng Nhập</h2>
          <div className="form-control-login">
            <div className="number">
              <Image src={Vn} width="36" height="24" />
              <span>+84</span>
            </div>
            <Input
              className="input-phone-login"
              placeholder="Nhập số điện thoại của bạn"
              type="number"
            />
            <span className="error">Giá trị nằm trong khoảng 9-11 số!</span>
            {/* Không được để trống trường này */}
          </div>
          <Button className="btn-login" type="button" value="ĐĂNG NHẬP" />
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
