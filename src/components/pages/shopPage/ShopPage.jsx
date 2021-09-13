import {
  Header,
  SearchPanel,
  FilterPanel,
  SortPanel,
  Footer,
  CardsUser,
  CardsAdmin
} from "../../pageElements";
import "./shop.css";

export default function ShopPage() {
  return (
    <div className="container">
      <Header />
      <SearchPanel />
      <SortPanel />
      <main className="shop__result-container">
        <FilterPanel />
        {localStorage.getItem("typeUser") === "admin" ? (
          <CardsAdmin />
        ) : (
          <CardsUser />
        )}
      </main>
      <Footer />
    </div>
  );
}
