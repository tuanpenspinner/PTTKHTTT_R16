import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "./header";

import Footer from "./footer";
export default class cart extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <section className="jumbotron text-center">
          <div className="container">
            <h1 className="jumbotron-heading">Giỏ hàng</h1>
          </div>
        </section>
        <div className="container mb-4">
          <div className="row">
            <div className="col-12">
              <div className="table-responsive">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th scope="col"> </th>
                      <th scope="col">Tên sản phẩm</th>
                      <th scope="col">Available</th>
                      <th scope="col" className="text-center">
                        Số lượng
                      </th>
                      <th scope="col" className="text-right">
                        Giá
                      </th>
                      <th> </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img src="https://dummyimage.com/50x50/55595c/fff" />{" "}
                      </td>
                      <td>Product Name Titi</td>
                      <td>In stock</td>
                      <td>
                        <input
                          className="form-control"
                          type="text"
                          defaultValue={1}
                        />
                      </td>
                      <td className="text-right">70,00 €</td>
                      <td className="text-right">
                        <button className="btn btn-sm btn-danger">
                          <i className="fa fa-trash" />{" "}
                        </button>{" "}
                      </td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>Tổng tiền</td>
                      <td className="text-right">255,90 VNĐ</td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>Phí ship</td>
                      <td className="text-right">6,90 VND</td>
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td>
                        <strong>Tổng</strong>
                      </td>
                      <td className="text-right">
                        <strong>346,90 €</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2">
              <div className="row">
                <div className="col-sm-12  col-md-6">
                  <button className="btn btn-block btn-light">
                    Tiếp tục mua sắm
                  </button>
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                  <Link
                    to="/checkout"
                    className="btn btn-lg btn-block btn-success text-uppercase"
                  >
                    Thanh toán
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
