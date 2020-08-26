import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
} from "react-router-dom";
import Edit from "./edit";
import AllProduct from "./allProduct";
import Add from "./add";
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
                <li className="nav-item ">
                  <Link to="/admin/allProduct" className="nav-link" href="#">
                    Tất cả sản phẩm <span className="sr-only"></span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/add" className="nav-link" href="#">
                    Thêm sản phẩm
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/admin/edit" className="nav-link" href="#">
                    Edit
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route exact path="/admin/edit" component={Edit} />
          <Route path="/admin/allProduct" component={AllProduct} />
          <Route path="/admin/add" component={Add} />
        </div>
      </Router>
    );
  }
}

export default admin;
