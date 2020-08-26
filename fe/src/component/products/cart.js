import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import Header from "./header";

import Footer from "./footer";
class cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetail: {
        name: "",
        img: "",
        detail: "",
        price: 0,
        number: 0,
        CateId: 0,
        arrCmt: [],
      },
      sum: 0,
      number: 1,
    };
  }
  componentDidMount() {
    const product = this.props.location.state.product;
    this.setState({
      productDetail: { ...product },
      sum: product.price,
    });
  }
  onChange = (e) => {
    const { productDetail } = this.state;
    this.setState({
      sum: e.target.value * productDetail.price,
      number: e.target.value,
    });
  };
  onCheckout = () => {
    this.props.history.push({
      pathname: "/checkout",
      state: {
        product: this.state.productDetail,
        number: this.state.number,
        sum: this.state.sum,
      },
    });
  };
  render() {
    const { productDetail } = this.state;
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
                        <img
                          alt="fdsf"
                          src="https://dummyimage.com/50x50/55595c/fff"
                        />
                      </td>
                      <td>{productDetail.name}</td>
                      <td>In stock</td>
                      <td>
                        <input
                          className="form-control"
                          type="number"
                          name="number"
                          defaultValue={this.state.number}
                          onChange={this.onChange}
                        />
                      </td>
                      <td className="text-right">{productDetail.price} VNĐ</td>
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
                      <td>
                        <strong>Tổng</strong>
                      </td>
                      <td className="text-right">
                        <strong>{this.state.sum} VNĐ</strong>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="col mb-2">
              <div className="row">
                <div className="col-sm-12  col-md-6">
                  <Link to="/" className="btn btn-block btn-light">
                    Tiếp tục mua sắm
                  </Link>
                </div>
                <div className="col-sm-12 col-md-6 text-right">
                  <div
                    onClick={this.onCheckout}
                    className="btn btn-lg btn-block btn-success text-uppercase"
                  >
                    Thanh toán
                  </div>
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
export default withRouter(cart);
