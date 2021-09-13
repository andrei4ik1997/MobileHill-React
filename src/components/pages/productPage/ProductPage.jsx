import { Header, SearchPanel, Footer, Product } from "../../pageElements";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ProductPage({ cards }) {
  const { shopId } = useParams();
  const index = cards.findIndex((item) => item.id === shopId);
  const product = cards[index];

  return (
    <div className="container">
      <Header />
      <SearchPanel />
      <Product product={product} />
      <Footer />
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
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cards: state.cards.cards,
  };
};

export default connect(mapStateToProps, null)(ProductPage);
