import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";
import { withRouter } from "react-router-dom";
import Comment from "./comment";
import axios from "axios";
import { url } from "../constant";
class detail_product extends Component {
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
    };
  }

  componentDidMount() {
    const { idProduct } = this.props.match.params;
    this.loadData(idProduct);
  }
  loadData = async (idProduct) => {
    const ret = await axios.get(`${url}/product/detail/${idProduct}`);
    this.setState({
      productDetail: { ...ret.data.data },
    });
  };
  reLoad = () => {
    const { idProduct } = this.props.match.params;
    this.loadData(idProduct);
  };
  addCart = (product) => {
  
    this.props.history.push({
      pathname: "/cart",
      state: {
        product,
      },
    });
  };

  render() {
    const { productDetail } = this.state;

    return (
      <div>
        <Header></Header>
        <main className="mt-5 pt-4">
          <div className="container dark-grey-text mt-5">
            {/*Grid row*/}
            <div className="row wow fadeIn">
              {/*Grid column*/}
              <div className="col-md-6 mb-4">
                <img src={productDetail.img} className="img-fluid" alt="" />
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-md-6 mb-4">
                {/*Content*/}
                <div className="p-4">
                  <div className="mb-3">
                    <div>
                      <span className="badge purple mr-1">Category 2</span>
                    </div>
                  </div>
                  <h5>
                    <strong>
                      <div className="dark-grey-text">{productDetail.name}</div>
                    </strong>
                  </h5>
                  <p className="lead">
                    <span>{productDetail.price} VNĐ</span>
                  </p>
                  <p className="lead font-weight-bold">Mô tả</p>
                  <p>{productDetail.detail}</p>
                  <form className="d-flex justify-content-left">
                    {/* Default input */}
                    <input
                      type="number"
                      defaultValue={1}
                      aria-label="Search"
                      className="form-control"
                      style={{ width: "100px" }}
                    />
                    <div
                      onClick={() => this.addCart(productDetail)}
                      className="btn btn-primary btn-md my-0 p"
                      type="submit"
                    >
                      Add to cart
                      <i className="fas fa-shopping-cart ml-1" />
                    </div>
                  </form>
                </div>
                {/*Content*/}
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
            <hr />
          </div>
        </main>
        <Comment
          arrCmt={this.state.productDetail.arrCmt}
          productDetail={this.state.productDetail}
          reLoad={this.reLoad}
        ></Comment>
        <Footer></Footer>
      </div>
    );
  }
}
export default withRouter(detail_product);
