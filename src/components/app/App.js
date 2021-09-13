import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router";
import { ShopPage, AboutPage, ContactsPage, ProductPage, BasketPage,LoginPage} from "../pages";

export default function App() {
  let history = useHistory();
  localStorage.length ? history.push("/shop") : history.push("/login");

  return (
    <Switch>
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/shop" component={ShopPage} />
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contacts" component={ContactsPage} />
      <Route exact path="/basket" component={BasketPage} />
      <Route exact path="/shop/:shopId" component={ProductPage} />
    </Switch>
  );
}
