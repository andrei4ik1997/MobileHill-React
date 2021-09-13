import "./cardsAdmin.css";
import validation from "../../../utils/vaidation";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  addNewCard,
  deleteCard,
  editCard,
  filterFunc,
  setSortFilter,
} from "../../../redux/actions";

function CardsAdmin({
  filterArr,
  filterFunc,
  addNewCard,
  deleteCard,
  editCard,
  setSortFilter,
}) {
  useEffect(() => {
    setSortFilter("alphabet");
    filterFunc();
  }, [filterFunc, setSortFilter]);

  const [modalAdd, setModalAdd] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [index, setIndex] = useState("");

  const defaultImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png";

  const CardsModal = ({ title, funcSubmit }) => {
    return (
      <div className="modal show">
        <div className="modal__dialog">
          <div className="modal__content">
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (validation()) {
                  setModalEdit(false);
                  setModalAdd(false);
                  funcSubmit(event, index);
                  filterFunc();
                }
              }}
              className="modal__edit"
              id="modalEdit"
              name="modalEdit"
            >
              <div
                className="modal__close"
                onClick={() => {
                  setModalEdit(false);
                  setModalAdd(false);
                }}
              >
                Close
              </div>
              <div className="modal__title">{title}</div>
              <div className="modal__main-input-container">
                <div className="modal__input-container_row">
                  <div className="modal__input-container">
                    <label className="modal__input_label" htmlFor="name">
                      Название
                    </label>
                    <input
                      className="modal__input modal__input_name"
                      id="name"
                      type="text"
                      name="name"
                      placeholder="Название"
                      defaultValue={
                        modalAdd
                          ? ""
                          : filterArr[
                              filterArr.findIndex((item) => item.id === index)
                            ].name
                      }
                      required
                    />
                    <div className="error errorName">Не менее 5 символов</div>
                  </div>
                  <div className="modal__input-container">
                    <label className="modal__input_label" htmlFor="article">
                      Артикул
                    </label>
                    <input
                      className="modal__input modal__input_article"
                      id="article"
                      type="text"
                      name="article"
                      placeholder="Артикул"
                      defaultValue={
                        modalAdd
                          ? ""
                          : filterArr[
                              filterArr.findIndex((item) => item.id === index)
                            ].article
                      }
                      required
                    />
                    <div className="error errorArticle">
                      С заглавной латинской и 2 цифры
                    </div>
                  </div>
                  <div className="modal__input-container">
                    <label className="modal__input_label" htmlFor="priceModal">
                      Стоимость
                    </label>
                    <input
                      className="modal__input modal__input_price"
                      id="priceModal"
                      type="text"
                      name="price"
                      placeholder="Стоимость"
                      defaultValue={
                        modalAdd
                          ? ""
                          : filterArr[
                              filterArr.findIndex((item) => item.id === index)
                            ].price
                      }
                      required
                    />
                    <div className="error errorPrice">Только числа</div>
                  </div>
                </div>
                <div className="modal__input-container_row">
                  <div className="modal__input-container">
                    <label className="modal__input_label" htmlFor="countModal">
                      Количество
                    </label>
                    <input
                      className="modal__input modal__input_count"
                      id="countModal"
                      type="number"
                      name="count"
                      placeholder="Количество"
                      min="0"
                      step="1"
                      defaultValue={
                        modalAdd
                          ? ""
                          : filterArr[
                              filterArr.findIndex((item) => item.id === index)
                            ].count
                      }
                      required
                    />
                  </div>
                  <div className="modal__input-container">
                    <label className="modal__input_label" htmlFor="picture">
                      Ссылка на фото
                    </label>
                    <input
                      className="modal__input modal__input_image"
                      id="picture"
                      type="text"
                      name="picture"
                      defaultValue={
                        modalAdd
                          ? ""
                          : filterArr[
                              filterArr.findIndex((item) => item.id === index)
                            ].picture
                      }
                      placeholder="Ссылка на фото"
                    />
                  </div>
                  <div className="modal__input-container">
                    <label className="modal__input_label" htmlFor="priceCheap">
                      Ценовая категория
                    </label>
                    <div className="modal__input modal__input_priceSegment">
                      <input
                        className="checkbox__input"
                        type="radio"
                        id="priceCheap"
                        name="priceSegment"
                        value="cheap"
                        defaultChecked={
                          modalAdd
                            ? true
                            : filterArr[
                                filterArr.findIndex((item) => item.id === index)
                              ].priceSegment === "cheap"
                            ? true
                            : false
                        }
                      ></input>
                      <label className="checkbox__label" htmlFor="priceCheap">
                        Бюджетная
                      </label>
                      <input
                        className="checkbox__input"
                        type="radio"
                        id="priceOptimal"
                        name="priceSegment"
                        value="optimal"
                        defaultChecked={
                          modalAdd
                            ? false
                            : filterArr[
                                filterArr.findIndex((item) => item.id === index)
                              ].priceSegment === "optimal"
                            ? true
                            : false
                        }
                      ></input>
                      <label className="checkbox__label" htmlFor="priceOptimal">
                        Средняя
                      </label>
                      <input
                        className="checkbox__input"
                        type="radio"
                        id="pricePremium"
                        name="priceSegment"
                        value="premium"
                        defaultChecked={
                          modalAdd
                            ? false
                            : filterArr[
                                filterArr.findIndex((item) => item.id === index)
                              ].priceSegment === "premium"
                            ? true
                            : false
                        }
                      ></input>
                      <label className="checkbox__label" htmlFor="pricePremium">
                        Премиум
                      </label>
                    </div>
                  </div>
                </div>

                <div className="modal__input-container_row">
                  <div className="modal__input-container">
                    <label className="modal__input_label" htmlFor="display">
                      Дисплей
                    </label>
                    <input
                      className="modal__input modal__input_display"
                      id="display"
                      type="text"
                      name="display"
                      placeholder="Дисплей"
                      defaultValue={
                        modalAdd
                          ? ""
                          : filterArr[
                              filterArr.findIndex((item) => item.id === index)
                            ].display
                      }
                      required
                    />
                  </div>
                  <div className="modal__input-container">
                    <label className="modal__input_label" htmlFor="memory">
                      Память
                    </label>
                    <select
                      className="modal__input modal__input_memory"
                      size="1"
                      id="memory"
                      name="memory"
                      defaultValue={
                        modalAdd
                          ? ""
                          : filterArr[
                              filterArr.findIndex((item) => item.id === index)
                            ].memory
                      }
                    >
                      <option>16 ГБ</option>
                      <option>32 ГБ</option>
                      <option>64 ГБ</option>
                      <option>128 ГБ</option>
                      <option>256 ГБ</option>
                      <option>512 ГБ</option>
                    </select>
                  </div>
                  <div className="modal__input-container">
                    <label className="modal__input_label" htmlFor="camera">
                      Камера
                    </label>
                    <input
                      className="modal__input modal__input_camera"
                      id="camera"
                      type="number"
                      min="0"
                      step="0.1"
                      name="camera"
                      placeholder="Камера"
                      defaultValue={
                        modalAdd
                          ? ""
                          : filterArr[
                              filterArr.findIndex((item) => item.id === index)
                            ].camera
                      }
                      required
                    />
                  </div>
                </div>
                <div className="modal__textarea-container">
                  <label className="modal__input_label" htmlFor="description">
                    Описание
                  </label>
                  <textarea
                    className="modal__input modal__input_desc"
                    id="description"
                    type="text"
                    name="description"
                    placeholder="Описание"
                    defaultValue={
                      modalAdd
                        ? ""
                        : filterArr[
                            filterArr.findIndex((item) => item.id === index)
                          ].description
                    }
                  />
                </div>
              </div>

              <div className="modal__buttons">
                <button className="btn__modal btn__modal_submit" type="submit">
                  Отправить
                </button>
                {modalEdit ? (
                  <button
                    onClick={(event) => {
                      setModalEdit(false);
                      setModalAdd(false);
                      deleteCard(event, index);
                      return filterFunc();
                    }}
                    className="btn__modal btn__modal_delete"
                    type="submit"
                  >
                    Удалить товар
                  </button>
                ) : null}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="containerCards">
      <button className="button-add" onClick={() => setModalAdd(true)}>
        Добавить товар
      </button>
      < div className="shop__cards">
        {!filterArr.length ? (
          <div className="cards__notFound">
            По вашему запросу ничего не найдено
          </div>
        ) : (
          filterArr.map((item, i) => {
            return (
              <article className="cards__item" key={i}>
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
                  <button
                    onClick={() => {
                      setIndex(item.id);
                      setModalEdit(true);
                    }}
                    className="item__button-basket"
                  >
                    Редактировать
                  </button>
                </div>
              </article>
            );
          })
        )}
      </div>
      {modalEdit ? (
        <CardsModal title={"Редактирование товара"} funcSubmit={editCard} />
      ) : null}
      {modalAdd ? (
        <CardsModal
          title={"Добавление нового товара"}
          funcSubmit={addNewCard}
        />
      ) : null}
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    filterArr: state.cards.filterArr,
  };
};

const mapDispatchToProps = {
  addNewCard,
  deleteCard,
  editCard,
  setSortFilter,
  filterFunc,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsAdmin);
