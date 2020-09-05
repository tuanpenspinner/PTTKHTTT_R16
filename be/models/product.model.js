const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const nodemailer = require("nodemailer");
const async = require("async");

const comment = new Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    vote: { type: Number, required: true },
    dateCre: { type: Date, required: true },
    idUser: { type: String, required: true },
  },
  {
    _id: false,
  }
);
const productSchema = new Schema({
  name: { type: String, required: true },
  img: { type: String, default: null },
  number: { type: Number, default: 0 },
  detail: { type: String, default: null },
  price: { type: Number, default: null },
  CateId: { type: String, default: null },
  nameEmployee: { type: String, default: null },
  arrCmt: { type: [comment], default: [] },
  listReceiverAdvertise: { type: Array, default: [] },
});

const Product = mongoose.model("products", productSchema, "products");
module.exports = {
  // Đăng kí tài khoản customer
  addProduct: async (entity) => {
    try {
      var product = new Product(entity);
      await product.save();
      return true;
    } catch (e) {
      console.log("ERROR: " + e.message);
      return false;
    }
  },
  getAllProduct: async () => {
    try {
      var products = await Product.find();
      return products;
    } catch (e) {
      console.log("ERROR: " + e.message);
      return 0;
    }
  },
  getProduct: async (id) => {
    try {
      var products = await Product.findById({ _id: id });
      return products;
    } catch (e) {
      console.log("ERROR: " + e.message);
      return 0;
    }
  },
  updateProduct: async (entity) => {
    try {
      var products = await Product.findByIdAndUpdate(entity._id, entity);

      if (products) return true;
      else return false;
    } catch (e) {
      console.log("ERROR: " + e.message);
      return 0;
    }
  },
  removeProduct: async (id) => {
    try {
      var products = await Product.findByIdAndRemove({ _id: id });
      return true;
    } catch (e) {
      console.log("ERROR: " + e.message);
      return 0;
    }
  },
  sendAdvertise: async (userMail, content) => {
    let transporter = nodemailer.createTransport({
      service: "Gmail",
      secure: true, // true for 465, false for other ports
      auth: {
        user: "pttkhtttnhom16@gmail.com",
        pass: "s2nhoks1",
      },
    });

    let mailOptions = {
      to: userMail,
      from: "pttkhtttnhom16@gmail.com",
      subject: "Quảng cáo sản phẩm shop R16 ",
      text: "Hãy ghé thăm shop R16 để chọn được những sản phẩm rẻ!",
      html: `<div><h1>${content.name}</h1><p>Giá:${content.price}</p> <img src=${content.img} alt="Tuan"  width= "200" height="200"></img></div>`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log("ERR", err.message);
        return false;
      } else {
        console.log("Gửi quảng cáo thành công tới : ", userMail);
        return true;
      }
    });
  },
};
