import React, { Component } from "react";
import Header from "./products/header";
import SlideBar from "./products/slidebar";
import Footer from "./products/footer";
import Pagination from "./products/pagination";
import { Link } from "react-router-dom";

export default class home extends Component {
  render() {
    return (
      <div>
        <Header></Header>

        <SlideBar></SlideBar>
        <main>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">
              <form className="form-inline">
                <div className="md-form my-0">
                  <input
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                  />
                </div>
              </form>
            </nav>
            <section className="text-center mb-4">
              <div className="row wow fadeIn">
                <Link className="col-lg-3 col-md-6 mb-4" to="/detail">
                  <div className="card">
                    <div className="view overlay">
                      <img
                        src="https://salt.tikicdn.com/cache/w390/ts/product/84/96/f0/d5dc978240749543f97f9ecb11b72990.jpg"
                        className="card-img-top"
                        alt=""
                      />

                      <div className="mask rgba-white-slight" />
                    </div>
                    {/*Card image*/}
                    {/*Card content*/}
                    <div className="card-body text-center">
                      {/*Category & Title*/}
                      <a href className="grey-text">
                        <h5>Shirt</h5>
                      </a>
                      <h5>
                        <strong>
                          <a href className="dark-grey-text">
                            Denim shirt
                            <span className="badge badge-pill danger-color">
                              NEW
                            </span>
                          </a>
                        </strong>
                      </h5>
                      <h4 className="font-weight-bold blue-text">
                        <strong>120$</strong>
                      </h4>
                    </div>
                    {/*Card content*/}
                  </div>
                  {/*Card*/}
                </Link>
              </div>
            </section>

            <Pagination></Pagination>
          </div>
        </main>

        <Footer></Footer>
      </div>
    );
  }
}
