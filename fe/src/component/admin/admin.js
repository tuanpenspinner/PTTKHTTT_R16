import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
} from "react-router-dom";
import Edit from "./edit";
import AllProduct from "./allProduct";
import Add from "./add";
import Comment from "./comment";
import Advertise from "./advertise";
class admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to="/admin/allProduct" className="nav-link" href="#">
                    Tất cả sản phẩm <span className="sr-only"></span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/admin/add" className="nav-link" href="#">
                    Thêm sản phẩm
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/admin/advertise" className="nav-link" href="#">
                    Quản lý quảng cáo
                  </NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/admin/edit" component={Edit} />
          <Route
            path="/admin"
            exact
            activeClassName="active"
            component={AllProduct}
          />
          <Route
            path="/admin/allProduct"
            activeClassName="active"
            component={AllProduct}
          />
          <Route path="/admin/add" activeClassName="active" component={Add} />
          <Route path="/admin/comment" component={Comment} />
          <Route
            path="/admin/advertise"
            activeClassName="active"
            component={Advertise}
          />
        </div>
      </Router>
    );
  }
}

export default admin;
