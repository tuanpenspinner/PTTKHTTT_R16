import React, { Component } from "react";
import Header from "./products/header";
import SlideBar from "./products/slidebar";
import Footer from "./products/footer";
import Pagination from "./products/pagination";
import { Link } from "react-router-dom";
import axios from "axios";
import { url } from "./constant";

export default class home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [],
    };
  }
  componentDidMount() {
    this.loadData();
  }
  loadData = async () => {
    const ret = await axios.get(`${url}/product/listProduct`);
    this.setState({
      listProduct: [...ret.data.data],
    });
  };

  render() {
    const showListProduct = () => {
      const list = this.state.listProduct;
      return list.map((product, i) => {
        return (
          <Link
            className="col-lg-3 col-md-6 mb-4"
            key={i}
            to={`/detail/${product._id}`}
          >
            <div className="card">
              <div className="view overlay">
                <img src={product.img} className="card-img-top" alt="" />

                <div className="mask rgba-white-slight" />
              </div>

              <div className="card-body text-center">
                <h5>
                  <strong>
                    <div className="dark-grey-text">{product.name}</div>
                  </strong>
                </h5>
                <h4 className="font-weight-bold blue-text">
                  <strong>{product.price} VNĐ</strong>
                </h4>
              </div>
            </div>
          </Link>
        );
      });
    };
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
              <div className="row wow fadeIn">{showListProduct()}</div>
            </section>

            <Pagination></Pagination>
          </div>
        </main>

        <Footer></Footer>
      </div>
    );
  }
}
