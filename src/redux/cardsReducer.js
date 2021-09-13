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
  FILTER_FUNC,
} from "./types";
import { cardsDb } from "../services/cardsDb";

const initialState = {
  cards: cardsDb,
  filterArr: cardsDb,
  basketCards: [],
  search: "",
  priceFilter: [],
  sortFilter: "alphabet",
};

export const cardsReducer = (state = initialState, action) => {
  const { cards, basketCards, search, priceFilter, sortFilter } =
    state;
  const { type, payload } = action;
  switch (type) {
    case ADD_NEW_CARD:
      return { ...state, cards: [...cards, payload] };

    case DELETE_CARD:
      const index = cards.findIndex((item) => item.id === payload);
      const newDb = [...cards.slice(0, index), ...cards.slice(index + 1)];
      return { ...state, cards: newDb };

    case EDIT_CARD:
      const indexEdit = cards.findIndex((item) => item.id === payload);
      const newCards = [
        ...cards.slice(0, indexEdit),
        action.newElem,
        ...cards.slice(indexEdit + 1),
      ];
      return { ...state, cards: newCards };

    case ADD_TO_BASKET:
      if (basketCards.length > 0) {
        const indexBasket = basketCards.findIndex(
          (item) => item.id === payload.id
        );
        if (indexBasket === -1) {
          return { ...state, basketCards: [...basketCards, payload] };
        } else {
          basketCards[indexBasket].count += 1;
          return { ...state, basketCards: basketCards };
        }
      } else {
        return { ...state, basketCards: [...basketCards, payload] };
      }

    case DELETE_CARD_IN_BASKET:
      const indexDeleteBasket = basketCards.findIndex(
        (item) => item.id === payload
      );
      return {
        ...state,
        basketCards: [
          ...basketCards.slice(0, indexDeleteBasket),
          ...basketCards.slice(indexDeleteBasket + 1),
        ],
      };

    case ADD_COUNT_CARD_IN_BASKET:
      const indexAddingCard = basketCards.findIndex(
        (item) => item.id === payload
      );
      const addCountElem = basketCards[indexAddingCard];
      addCountElem.count += 1;

      const newDbBasketAfterAdding = [
        ...basketCards.slice(0, indexAddingCard),
        addCountElem,
        ...basketCards.slice(indexAddingCard + 1),
      ];
      return { ...state, basketCards: newDbBasketAfterAdding };

    case REMOVE_COUNT_CARD_IN_BASKET:
      const indexRemovingCard = basketCards.findIndex(
        (item) => item.id === payload
      );
      const removeCountElem = basketCards[indexRemovingCard];
      if (removeCountElem.count > 1) {
        removeCountElem.count -= 1;
        const newDbBasketAfterRemoving = [
          ...basketCards.slice(0, indexRemovingCard),
          removeCountElem,
          ...basketCards.slice(indexRemovingCard + 1),
        ];
        return { ...state, basketCards: newDbBasketAfterRemoving };
      }
      break;

    case SET_SEARCH_FILTER:
      return { ...state, search: payload };

    case SET_PRICE_FILTER:
      if (payload.checked) {
        const newPriceFilter = [...priceFilter, payload.value];
        return { ...state, priceFilter: newPriceFilter };
      } else {
        const indexPriceFiter = priceFilter.findIndex(
          (filter) => filter === payload.value
        );
        return {
          ...state,
          priceFilter: [
            ...priceFilter.slice(0, indexPriceFiter),
            ...priceFilter.slice(indexPriceFiter + 1),
          ],
        };
      }

    case SET_SORT_FILTER:
      return { ...state, sortFilter: payload };

    case FILTER_FUNC:
      let filtered = [];
      let searched = [];
      let sorted =[]

      searched = cards.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });

      if (priceFilter.length === 0 || priceFilter.length >= 3) {
        filtered = [...searched];
      } else if (
        priceFilter.includes("cheap") &&
        priceFilter.includes("premium")
      ) {
        filtered = searched.filter((item) => {
          return (
            item.priceSegment === "cheap" || item.priceSegment === "premium"
          );
        });
      } else if (
        priceFilter.includes("cheap") &&
        priceFilter.includes("optimal")
      ) {
        filtered = searched.filter((item) => {
          return (
            item.priceSegment === "cheap" || item.priceSegment === "optimal"
          );
        });
      } else if (
        priceFilter.includes("optimal") &&
        priceFilter.includes("premium")
      ) {
        filtered = searched.filter((item) => {
          return (
            item.priceSegment === "optimal" || item.priceSegment === "premium"
          );
        });
      } else if (priceFilter.includes("cheap")) {
        filtered = searched.filter((item) => {
          return item.priceSegment === "cheap";
        });
      } else if (priceFilter.includes("optimal")) {
        filtered = searched.filter((item) => {
          return item.priceSegment === "optimal";
        });
      } else if (priceFilter.includes("premium")) {
        filtered = searched.filter((item) => {
          return item.priceSegment === "premium";
        });
      }

      if (sortFilter === "alphabet") {
        sorted = filtered.sort((a, b) => {
          if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
          }
          if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
          }
          return 0;
        });
      } else if (sortFilter === "price") {
        sorted = filtered.sort((a, b) => {
          return +a.price - +b.price;
        });
      } else if (sortFilter === "count") {
        sorted =  filtered.sort((a, b) => {
          return +a.count - +b.count;
        });
      } else if (sortFilter === "date") {
        sorted =  filtered.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
      }

      return { ...state, filterArr: sorted };

    default:
      return state;
  }
};
