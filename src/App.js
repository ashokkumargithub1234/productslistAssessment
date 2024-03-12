import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import ProductItem from "./components/ProductItem";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/product-item/:id" component={ProductItem} />
  </Switch>
);

export default App;
