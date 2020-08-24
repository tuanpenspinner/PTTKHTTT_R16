const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const async = require("async");

const customerSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, default: null },
  phone: { type: String, default: null },
  password: { type: String, default: null },

});

const Customer = mongoose.model("customers", customerSchema, "customers");
