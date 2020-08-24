import React, { Component } from "react";

export default class home extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-light white scrolling-navbar">
          <div className="container">
            {/* Brand */}
            <a
              className="navbar-brand waves-effect"
              href="https://mdbootstrap.com/docs/jquery/"
              target="_blank"
            >
              <strong className="blue-text">MDB</strong>
            </a>
            {/* Collapse */}
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
            {/* Links */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* Left */}
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link waves-effect" href="#">
                    Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link waves-effect"
                    href="https://mdbootstrap.com/docs/jquery/"
                    target="_blank"
                  >
                    About MDB
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link waves-effect"
                    href="https://mdbootstrap.com/docs/jquery/getting-started/download/"
                    target="_blank"
                  >
                    Free download
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link waves-effect"
                    href="https://mdbootstrap.com/education/bootstrap/"
                    target="_blank"
                  >
                    Free tutorials
                  </a>
                </li>
              </ul>
              {/* Right */}
              <ul className="navbar-nav nav-flex-icons">
                <li className="nav-item">
                  <a className="nav-link waves-effect">
                    <span className="badge red z-depth-1 mr-1"> 1 </span>
                    <i className="fas fa-shopping-cart" />
                    <span className="clearfix d-none d-sm-inline-block">
                      {" "}
                      Cart{" "}
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://www.facebook.com/mdbootstrap"
                    className="nav-link waves-effect"
                    target="_blank"
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://twitter.com/MDBootstrap"
                    className="nav-link waves-effect"
                    target="_blank"
                  >
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="https://github.com/mdbootstrap/bootstrap-material-design"
                    className="nav-link border border-light rounded waves-effect"
                    target="_blank"
                  >
                    <i className="fab fa-github mr-2" />
                    MDB GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Navbar */}
        {/*Carousel Wrapper*/}
        <div
          id="carousel-example-1z"
          className="carousel slide carousel-fade pt-4"
          data-ride="carousel"
        >
          {/*Indicators*/}
          <ol className="carousel-indicators">
            <li
              data-target="#carousel-example-1z"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#carousel-example-1z" data-slide-to={1} />
            <li data-target="#carousel-example-1z" data-slide-to={2} />
          </ol>
          {/*/.Indicators*/}
          {/*Slides*/}
          <div className="carousel-inner" role="listbox">
            {/*First slide*/}
            <div className="carousel-item active">
              <div
                className="view"
                style={{
                  backgroundImage:
                    'url("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                {/* Mask & flexbox options*/}
                <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
                  {/* Content */}
                  <div className="text-center white-text mx-5 wow fadeIn">
                    <h1 className="mb-4">
                      <strong>Learn Bootstrap 4 with MDB</strong>
                    </h1>
                    <p>
                      <strong>
                        Best &amp; free guide of responsive web design
                      </strong>
                    </p>
                    <p className="mb-4 d-none d-md-block">
                      <strong>
                        The most comprehensive tutorial for the Bootstrap 4.
                        Loved by over 500 000 users. Video and written versions
                        available. Create your own, stunning website.
                      </strong>
                    </p>
                    <a
                      target="_blank"
                      href="https://mdbootstrap.com/education/bootstrap/"
                      className="btn btn-outline-white btn-lg"
                    >
                      Start free tutorial
                      <i className="fas fa-graduation-cap ml-2" />
                    </a>
                  </div>
                  {/* Content */}
                </div>
                {/* Mask & flexbox options*/}
              </div>
            </div>
            {/*/First slide*/}
            {/*Second slide*/}
            <div className="carousel-item">
              <div
                className="view"
                style={{
                  backgroundImage:
                    'url("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%283%29.jpg")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                {/* Mask & flexbox options*/}
                <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
                  {/* Content */}
                  <div className="text-center white-text mx-5 wow fadeIn">
                    <h1 className="mb-4">
                      <strong>Learn Bootstrap 4 with MDB</strong>
                    </h1>
                    <p>
                      <strong>
                        Best &amp; free guide of responsive web design
                      </strong>
                    </p>
                    <p className="mb-4 d-none d-md-block">
                      <strong>
                        The most comprehensive tutorial for the Bootstrap 4.
                        Loved by over 500 000 users. Video and written versions
                        available. Create your own, stunning website.
                      </strong>
                    </p>
                    <a
                      target="_blank"
                      href="https://mdbootstrap.com/education/bootstrap/"
                      className="btn btn-outline-white btn-lg"
                    >
                      Start free tutorial
                      <i className="fas fa-graduation-cap ml-2" />
                    </a>
                  </div>
                  {/* Content */}
                </div>
                {/* Mask & flexbox options*/}
              </div>
            </div>
            {/*/Second slide*/}
            {/*Third slide*/}
            <div className="carousel-item">
              <div
                className="view"
                style={{
                  backgroundImage:
                    'url("https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%285%29.jpg")',
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                {/* Mask & flexbox options*/}
                <div className="mask rgba-black-strong d-flex justify-content-center align-items-center">
                  {/* Content */}
                  <div className="text-center white-text mx-5 wow fadeIn">
                    <h1 className="mb-4">
                      <strong>Learn Bootstrap 4 with MDB</strong>
                    </h1>
                    <p>
                      <strong>
                        Best &amp; free guide of responsive web design
                      </strong>
                    </p>
                    <p className="mb-4 d-none d-md-block">
                      <strong>
                        The most comprehensive tutorial for the Bootstrap 4.
                        Loved by over 500 000 users. Video and written versions
                        available. Create your own, stunning website.
                      </strong>
                    </p>
                    <a
                      target="_blank"
                      href="https://mdbootstrap.com/education/bootstrap/"
                      className="btn btn-outline-white btn-lg"
                    >
                      Start free tutorial
                      <i className="fas fa-graduation-cap ml-2" />
                    </a>
                  </div>
                  {/* Content */}
                </div>
                {/* Mask & flexbox options*/}
              </div>
            </div>
            {/*/Third slide*/}
          </div>
          {/*/.Slides*/}
          {/*Controls*/}
          <a
            className="carousel-control-prev"
            href="#carousel-example-1z"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carousel-example-1z"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
          {/*/.Controls*/}
        </div>
        {/*/.Carousel Wrapper*/}
        {/*Main layout*/}
        <main>
          <div className="container">
            {/*Navbar*/}
            <nav className="navbar navbar-expand-lg navbar-dark mdb-color lighten-3 mt-3 mb-5">
              {/* Navbar brand */}
              <span className="navbar-brand">Categories:</span>
              {/* Collapse button */}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#basicExampleNav"
                aria-controls="basicExampleNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              {/* Collapsible content */}
              <div className="collapse navbar-collapse" id="basicExampleNav">
                {/* Links */}
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      All
                      <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Shirts
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Sport wears
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Outwears
                    </a>
                  </li>
                </ul>
                {/* Links */}
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
              </div>
              {/* Collapsible content */}
            </nav>
            {/*/.Navbar*/}
            {/*Section: Products v.3*/}
            <section className="text-center mb-4">
              {/*Grid row*/}
              <div className="row wow fadeIn">
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4">
                  {/*Card*/}
                  <div className="card">
                    {/*Card image*/}
                    <div className="view overlay">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg"
                        className="card-img-top"
                        alt=""
                      />
                      <a>
                        <div className="mask rgba-white-slight" />
                      </a>
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
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4">
                  {/*Card*/}
                  <div className="card">
                    {/*Card image*/}
                    <div className="view overlay">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg"
                        className="card-img-top"
                        alt=""
                      />
                      <a>
                        <div className="mask rgba-white-slight" />
                      </a>
                    </div>
                    {/*Card image*/}
                    {/*Card content*/}
                    <div className="card-body text-center">
                      {/*Category & Title*/}
                      <a href className="grey-text">
                        <h5>Sport wear</h5>
                      </a>
                      <h5>
                        <strong>
                          <a href className="dark-grey-text">
                            Sweatshirt
                          </a>
                        </strong>
                      </h5>
                      <h4 className="font-weight-bold blue-text">
                        <strong>139$</strong>
                      </h4>
                    </div>
                    {/*Card content*/}
                  </div>
                  {/*Card*/}
                </div>
                {/*Grid column*/}
                {/*Grid column*/}
                <div className="col-lg-3 col-md-6 mb-4">
                  {/*Card*/}
                  <div className="card">
                    {/*Card image*/}
                    <div className="view overlay">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg"
                        className="card-img-top"
                        alt=""
                      />
                      <a>
                        <div className="mask rgba-white-slight" />
                      </a>
                    </div>
                    {/*Card image*/}
                    {/*Card content*/}
                    <div className="card-body text-center">
                      {/*Category & Title*/}
                      <a href className="grey-text">
                        <h5>Sport wear</h5>
                      </a>
                      <h5>
                        <strong>
                          <a href className="dark-grey-text">
                            Grey blouse
                            <span className="badge badge-pill primary-color">
                              bestseller
                            </span>
                          </a>
                        </strong>
                      </h5>
                      <h4 className="font-weight-bold blue-text">
                        <strong>99$</strong>
                      </h4>
                    </div>
                    {/*Card content*/}
                  </div>
                  {/*Card*/}
                </div>
                {/*Grid column*/}
                {/*Fourth column*/}
                <div className="col-lg-3 col-md-6 mb-4">
                  {/*Card*/}
                  <div className="card">
                    {/*Card image*/}
                    <div className="view overlay">
                      <img
                        src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg"
                        className="card-img-top"
                        alt=""
                      />
                      <a>
                        <div className="mask rgba-white-slight" />
                      </a>
                    </div>
                    {/*Card image*/}
                    {/*Card content*/}
                    <div className="card-body text-center">
                      {/*Category & Title*/}
                      <a href className="grey-text">
                        <h5>Outwear</h5>
                      </a>
                      <h5>
                        <strong>
                          <a href className="dark-grey-text">
                            Black jacket
                          </a>
                        </strong>
                      </h5>
                      <h4 className="font-weight-bold blue-text">
                        <strong>219$</strong>
                      </h4>
                    </div>
                    {/*Card content*/}
                  </div>
                  {/*Card*/}
                </div>
                {/*Fourth column*/}
              </div>
             
             
            </section>
            {/*Section: Products v.3*/}
            {/*Pagination*/}
            <nav className="d-flex justify-content-center wow fadeIn">
              <ul className="pagination pg-blue">
                {/*Arrow left*/}
                <li className="page-item disabled">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">
                    1<span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">»</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/*Pagination*/}
          </div>
        </main>
        {/*Main layout*/}
        {/*Footer*/}
        <footer className="page-footer text-center font-small mt-4 wow fadeIn">
          {/*Call to action*/}
          <div className="pt-4">
            <a
              className="btn btn-outline-white"
              href="https://mdbootstrap.com/docs/jquery/getting-started/download/"
              target="_blank"
              role="button"
            >
              Download MDB
              <i className="fas fa-download ml-2" />
            </a>
            <a
              className="btn btn-outline-white"
              href="https://mdbootstrap.com/education/bootstrap/"
              target="_blank"
              role="button"
            >
              Start free tutorial
              <i className="fas fa-graduation-cap ml-2" />
            </a>
          </div>
          {/*/.Call to action*/}
          <hr className="my-4" />
          {/* Social icons */}
          <div className="pb-4">
            <a href="https://www.facebook.com/mdbootstrap" target="_blank">
              <i className="fab fa-facebook-f mr-3" />
            </a>
            <a href="https://twitter.com/MDBootstrap" target="_blank">
              <i className="fab fa-twitter mr-3" />
            </a>
            <a
              href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4"
              target="_blank"
            >
              <i className="fab fa-youtube mr-3" />
            </a>
            <a
              href="https://plus.google.com/u/0/b/107863090883699620484"
              target="_blank"
            >
              <i className="fab fa-google-plus-g mr-3" />
            </a>
            <a href="https://dribbble.com/mdbootstrap" target="_blank">
              <i className="fab fa-dribbble mr-3" />
            </a>
            <a href="https://pinterest.com/mdbootstrap" target="_blank">
              <i className="fab fa-pinterest mr-3" />
            </a>
            <a
              href="https://github.com/mdbootstrap/bootstrap-material-design"
              target="_blank"
            >
              <i className="fab fa-github mr-3" />
            </a>
            <a href="http://codepen.io/mdbootstrap/" target="_blank">
              <i className="fab fa-codepen mr-3" />
            </a>
          </div>
          {/* Social icons */}
          {/*Copyright*/}
          <div className="footer-copyright py-3">
            © 2019 Copyright:
            <a
              href="https://mdbootstrap.com/education/bootstrap/"
              target="_blank"
            >
              {" "}
              MDBootstrap.com{" "}
            </a>
          </div>
          {/*/.Copyright*/}
        </footer>
      </div>
    );
  }
}
