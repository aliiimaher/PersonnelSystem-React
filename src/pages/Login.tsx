import "../styles/pages/Login.scss";

import { useForm } from "react-hook-form";
import axios from "axios";

import InputBox from "../components/InputBox";
import Button from "../components/Button";

import passwordSvg from "../assets/pic/passwordSvg.svg";
import personSvg from "../assets/pic/person.svg";
import dangerSvg from "../assets/pic/DangerSvg.svg";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data: any) => {
    axios
      .post("user/login/", data)
      .then((response) => { 
        localStorage.setItem("token", response.data.token);
        window.location.href = "/profile";
        console.log(response);
      })
      .catch((error: any) => {
        console.log("error:", error);
      });
  };

  return (
    <>
      <div className="login-container">
        <form onSubmit={handleSubmit(submitForm)}>
          <div className="register-right-side">
            <h1>از اینجا وارد شوید!</h1>
            <div className="login-right-side-up">
              <InputBox
                placeHolder="شماره پرسنلی"
                icon={personSvg}
                reactHookFrom={register("username", {
                  required: "وارد کردن شماره پرسنلی الزامی است",
                  pattern: {
                    value: /[0-9]/,
                    message: "شماره پرسنلی ولید نمی‌باشد!",
                  },
                })}
              />
              {errors.username && (
                <div className="register-wrong-input-alarm-container">
                  <img src={dangerSvg} />
                  <p className="formError">
                    {errors.username.message?.toString()}
                  </p>
                </div>
              )}
              <InputBox
                placeHolder="رمز"
                icon={passwordSvg}
                reactHookFrom={register("password", {
                  required: "وارد کردن رمز الزامی است!",
                  pattern: {
                    value: /[a-zA-Z0-9_]/,
                    message: "رمز وارد شده صحیح نیست!",
                  },
                })}
              />
              {errors.password && (
                <div className="register-wrong-input-alarm-container">
                  <img src={dangerSvg} />
                  <p className="formError">
                    {errors.password.message?.toString()}
                  </p>
                </div>
              )}
            </div>
            <div className="register-right-side-down">
              <Button
                text="ورود"
                size="large"
                btn100Width="yes"
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
