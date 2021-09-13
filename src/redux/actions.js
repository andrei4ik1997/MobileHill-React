import {
  ADD_NEW_CARD,
  DELETE_CARD,
  EDIT_CARD,
  ADD_TO_BASKET,
  DELETE_CARD_IN_BASKET,
  ADD_COUNT_CARD_IN_BASKET,
  REMOVE_COUNT_CARD_IN_BASKET,
  SET_SEARCH_FILTER,
  SET_PRICE_FILTER,
  SET_SORT_FILTER,
  FILTER_FUNC
} from "./types";
import nextId from "react-id-generator";
import currDate from "../utils/currDate.js";

export function addNewCard(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const newElem = Object.fromEntries(formData.entries());
  newElem.id = nextId();
  newElem.date = currDate();
  return {
    type: ADD_NEW_CARD,
    payload: newElem,
  };
}

export function deleteCard(event, id) {
  event.preventDefault();
  return {
    type: DELETE_CARD,
    payload: id,
  };
}

export function editCard(event, id) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const editElem = Object.fromEntries(formData.entries());
  editElem.date = currDate();
  editElem.id = id;
  return {
    type: EDIT_CARD,
    payload: id,
    newElem: editElem,
  };
}

export function addToBasket(card) {
  return {
    type: ADD_TO_BASKET,
    payload: card,
  };
}

export function deleteCardInBasket(id) {
  return {
    type: DELETE_CARD_IN_BASKET,
    payload: id,
  };
}

export function addCountCardInBasket(id) {
  return {
    type: ADD_COUNT_CARD_IN_BASKET,
    payload: id,
  };
}

export function removeCountCardInBasket(id) {
  return {
    type: REMOVE_COUNT_CARD_IN_BASKET,
    payload: id,
  };
}

export function setSearchValue(value) {
  return {
    type: SET_SEARCH_FILTER,
    payload: value,
  };
}

export function setPriceFilter(value) {
  return {
    type: SET_PRICE_FILTER,
    payload: value,
  };
}

export function setSortFilter(value) {
  return {
    type: SET_SORT_FILTER,
    payload: value,
  };
}

export function filterFunc() {
  return {
    type: FILTER_FUNC,
  };
}