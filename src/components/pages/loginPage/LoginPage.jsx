import { useState } from "react";
import { useHistory } from "react-router";
import { users } from "../../../services/users";
import {
  logo,
  ellipse1,
  ellipse2,
  ellipse3,
  ellipse4,
  ellipse5,
} from "../../../img/login";
import "./login.css";

export default function LoginPage() {
  const [inputLogin, setInputLogin] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [modalLogin, setModalLogin] = useState(false);

  let history = useHistory();

  const handleInputLogin = (event) => {
    setInputLogin(event.target.value);
  };
  const handleInputPassword = (event) => {
    setInputPassword(event.target.value);
  };

  const checkUser = function (login, password) {
    const indexUser = users.findIndex((user) => {
      return user.login === login && user.password === password;
    });

    indexUser !== -1
      ? window.localStorage.setItem("typeUser", users[indexUser].type)
      : setModalLogin(true);

    localStorage.getItem("typeUser") === "admin" ||
    localStorage.getItem("typeUser") === "user"
      ? history.push("/shop")
      : history.push("/login");
  };

  return (
    <div className="loginPage">
      <img
        alt="logo"
        className="loginPage__ellipse loginPage__ellipse_first"
        src={ellipse1}
      />
      <img
        alt="logo"
        className="loginPage__ellipse loginPage__ellipse_second"
        src={ellipse2}
      />
      <img
        alt="logo"
        className="loginPage__ellipse loginPage__ellipse_third"
        src={ellipse3}
      />
      <img
        alt="logo"
        className="loginPage__ellipse loginPage__ellipse_fourth"
        src={ellipse4}
      />
      <img
        alt="logo"
        className="loginPage__ellipse loginPage__ellipse_fifth"
        src={ellipse5}
      />
      <div className="loginPage__container">
        <div className="loginPage__logo">
          <img alt="logo" className="loginPage__logo_img" src={logo} />
          <div className="loginPage__logo_welcome">Добро пожаловать!</div>
        </div>
        <div className="loginPage__form">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              checkUser(inputLogin, inputPassword);
              setInputLogin("");
              setInputPassword("");
            }}
            className="loginPage__form-container"
          >
            <div className="loginPage__form-title">Вход в личный кабинет</div>

            <input
              className="loginPage__form-input"
              onChange={handleInputLogin}
              type="text"
              id="login"
              name="login"
              value={inputLogin}
              placeholder="Ваша почта"
            ></input>
            <input
              className="loginPage__form-input"
              onChange={handleInputPassword}
              type="password"
              id="password"
              name="password"
              placeholder="Ваш пароль"
              value={inputPassword}
            ></input>
            <button className="loginPage__button-login">Войти</button>
          </form>
        </div>
      </div>
      {modalLogin ? <LoginModal setModalLogin={setModalLogin} /> : null}
    </div>
  );
}

const LoginModal = ({ setModalLogin }) => {
  return (
    <div className="modal__login show">
      <div className="modal__login-dialog">
        <div className="modal__login-content">
          <div className="modal__login-textContainer">
            Вы ввели не корректные данные, попробуйте еще раз
          </div>
          <button
            className="modal__buttonClose"
            onClick={() => setModalLogin(false)}
          >
            Еще раз
          </button>
        </div>
      </div>
    </div>
  );
};
