import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  faSignOutAlt,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  logo,
  ellipse1,
  ellipse2,
  ellipse3,
  ellipse4,
  ellipse5,
} from "../../../../src/img/shop";
import "./header.css";

function Header({ basketCards }) {
  return (
    <div className="shop">
      <img
        alt="logo"
        className="shop__ellipse shop__ellipse_first"
        src={ellipse1}
      />
      <img
        alt="logo"
        className="shop__ellipse shop__ellipse_second"
        src={ellipse2}
      />
      <img
        alt="logo"
        className="shop__ellipse shop__ellipse_third"
        src={ellipse3}
      />
      <img
        alt="logo"
        className="shop__ellipse shop__ellipse_fourth"
        src={ellipse4}
      />
      <img
        alt="logo"
        className="shop__ellipse shop__ellipse_fifth"
        src={ellipse5}
      />
      <Link to="/shop">
        <img alt="logo" className="shop__logo_img" src={logo} />
      </Link>
      <header className="shop__header">
        <nav className="shop__menu">
          <Link className="shop__menu-item" to="/shop">
            <span>Главная</span>
          </Link>
          <Link className="shop__menu-item" to="/about">
            <span> О нас</span>
          </Link>
          <Link className="shop__menu-item" to="/contacts">
            <span>Контакты</span>
          </Link>
        </nav>
        <nav className="shop__menu_basket">
          <Link
            className="shop__menu-item"
            to="/login"
            onClick={() => window.localStorage.clear()}
          >
            <FontAwesomeIcon icon={faSignOutAlt} size="lg" />
          </Link>
          {localStorage.getItem("typeUser") === "admin" ? null : (
            <Link
              className="shop__menu-item shop__menu-item-basket"
              to="/basket"
            >
              <FontAwesomeIcon icon={faShoppingCart} size="lg" />
              <div className="shop__menu-item-count">{basketCards.length}</div>
            </Link>
          )}
        </nav>
      </header>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    basketCards: state.cards.basketCards,
  };
};

export default connect(mapStateToProps, null)(Header);
