import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./component/home";
import DetailProduct from "./component/products/detail_product";
import CheckOut from "./component/products/checkout";
import Admin from "./component/admin"

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/detail/:idProduct" exact>
            <DetailProduct />
          </Route>
          <Route path="/checkout" exact>
            <CheckOut />
          </Route>
          <Route path="/admin" exact>
            <Admin />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
