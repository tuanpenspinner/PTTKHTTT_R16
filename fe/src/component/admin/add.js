import React, { Component } from "react";
import axios from "axios";
import { url } from "../constant";

export default class add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      img:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/600px-No_image_available.svg.png",
      number: "",
      price: "",
      detail: "",
      nameEmployee: "",
    };
  }

  onChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  onSave = async () => {
    const { name, detail, price, number, img, nameEmployee } = this.state;
    const body = {
      name,
      detail,
      price,
      number,
      img,
      nameEmployee,
    };

    const ret = await axios.post(`${url}/product`, body);

    if (ret.data.status) alert("Thêm sản phẩm thành công!");
  };

  render() {
    return (
      <div className="mt-4">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Tên nhân viên nhập</label>
          <input
            type="text"
            name="nameEmployee"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Tên nhân viên"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
          <input
            type="text"
            name="name"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Tên sản phẩm"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Mô tả sản phẩm</label>
          <input
            type="text"
            name="detail"
            className="form-control"
            aria-describedby="emailHelp"
            placeholder="Mô tả sản phẩm"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Link hình ảnh</label>
          <input
            name="img"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Url"
            onChange={this.onChange}
          />
        </div>
        <img
          src={this.state.img}
          alt="..."
          style={{ width: 200, height: 200 }}
        ></img>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Số lượng</label>
          <input
            name="number"
            type="text"
            className="form-control"
            placeholder="Số lượng"
            onChange={this.onChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Giá</label>
          <input
            type="text"
            name="price"
            className="form-control"
            placeholder="Giá"
            onChange={this.onChange}
          />
        </div>

        <button onClick={this.onSave} className="btn btn-primary">
          Thêm sản phẩm
        </button>
      </div>
    );
  }
}
