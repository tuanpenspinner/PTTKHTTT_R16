import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { url } from "../constant";
import axios from "axios";

// import Facebook from "./Facebook";
import "./login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  onchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  onclick = async () => {
    const body = {
      username: this.state.username,
      password: this.state.password,
    };
    const ret = await axios.post(`${url}/customer/login`, body);
    if (ret.data.status) {
      localStorage.setItem("accessToken", ret.data.accessToken);
      localStorage.setItem(
        "info",
        JSON.stringify({
          username: ret.data.customer.username,
          name: ret.data.customer.name,
          email: ret.data.customer.email,
          phone: ret.data.customer.phone,
        })
      );
      window.location.href = "./";
    } else alert("Login không thành công!");
  };

  render() {
    return (
      <div className="background p-5">
        <div className="container">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin">
              <div className="card-body">
                <form className="form-signin" method="POST" id="loginForm">
                  <img
                    src="http://pluspng.com/img-png/login-button-png-login-button-png-image-18028-872.png"
                    className="card-img mb-5"
                    alt=""
                  />
                  <div className="form-label-group">
                    <input
                      type="text"
                      id="inputUsername"
                      name="username"
                      className="form-control"
                      placeholder="Username"
                      autoFocus
                      onChange={this.onchange}
                    />
                    <label htmlFor="inputUsername">Username</label>
                  </div>

                  <div className="form-label-group">
                    <input
                      type="password"
                      id="inputPassword"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      onChange={this.onchange}
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <div className="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                      onChange={this.onchange}
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember password
                    </label>
                  </div>
                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="button"
                    onClick={this.onclick}
                  >
                    Login
                  </button>

                  <Link
                    replace
                    className="d-block text-center mt-2 small"
                    to="./register"
                  >
                    Register
                  </Link>
                  <hr className="mt-5" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
