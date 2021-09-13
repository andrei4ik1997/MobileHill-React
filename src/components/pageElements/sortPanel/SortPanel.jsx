import "./sortPanel.css";
import { connect } from "react-redux";
import { setSortFilter, filterFunc } from "../../../redux/actions";

function SortPanel({ setSortFilter, filterFunc }) {
  return (
    <form
      className="shop__sortPanel"
      onChange={(event) => {
        setSortFilter(event.target.value);
        filterFunc();
      }}
    >
      <div className="shop__sortPanel-title">Сортировать по:</div>
      <div className="shop__sortPanel-container">
        <div className="shop__sortPanel-checkbox">
          <input
            className="radio__input"
            type="radio"
            id="alphabet"
            name="sort"
            value="alphabet"
            defaultChecked
          ></input>
          <label className="radio__label" htmlFor="alphabet">
            Названию
          </label>
        </div>
        <div className="shop__sortPanel-checkbox">
          <input
            className="radio__input"
            type="radio"
            id="price"
            name="sort"
            value="price"
          ></input>
          <label className="radio__label" htmlFor="price">
            Цене
          </label>
        </div>
        <div className="shop__sortPanel-checkbox">
          <input
            className="radio__input"
            type="radio"
            id="count"
            name="sort"
            value="count"
          ></input>
          <label className="radio__label" htmlFor="count">
            Количеству
          </label>
        </div>
        <div className="shop__sortPanel-checkbox">
          <input
            className="radio__input"
            type="radio"
            id="date"
            name="sort"
            value="date"
          ></input>
          <label className="radio__label" htmlFor="date">
            Дате
          </label>
        </div>
      </div>
    </form>
  );
}

const mapDispatchToProps = {
  setSortFilter,
  filterFunc,
};

export default connect(null, mapDispatchToProps)(SortPanel);
