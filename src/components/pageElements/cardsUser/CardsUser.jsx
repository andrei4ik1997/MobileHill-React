import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToBasket, filterFunc, setSortFilter } from "../../../redux/actions";
import { ToastContainer} from "react-toastify";
import maxAdding from "../../../utils/maxAdding";
import notify from "../../../utils/notify";
import "react-toastify/dist/ReactToastify.css";
import "./cardsUser.css";

function CardsUser({
  basketCards,
  filterFunc,
  filterArr,
  addToBasket,
  setSortFilter,
}) {
  useEffect(() => {
    setSortFilter("alphabet");
    filterFunc();
  }, [filterFunc, setSortFilter]);

  const defaultImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png";

  return (
    <>
      <section className="shop__cards">
        {!filterArr.length ? (
          <div className="cards__notFound">
            По вашему запросу ничего не найдено
          </div>
        ) : (
          filterArr.map((item, index) =>
            +item.count > 0 ? (
              <article className="cards__item" key={index}>
                <Link to={`/shop/${item.id}`}>
                  <img
                    className="item__image"
                    src={item.picture || defaultImage}
                    alt="img"
                  ></img>
                  <div className="item__name">{item.name}</div>
                </Link>
                <div className="item__container">
                  <span className="item__price">{item.price}.00 Руб.</span>
                  {maxAdding(item, basketCards) > 0 ? (
                    <div className="item__basket_limit">
                      Добавлено максимальное количество
                    </div>
                  ) : (
                    <button
                      onClick={() => {
                        maxAdding(item, basketCards);
                        const newCard = { ...item };
                        newCard.maxCount = newCard.count;
                        newCard.count = 1;
                        addToBasket(newCard);
                        notify(newCard.name);
                        return filterFunc();
                      }}
                      className="item__button-basket"
                    >
                      В корзину
                    </button>
                  )}
                </div>
              </article>
            ) : null
          )
        )}
      </section>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    filterArr: state.cards.filterArr,
    basketCards: state.cards.basketCards,
  };
};

const mapDispatchToProps = {
  addToBasket,
  filterFunc,
  setSortFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsUser);
