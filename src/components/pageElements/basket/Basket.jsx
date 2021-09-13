import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  deleteCardInBasket,
  addCountCardInBasket,
  removeCountCardInBasket,
} from "../../../redux/actions";
import {
  faTimesCircle,
  faPlusCircle,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./basket.css";

function Basket({
  setModalBasket,
  basketCards,
  deleteCardInBasket,
  addCountCardInBasket,
  removeCountCardInBasket,
}) {

  const finalPrice = basketCards.reduce((accumulator, currentValue) => {
    return accumulator + +currentValue.count * +currentValue.price;
  }, 0);
  const totalCount = basketCards.reduce((accumulator, currentValue) => {
    return accumulator + +currentValue.count;
  }, 0);
  return (
    <main className="basket">
      <h3 className="basket__title">Корзина</h3>
      {basketCards.map((item, index) => {
        return (
          <article key={index} className="basket__item">
            <Link to={`/shop/${item.id}`}>
              <img
                alt="img"
                src={item.picture}
                className="basket__item-img"
              ></img>
            </Link>

            <div className="basket__item-container">
              <Link className="basket__item_link" to={`/shop/${item.id}`}>
                <div className="basket__item-title">Смартфон {item.name}</div>
              </Link>

              <div className="basket__item-count">
                {item.count > 1 ? (
                  <FontAwesomeIcon
                    className="basket__item-minus"
                    icon={faMinusCircle}
                    size="lg"
                    onClick={() => removeCountCardInBasket(item.id)}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="basket__item-minus_none"
                    icon={faMinusCircle}
                    size="lg"
                    onClick={() => removeCountCardInBasket(item.id)}
                  />
                )}
                {item.count}
                {item.count < item.maxCount ? (
                  <FontAwesomeIcon
                    className="basket__item-plus"
                    icon={faPlusCircle}
                    size="lg"
                    onClick={() => addCountCardInBasket(item.id)}
                  />
                ) : (
                  <FontAwesomeIcon
                    className="basket__item-plus_none"
                    icon={faPlusCircle}
                    size="lg"
                    onClick={() => addCountCardInBasket(item.id)}
                  />
                )}
              </div>
              <div className="basket__item-price">
                {item.count * item.price} Руб.
              </div>
              <FontAwesomeIcon
                className="basket__item-delete"
                icon={faTimesCircle}
                size="lg"
                onClick={() => deleteCardInBasket(item.id)}
              />
            </div>
          </article>
        );
      })}
      {!basketCards.length ? (
        <div className="basket__notFound">В корзине ничего нет :(</div>
      ) : (
        <>
          <hr></hr>
          <article className="basket__submit-container">
            <div className="basket__submit-title">
              Общее количество товара: {totalCount}
            </div>
            <div className="basket__submit-title">Итого к оплате:</div>
            <div className="basket__submit-price">{finalPrice}.00 Руб.</div>
            <button
              onClick={() => setModalBasket(true)}
              className="basket__submit"
            >
              Оформить заказ
            </button>
          </article>
        </>
      )}

      <Link className="product__button_back" to="/shop">
        <button className="basket__back">Назад</button>
      </Link>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    basketCards: state.cards.basketCards,
  };
};

const mapDispatchToProps = {
  deleteCardInBasket,
  addCountCardInBasket,
  removeCountCardInBasket,
};


export default connect(mapStateToProps, mapDispatchToProps)(Basket);
