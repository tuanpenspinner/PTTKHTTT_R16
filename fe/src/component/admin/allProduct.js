import React, { Component } from "react";
import axios from "axios";
import { url } from "../constant";
export default class allProduct extends Component {
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
  removeProduct = async (idProduct) => {
    const ret = await axios.delete(`${url}/product/${idProduct}`);
    if (ret.data.status) alert("Xóa sản phẩm thành công!");
    this.loadData();
  };
  showData = () => {
    const list = this.state.listProduct;
    return list.map((product, i) => {
      return (
        <tr key={i}>
          <th scope="row">{i + 1}</th>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>{product.number}</td>
          <td>{product.nameEmployee}</td>
          <td>
            <i
              className="fa fa-trash mr-5"
              aria-hidden="true"
              onClick={() => this.removeProduct(product._id)}
            ></i>
            <i className="fa fa-location-arrow" aria-hidden="true"></i>
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Tên</th>
              <th scope="col">Giá</th>
              <th scope="col">Số lượng</th>
              <th scope="col">Tên nhân viên nhập</th>
            </tr>
          </thead>
          <tbody>{this.showData()}</tbody>
        </table>
      </div>
    );
  }
}