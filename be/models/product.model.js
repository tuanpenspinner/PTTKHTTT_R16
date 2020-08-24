const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const async = require("async");

const comment = new Schema(
  {
    name: { type: String, required: true },
    content: { type: String, required: true },
    vote: { type: Number, required: true },
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
  arrCmt: { type: [comment], default: [] },
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
      var products = await Product.findById({_id:id});
      return products;
    } catch (e) {
      console.log("ERROR: " + e.message);
      return 0;
    }
  },
  updateProduct: async (entity) => {
    try {
      var products = await Product.findByIdAndUpdate(
        { _id: entity._id },
        entity
      );
      return true;
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
};
