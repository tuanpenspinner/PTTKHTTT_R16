import React, { Component } from "react";
import Header from "./header";
import { withRouter } from "react-router-dom";
import Footer from "./footer";
class checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCard: "none",
    };
  }
  onChange = (e) => {
    const value = e.target.value;
    if (value === "1")
      this.setState({
        isCard: true,
      });
    else
      this.setState({
        isCard: "none",
      });
  };
  checkOut = () => {
    alert("Đặt hàng thành công!");
    this.props.history.push({
      pathname: "/",
    });
  };
  render() {
    const { product, number, sum } = this.props.location.state;
    return (
      <div>
        <Header></Header>
        <main className="mt-5 pt-4">
          <div className="container wow fadeIn">
            {/* Heading */}
            <h2 className="my-5 h2 text-center">Thanh toán</h2>
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-md-8 mb-4">
                {/*Card*/}
                <div className="card">
                  {/*Card content*/}
                  <form className="card-body">
                    {/*Grid row*/}
                    <div className="row">
                      {/*Grid column*/}
                      <div className="col-md-6 mb-2">
                        {/*firstName*/}
                        <div className="md-form ">
                          <input
                            type="text"
                            id="firstName"
                            className="form-control"
                          />
                          <label htmlFor="firstName">Họ</label>
                        </div>
                      </div>
                      {/*Grid column*/}
                      {/*Grid column*/}
                      <div className="col-md-6 mb-2">
                        {/*lastName*/}
                        <div className="md-form">
                          <input
                            type="text"
                            id="lastName"
                            className="form-control"
                          />
                          <label htmlFor="lastName">Tên</label>
                        </div>
                      </div>
                      {/*Grid column*/}
                    </div>
                    {/*Grid row*/}
                    {/*Username*/}

                    {/*email*/}
                    <div className="md-form mb-5">
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder=""
                      />
                      <label htmlFor="email">Email</label>
                    </div>
                    {/*address*/}
                    <div className="md-form mb-5">
                      <input
                        type="text"
                        id="address"
                        className="form-control"
                      />
                      <label htmlFor="address">Địa chỉ</label>
                    </div>

                    <hr />
                    <h5>Hình thức thanh toán</h5>

                    <div className="d-block my-3">
                      <div className="custom-control custom-radio">
                        <input
                          id="credit"
                          name="paymentMethod"
                          type="radio"
                          className="custom-control-input"
                          defaultChecked
                          onChange={this.onChange}
                          required
                          value="0"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="credit"
                        >
                          Tiền mặt
                        </label>
                      </div>

                      <div className="custom-control custom-radio">
                        <input
                          id="paypal"
                          name="paymentMethod"
                          type="radio"
                          value="1"
                          className="custom-control-input"
                          onChange={this.onChange}
                          required
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="paypal"
                        >
                          Credit Card
                        </label>
                      </div>
                    </div>
                    <div style={{ display: this.state.isCard }}>
                      <div className="row">
                        <div className="col-md-6 mb-3">
                          <label htmlFor="cc-name">Name on card</label>
                          <input
                            type="text"
                            className="form-control"
                            id="cc-name"
                            required
                          />
                          <small className="text-muted">
                            Full name as displayed on card
                          </small>
                          <div className="invalid-feedback">
                            Name on card is required
                          </div>
                        </div>
                        <div className="col-md-6 mb-3">
                          <label htmlFor="cc-number">Credit card number</label>
                          <input
                            type="text"
                            className="form-control"
                            id="cc-number"
                            required
                          />
                          <div className="invalid-feedback">
                            Credit card number is required
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 mb-3">
                          <label htmlFor="cc-expiration">Expiration</label>
                          <input
                            type="text"
                            className="form-control"
                            id="cc-expiration"
                            required
                          />
                          <div className="invalid-feedback">
                            Expiration date required
                          </div>
                        </div>
                        <div className="col-md-3 mb-3">
                          <label htmlFor="cc-expiration">CVV</label>
                          <input
                            type="text"
                            className="form-control"
                            id="cc-cvv"
                            required
                          />
                          <div className="invalid-feedback">
                            Security code required
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr className="mb-4" />
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      onClick={this.checkOut}
                    >
                      Thanh toán
                    </button>
                  </form>
                </div>
                {/*/.Card*/}
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-md-4 mb-4">
                {/* Heading */}
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                  <span className="text-muted">Giỏ của bạn</span>
                </h4>
                {/* Cart */}
                <ul className="list-group mb-3 z-depth-1">
                  <li className="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                      <h6 className="my-0">Name: {product.name}</h6>
                      <small className="text-muted">Số lượng:{number}</small>
                    </div>
                    <span className="text-muted">{product.price} VNĐ</span>
                  </li>

                  <li className="list-group-item d-flex justify-content-between">
                    <span>Tổng tiền: </span>
                    <strong>{sum} (VNĐ)</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}
export default withRouter(checkout);
