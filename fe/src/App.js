import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./component/home";
import DetailProduct from "./component/detail_product";
import CheckOut from "./component/checkout";

export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>
          <Route path="/detail" exact>
            <DetailProduct />
          </Route>
          <Route path="/checkout" exact>
            <CheckOut />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
