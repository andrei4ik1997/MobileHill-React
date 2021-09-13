import { Header, SearchPanel, Footer, Basket } from "../../pageElements";
import { useState } from "react";
import { useHistory } from "react-router";
import { connect } from "react-redux";

function BasketPage({ basketCards }) {
  const [modalBasket, setModalBasket] = useState(false);
  return (
    <div className="container">
      <Header />
      <SearchPanel />
      <Basket setModalBasket={setModalBasket} />
      <Footer />
      {modalBasket ? (
        <BasketModal
          basketCards={basketCards}
          setModalBasket={setModalBasket}
        />
      ) : null}
    </div>
  );
}

const BasketModal = ({ basketCards, setModalBasket }) => {
  let history = useHistory();
  return (
    <div className="modal__basket show">
      <div className="modal__basket-dialog">
        <div className="modal__basket-content">
          <div className="modal__basket-textContainer">Спасибо за заказ!</div>
          <button
            className="modal__buttonClose"
            onClick={() => {
              history.push("/shop");
              basketCards.length = 0;
              setModalBasket(false);
            }}
          >
            Вернуться в магазин
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    basketCards: state.cards.basketCards,
  };
};

export default connect(mapStateToProps, null)(BasketPage);
