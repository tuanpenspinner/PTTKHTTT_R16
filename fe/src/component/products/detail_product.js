import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import { Link } from "react-router-dom";

export default class detail_product extends Component {
  render() {
    return (
      <div>
        <Header></Header>

        <main className="mt-5 pt-4">
          <div className="container dark-grey-text mt-5">
            {/*Grid row*/}
            <div className="row wow fadeIn">
              {/*Grid column*/}
              <div className="col-md-6 mb-4">
                <img
                  src="https://salt.tikicdn.com/cache/w390/ts/product/84/96/f0/d5dc978240749543f97f9ecb11b72990.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-md-6 mb-4">
                {/*Content*/}
                <div className="p-4">
                  <div className="mb-3">
                    <Link >
                      <span className="badge purple mr-1">Category 2</span>
                    </Link>
                    <Link >
                      <span className="badge blue mr-1">New</span>
                    </Link>
                    <Link>
                      <span className="badge red mr-1">Bestseller</span>
                    </Link>
                  </div>
                  <p className="lead">
                    <span className="mr-1">
                      <del>$200</del>
                    </span>
                    <span>$100</span>
                  </p>
                  <p className="lead font-weight-bold">Description</p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                    dolor suscipit libero eos atque quia ipsa sint voluptatibus!
                    Beatae sit assumenda asperiores iure at maxime atque
                    repellendus maiores quia sapiente.
                  </p>
                  <form className="d-flex justify-content-left">
                    {/* Default input */}
                    <input
                      type="number"
                      defaultValue={1}
                      aria-label="Search"
                      className="form-control"
                      style={{ width: "100px" }}
                    />
                    <button
                      className="btn btn-primary btn-md my-0 p"
                      type="submit"
                    >
                      Add to cart
                      <i className="fas fa-shopping-cart ml-1" />
                    </button>
                  </form>
                </div>
                {/*Content*/}
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
            <hr />
            {/*Grid row*/}
            <div className="row d-flex justify-content-center wow fadeIn">
              {/*Grid column*/}
              <div className="col-md-6 text-center">
                <h4 className="my-4 h4">Additional information</h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                  suscipit modi sapiente illo soluta odit voluptates, quibusdam
                  officia. Neque quibusdam quas a quis porro? Molestias illo
                  neque eum in laborum.
                </p>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
            {/*Grid row*/}
            <div className="row wow fadeIn">
              {/*Grid column*/}
              <div className="col-lg-4 col-md-12 mb-4">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4">
                <img
                  src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </div>
        </main>

        <Footer></Footer>
      </div>
    );
  }
}
