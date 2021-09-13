import { connect } from "react-redux";
import { setPriceFilter, filterFunc } from "../../../redux/actions";
import "./filterPanel.css";

function FilterPanel({ priceFilter, setPriceFilter, filterFunc }) {
  return (
    <form
      onChange={(event) => {
        setPriceFilter(event.target);
        filterFunc();
      }}
      className="shop__filterPanel"
    >
      <div className="shop__filterPanel-title">Фильтр</div>

      <div className="shop__filterPanel-checkbox">
        {priceFilter.includes("cheap") ? (
          <input
            className="checkbox__input"
            type="checkbox"
            id="cheap"
            name="cheap"
            value="cheap"
            defaultChecked
          ></input>
        ) : (
          <input
            className="checkbox__input"
            type="checkbox"
            id="cheap"
            name="cheap"
            value="cheap"
          ></input>
        )}
        <label className="checkbox__label" htmlFor="cheap">
          Бюджетная
        </label>
      </div>
      <div className="shop__filterPanel-checkbox">
        {priceFilter.includes("optimal") ? (
          <input
            className="checkbox__input"
            type="checkbox"
            id="optimal"
            name="optimal"
            value="optimal"
            defaultChecked
          ></input>
        ) : (
          <input
            className="checkbox__input"
            type="checkbox"
            id="optimal"
            name="optimal"
            value="optimal"
          ></input>
        )}
        <label className="checkbox__label" htmlFor="optimal">
          Средняя
        </label>
      </div>
      <div className="shop__filterPanel-checkbox">
        {priceFilter.includes("premium") ? (
          <input
            className="checkbox__input"
            type="checkbox"
            id="premium"
            name="premium"
            value="premium"
            defaultChecked
          ></input>
        ) : (
          <input
            className="checkbox__input"
            type="checkbox"
            id="premium"
            name="premium"
            value="premium"
          ></input>
        )}

        <label className="checkbox__label" htmlFor="premium">
          Премиум
        </label>
      </div>
    </form>
  );
}
const mapStateToProps = (state) => {
  return {
    priceFilter: state.cards.priceFilter,
  };
};

const mapDispatchToProps = {
  setPriceFilter,
  filterFunc,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel);