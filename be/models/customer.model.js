const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

const customerSchema = new Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, default: null },
  phone: { type: String, default: null },
  password: { type: String, default: null },
});

const Customer = mongoose.model("customers", customerSchema, "customers");
module.exports = {
  // Đăng kí tài khoản customer
  registerCustomer: async (entity) => {
    try {
      const hash = bcrypt.hashSync(entity.password, 10);
      entity.password = hash;
      var user = new Customer(entity);
      await user.save();
    } catch (e) {
      console.log("ERROR: " + e.message);
    }
  },
  findOneUserName: async (username) => {
    try {
      let user = await Customer.findOne({ username: username });
      return user;
    } catch (e) {
      console.log("ERROR: " + e);
    }
  },
  loginCustomer: async (entity) => {
    const customerExist = await Customer.findOne({ username: entity.username });
    if (customerExist === null) return null;
    const password = customerExist.password;
    if (bcrypt.compareSync(entity.password, password)) {
      return customerExist;
    }
    return null;
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

    transporter.sendMail(mailOptions, async (err, info) => {
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
