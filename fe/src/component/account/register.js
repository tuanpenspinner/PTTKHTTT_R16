import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { url } from "../constant";
import axios from "axios";
import "./login.css";
// import Facebook from "./Facebook";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      name: "",
      phone: "",
      password: "",
      email: "",
      confirmPassword: "",
    };
  }

  onclick = async () => {
    const body = {
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      name: this.state.name,
      password: this.state.password,
    };
    const ret = await axios.post(`${url}/customer/register`, body);
      if (ret.data.status) alert("Thêm tài khoản thành công!")
      else alert("Thêm tài khoản không thành công!");
  };
  onchange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="background p-1">
        <div className="container">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card card-signin">
              <div className="card-body">
                <form className="form-signin" method="POST" id="loginForm">
                  <img
                    src="https://www.pngmart.com/files/3/Register-Button-Transparent-Background.png"
                    className="card-img  mb-5"
                    alt=""
                  />
                  <div className="form-label-group">
                    <input
                      type="text"
                      name="username"
                      id="inputUsername"
                      className="form-control"
                      placeholder="Username"
                      autoFocus
                      onChange={this.onchange}
                    />
                    <label htmlFor="inputUsername">Username</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="text"
                      name="name"
                      id="inputFullname"
                      className="form-control"
                      placeholder="Full name"
                      onChange={this.onchange}
                    />
                    <label htmlFor="inputFullname">Full name</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="email"
                      name="email"
                      id="inputEmail"
                      className="form-control"
                      placeholder="Email address"
                      onChange={this.onchange}
                    />
                    <label htmlFor="inputEmail">Email address</label>
                  </div>
                  <hr />
                  <div className="form-label-group">
                    <input
                      type="password"
                      name="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      onChange={this.onchange}
                    />
                    <label htmlFor="inputPassword">Password</label>
                  </div>
                  <div className="form-label-group">
                    <input
                      type="password"
                      name="confirmPassword"
                      id="inputConfirmPassword"
                      className="form-control"
                      placeholder="Password"
                      onChange={this.onchange}
                    />
                    <label htmlFor="inputConfirmPassword">
                      Confirm password
                    </label>
                  </div>

                  <button
                    className="btn btn-lg btn-primary btn-block text-uppercase"
                    type="button"
                    onClick={this.onclick}
                  >
                    Register
                  </button>

                  <Link className="d-block text-center mt-2 small" to="./login">
                    login
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

export default Register;
