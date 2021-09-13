import { Link } from "react-router-dom";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <nav className="footer__menu">
          <Link className="footer__menu-item" to="/shop">
            <span>Главная</span>
          </Link>
          <Link className="footer__menu-item" to="/contacts">
            <span>Контакты</span>
          </Link>
          <Link className="footer__menu-item" to="/about">
            <span> О нас</span>
          </Link>
        </nav>
        <nav className="footer__links">
          <span>Мы в соцсетях</span>
          <span>Vk</span>
          <span>Facebook</span>
          <span>Twitter</span>
          <span>YouTube</span>
          <span>Instagram</span>
        </nav>
        <div className="footer__logo">MobileHill</div>
        <div className="footer__contacts">
          <button className="footer__contacts-button">Заказать звонок</button>
          <div className="footer__contacts-phone">+77 (077) 777-77-77</div>
          <div className="footer__contacts-mail">
            <a href="mailto:modilehill@gmail.com">modilehill@gmail.com</a>
          </div>
        </div>
      </div>
      <FontAwesomeIcon
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        icon={faArrowCircleUp}
        size="3x"
        className="button__up"
      />
    </footer>
  );
}
