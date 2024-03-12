import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import TeamMatches from "./components/ProductItem";

import "./App.css";

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/product-item/:id" component={TeamMatches} />
  </Switch>
);

export default App;
