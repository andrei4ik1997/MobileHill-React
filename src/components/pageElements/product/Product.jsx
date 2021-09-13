import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToBasket } from "../../../redux/actions";
import {
  faCheck,
  faArrowLeft,
  faToolbox,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import maxAdding from "../../../utils/maxAdding";
import notify from "../../../utils/notify";
import "./product.css";

function Product({ product, basketCards, addToBasket }) {
  const { name, picture, count, display, camera, price } = product;
  const [update, setUpdate] = useState(false);

 return (
    <main className="product">
      <div className="product__header-container">
        <div className="product__chapter">Мобильные телефоны</div>
        <Link to="/shop">
          <div className="product__back">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        </Link>
      </div>
      <div className="product__name">{name}</div>
      <section className="product__info-container">
        <div className="product__img-container">
          <div className="product__main-img">
            <img className="product__picture" src={picture} alt="img"></img>
          </div>
          <div className="product__little-img-container">
            <div className="product__little-img">
              <img
                className="product__picture_little"
                src={picture}
                alt="img"
              ></img>
            </div>
            <div className="product__little-img">
              <img
                className="product__picture_little"
                src={picture}
                alt="img"
              ></img>
            </div>
            <div className="product__little-img">
              <img
                className="product__picture_little"
                src={picture}
                alt="img"
              ></img>
            </div>
            <div className="product__little-img">
              <img
                className="product__picture_little"
                src={picture}
                alt="img"
              ></img>
            </div>
          </div>
        </div>
        <div className="product__desc-container">
          <div className="product__desc-count">В наличии: {count} шт.</div>
          <div className="product__desc-title">Основные характеристики</div>
          <div className="product__desc-characteristic">
            <FontAwesomeIcon
              className="product__desc-characteristic-icon"
              icon={faCheck}
            />
            <div className="product__desc-characteristic-name">
              Диагональ дисплея
            </div>
            <span className="product__desc-characteristic-value">
              {display}''
            </span>
          </div>
          <div className="product__desc-characteristic">
            <FontAwesomeIcon
              icon={faCheck}
              className="product__desc-characteristic-icon"
            />
            <span className="product__desc-characteristic-name">
              Обьем встроенной памяти
            </span>
            <span className="product__desc-characteristic-value">
              {product.memory}
            </span>
          </div>
          <div className="product__desc-characteristic">
            <FontAwesomeIcon
              icon={faCheck}
              className="product__desc-characteristic-icon"
            />
            <span className="product__desc-characteristic-name">
              Основная камера
            </span>
            <span className="product__desc-characteristic-value">
              {camera} МП
            </span>
          </div>
          <div className="product__desc-property-container">
            <div className="product__desc-property-color">
              <div className="product__desc-property-title">Цвет</div>
              <div className="product__desc-property-value">
                <div className="product__desc-property-value-color product__desc-property-value-color_black"></div>
                <div className="product__desc-property-value-color product__desc-property-value-color_white"></div>
                <div className="product__desc-property-value-color product__desc-property-value-color_green"></div>
              </div>
            </div>
            <div className="product__desc-property-price">
              <div className="product__desc-property-title">Цена</div>
              <div className="product__desc-property-value">
                {price}.00 Руб.
              </div>
            </div>
          </div>
          <div className="product__desc-footer-container">
            {localStorage.getItem("typeUser") === "admin" ? (
              <button className="product__desc-button product__desc-button_none"></button>
            ) : maxAdding(product, basketCards) > 0 ? (
              <div className="product__basket_limit">
                Добавлено максимальное количество
              </div>
            ) : (
              <button
                onClick={() => {
                  const newCard = { ...product };
                  newCard.maxCount = newCard.count;
                  newCard.count = 1;
                  notify(newCard.name);
                  setUpdate(!update);
                  addToBasket(newCard);
                }}
                className="product__desc-button"
              >
                Добавить в корзину
              </button>
            )}
            <div>
              <div className="product__desc-footer-bonus">
                <FontAwesomeIcon icon={faToolbox} size="lg" />
                <span className="product__desc-footer-bonus_margin">
                  Гарантийное обслуживание
                </span>
              </div>
              <div className="product__desc-footer-bonus">
                <FontAwesomeIcon icon={faTruck} size="lg" />
                <span className="product__desc-footer-bonus_margin">
                  Доставка по всей Беларуси
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="product__info-description-container">
        <div className="product__info-description-title">
          Дополнительные характеристики
        </div>
        <div className="product__info-description">{product.description}</div>
      </section>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    basketCards: state.cards.basketCards,
  };
};
const mapDispatchToProps = {
  addToBasket,
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);