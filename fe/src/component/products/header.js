import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class header extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
          <div className="container">
            <Link className="navbar-brand waves-effect" to="/">
              <strong className="blue-text">Nhóm 16</strong>
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link waves-effect" to="#">
                    Home
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link waves-effect" to="">
                    Thông tin
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link waves-effect" to="">
                    Liên hệ
                  </Link>
                </li>
              </ul>
              {/* Right */}
              <ul className="navbar-nav nav-flex-icons">
                <li className="nav-item">
                  <Link className="nav-link waves-effect">
                    <span className="badge red z-depth-1 mr-1"> 1 </span>
                    <i className="fas fa-shopping-cart" />
                    <span className="clearfix d-none d-sm-inline-block">
                      Cart
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="" className="nav-link waves-effect">
                    <i className="fa fa-user" aria-hidden="true"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
