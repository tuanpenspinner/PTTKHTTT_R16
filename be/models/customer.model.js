const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const async = require("async");

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
};
