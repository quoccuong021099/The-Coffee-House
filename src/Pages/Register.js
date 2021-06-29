import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import "../assets/login.css";
import Vn from "../image/vn.png";
import Image from "../common/Image";
import { Link } from "react-router-dom";

class LoginPage extends React.Component {
  render() {
    return (
      <div className="wrapper-register">
        <div className="register">
          <h2>Chào Bạn,</h2>
          <p>Nhập số điện thoại để tiếp tục</p>
          <div className="form-control-register">
            <div className="number">
              <Image src={Vn} width="36" height="24" />
              <span>+84</span>
            </div>
            <Input
              className="input-phone-register"
              placeholder="Nhập số điện thoại của bạn"
              type="number"
            />
            <span className="error">Giá trị nằm trong khoảng 9-11 số!</span>
            {/* Không được để trống trường này */}
          </div>
          <Button className="btn-register" type="button" value="TIẾP TỤC" />
          <Link to="/LoginPage" className="return">
            Quay về
          </Link>
        </div>
      </div>
    );
  }
}

export default LoginPage;
