import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./component/home";
import DetailProduct from "./component/products/detail_product";
import CheckOut from "./component/products/checkout";
import Admin from "./component/admin/admin";
import Cart from "./component/products/cart";
import Login from "./component/account/login";
import Register from "./component/account/register";
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
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
// "dev": "react-scripts start",
// "start": "serve -s build",
// "build": "react-scripts build",
// "heroku-postbuild": "npm run build"
