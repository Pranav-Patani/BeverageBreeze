import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export const Login = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const { token, userLoginFunc } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  if (token) {
    setTimeout(() => {
      navigate(location?.state?.form?.pathname || "/", {
        replace: true,
      });
    }, 200);
  }

  const guestLoginHandler = () => {
    setLoginData((prevState) => ({
      ...prevState,
      email: "guestuser@gmail.com",
      password: "guestuser",
    }));
    userLoginFunc("guestuser@gmail.com", "guestuser");
  };

  const loginHandler = () => {
    userLoginFunc(loginData.email, loginData.password);
  };

  return (
    <>
      <div className="section-login">
        <div className="section-login__content">
          <h2 className="section-login__content__heading heading-secondary">
            Login
          </h2>
          <form
            className="section-login__content__form"
            onSubmit={(event) => event.preventDefault()}
          >
            <div className="section-login__content__form__input-container">
              <label
                htmlFor="email"
                className="section-login__content__form__input-container__label heading-tertiary"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                className="section-login__content__form__input-container__input"
                placeholder="xyz@gmail.com"
                value={loginData.email}
                onChange={(event) =>
                  setLoginData((prevState) => ({
                    ...prevState,
                    email: event.target.value,
                  }))
                }
                required
              />
              <span className="section-login__content__form__input-container__input__bottom"></span>
            </div>

            <div className="section-login__content__form__input-container section-login__content__form__input-container__password">
              <label
                htmlFor="password"
                className="section-login__content__form__input-container__label heading-tertiary"
              >
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="section-login__content__form__input-container__input "
                placeholder="*****"
                value={loginData.password}
                onChange={(event) =>
                  setLoginData((prevState) => ({
                    ...prevState,
                    password: event.target.value,
                  }))
                }
              />
              <span className="section-login__content__form__input-container__input__bottom"></span>
              <i
                onClick={() => setShowPassword(!showPassword)}
                className="section-login__content__form__input-container__icon"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </i>
            </div>

            <div className="section-login__content__form__btn-container">
              <button
                className="section-login__content__form__btn-container__btn btn-tertiary"
                onClick={loginHandler}
              >
                Login
              </button>
              <button
                className="section-login__content__form__btn-container__btn btn-tertiary"
                onClick={guestLoginHandler}
              >
                Guest Login
              </button>
              {/* <Link
                to="/signup"
                className="section-login__content__form__btn-container__link"
              >
                Create new account
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
