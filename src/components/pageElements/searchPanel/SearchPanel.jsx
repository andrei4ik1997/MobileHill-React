import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { setSearchValue, filterFunc } from "../../../redux/actions";
import { useHistory } from "react-router";
import "./searchPanel.css";

function SearchPanel({ searchValue, setSearchValue, filterFunc }) {
  let history = useHistory();
  return (
    <section className="shop__searchPanel">
      {history.location.pathname === "/shop" ? (
        <input
          className="shop__searchPanel-input"
          onChange={(event) => {
            setSearchValue(event.target.value);
            filterFunc();
          }}
          type="text"
          id="search"
          name="search"
          defaultValue={searchValue}
          placeholder="Поиск по товарам"
        />
      ) : (
        <input
          className="shop__searchPanel-input"
          onChange={(event) => {
            setSearchValue(event.target.value);
            filterFunc();
          }}
          type="text"
          id="search"
          name="search"
          placeholder="Поиск по товарам"
        />
      )}

      <FontAwesomeIcon
        className="shop__searchPanel-icon"
        icon={faSearch}
        size="lg"
        transform={{ rotate: 90 }}
      />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    searchValue: state.cards.search,
  };
};
const mapDispatchToProps = {
  setSearchValue,
  filterFunc,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPanel);
