import React from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import "../assets/login.css";
import Vn from "../image/vn.png";
import Image from "../common/Image";

class FormPhone extends React.Component {
  blockInvalidChar = (e) =>
    ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
  render() {
    const { onSubmit, handleChange, nameInput, textButton, valueInputPhone } =
      this.props;
    return (
      <>
        <form className="form-control-login" onSubmit={onSubmit}>
          <div className="number">
            <Image src={Vn} width="36" height="24" />
            <span>+84</span>
          </div>

          <Input
            className="input-phone-login"
            type="number"
            name={nameInput}
            placeholder="Nhập số điện thoại của bạn"
            required
            onChange={handleChange}
          />
          {valueInputPhone &&
            (valueInputPhone.length < 9 || valueInputPhone.length > 11) && (
              <span className="error">Giá trị nằm trong khoảng 9-11 số!</span>
            )}
          {(valueInputPhone === null || valueInputPhone === "") && (
            <span className="error">Không được để trống trường này</span>
          )}
          <Button
            className="btn-login"
            type="submit"
            value={textButton}
            disabled={
              !valueInputPhone ||
              valueInputPhone?.length < 9 ||
              valueInputPhone?.length > 11
                ? true
                : false
            }
          ></Button>
        </form>
      </>
    );
  }
}

export default FormPhone;
