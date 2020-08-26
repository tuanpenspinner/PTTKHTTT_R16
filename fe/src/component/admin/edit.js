import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { url } from "../constant";
class edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: "",
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
  componentDidMount() {
    const product = this.props.location.state.product;
    this.setState({
      ...product,
    });
  }
  onSave = async () => {
    const { name, detail, price, number, img, nameEmployee, _id } = this.state;
    const body = {
      _id,
      name,
      detail,
      price,
      number,
      img,
      nameEmployee,
    };
    console.log(body);
    const ret = await axios.put(`${url}/product`, body);

    if (ret.data.status) alert("Thêm sửa sản phẩm thành công!");
  };
  render() {
    const { name, detail, price, number, img, nameEmployee } = this.state;
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
            value={nameEmployee}
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
            value={name}
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
            value={detail}
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
            value={img}
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
            value={number}
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
            value={price}
          />
        </div>

        <button onClick={this.onSave} className="btn btn-primary">
          Lưu chỉnh sửa
        </button>
      </div>
    );
  }
}
export default withRouter(edit);
