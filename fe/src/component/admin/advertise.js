import React, { Component } from "react";
import axios from "axios";
import { url } from "../constant";
export default class advertise extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [],
      email: "",
      content: "",
      listCustomer: [],
    };
  }
  componentDidMount() {
    this.loadData();
  }
  loadData = async () => {
    const ret1 = await axios.get(`${url}/product/listProduct`);
    const ret2 = await axios.get(`${url}/customer/listCustomer`);
    this.setState({
      listProduct: [...ret1.data.data],
      listCustomer: [...ret2.data.listCustomer],
      email: ret2.data.listCustomer[0].email,
    });
  };
  sendAdvertise = async (product, email) => {
    const ret = product.listReceiverAdvertise.find((c) => c.email === email);
    if (ret) alert("Email đã được gửi đi rồi!");
    else {
      const content = {
        name: product.name,
        price: product.price,
        img: product.img,
      };
      var newProduct = product;
      newProduct.listReceiverAdvertise.push(email);
      await axios.post(`${url}/product/advertise`, { content, email });
      await axios.put(`${url}/product`, newProduct);
      alert("Gửi quảng cáo thành công tới email: " + email);
      this.loadData();
    }
  };
  onChange = (e) => {
    this.setState({ email: e.target.value });
  };
  showData = () => {
    const list = this.state.listProduct;

    const loadListCustomer = (listReceiverAdvertise) => {
      var listCustomer = this.state.listCustomer;
      var list = listReceiverAdvertise;
      if (listCustomer.length > 0) {
        return listCustomer.map((customer, i) => {
          const ret = list.find((c) => c === customer.email);
          if (!ret)
            return (
              <option key={i} value={customer.email}>
                Tên: {customer.name} &nbsp; &nbsp; &nbsp; &nbsp;Email:
                {customer.email}
              </option>
            );
          else return null;
        });
      }
      return null;
    };
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

          <td>
            <div className="form-group">
              <select
                className="form-control"
                id="sel1"
                onChange={this.onChange}
              >
                {loadListCustomer(product.listReceiverAdvertise)}
              </select>
            </div>
          </td>
          <td>
            <i
              className="fa fa-paper-plane "
              aria-hidden="true"
              onClick={() => {
                var email = this.state.email;

                this.sendAdvertise(product, email);
              }}
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
              <th scope="col">Khách hàng cần gửi email quảng cáo</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>{this.showData()}</tbody>
        </table>
      </div>
    );
  }
}
