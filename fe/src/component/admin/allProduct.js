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

  editProduct = (product) => {
    this.props.history.push({
      pathname: "/admin/edit",
      state: {
        product,
      },
    });
  };
  comment = (product) => {
    this.props.history.push({
      pathname: "/admin/comment",
      state: {
        product,
      },
    });
  };
  showData = () => {
    const list = this.state.listProduct;
    return list.map((product, i) => {
      return (
        <tr key={i}>
          <th scope="row">{i + 1}</th>
          <td>{product.name}</td>
          <td>
            <img
              src={product.img}
              alt="..."
              style={{ width: 100, height: 100 }}
            ></img>
          </td>
          <td>{product.price}</td>
          <td>{product.number}</td>
          <td>{product.nameEmployee}</td>
          <td>
            <i
              className="fa fa-trash mr-5"
              aria-hidden="true"
              onClick={() => this.removeProduct(product._id)}
            ></i>
            <i
              className="fa fa-location-arrow mr-5"
              onClick={() => this.editProduct(product)}
              aria-hidden="true"
            ></i>
            <i
              className="fa fa-comment "
              aria-hidden="true"
              onClick={() => this.comment(product)}
            ></i>
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
              <th scope="col">Hình ảnh</th>
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
