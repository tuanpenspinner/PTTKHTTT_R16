import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class pagination extends Component {
  render() {
    return (
      <div>
        <nav className="d-flex justify-content-center wow fadeIn">
          <ul className="pagination pg-blue">
            {/*Arrow left*/}
            <li className="page-item disabled">
              <Link className="page-link" to="" aria-label="Previous">
                <span aria-hidden="true">«</span>
                <span className="sr-only">Previous</span>
              </Link>
            </li>
            <li className="page-item active">
              <Link className="page-link" to="">
                1<span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                4
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="">
                5
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="" aria-label="Next">
                <span aria-hidden="true">»</span>
                <span className="sr-only">Next</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
