import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer text-center font-small mt-4 wow fadeIn">
          {/*Call to action*/}
          <div className="pt-4"></div>
          {/*/.Call to action*/}
          <hr className="my-4" />
          {/* Social icons */}
          <div className="pb-4">
            <Link to="">
              <i className="fab fa-facebook-f mr-3" />
            </Link>
            <Link to="">
              <i className="fab fa-twitter mr-3" />
            </Link>
            <Link to="">
              <i className="fab fa-youtube mr-3" />
            </Link>
            <Link to="">
              <i className="fab fa-google-plus-g mr-3" />
            </Link>
            <Link to="">
              <i className="fab fa-dribbble mr-3" />
            </Link>
            <Link to="">
              <i className="fab fa-pinterest mr-3" />
            </Link>
            <Link to="">
              <i className="fab fa-github mr-3" />
            </Link>
            <Link to="">
              <i className="fab fa-codepen mr-3" />
            </Link>
          </div>
          {/* Social icons */}
          {/*Copyright*/}
          <div className="footer-copyright py-3">
            © 2020 Copyright:
            <Link to="">PTTK HTTT R16</Link>
          </div>
          {/*/.Copyright*/}
        </footer>
      </div>
    );
  }
}
