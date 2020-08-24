const Product = require("../models/product.model");

exports.addProduct = async (req, res) => {
  try {
    const newProduct = req.body;
    const result = await Product.addProduct(newProduct);
    if (!result) {
      throw { message: "Thêm sản phẩm thất bạn!" };
    }
    return res.json({
      message: "Thêm sản phẩm thành công!",
      status: true,
    });
  } catch (e) {
    console.log("ERROR: " + e.message);

    return res.json({
      status: false,
      message: e.message,
    });
  }
};
exports.getAllProduct = async (req, res) => {
  try {
    const result = await Product.getAllProduct();
    if (!result)
      return res.json({
        message: "Không load đươc data!",
        status: false,
      });
    return res.json({
      message: "Load danh sách thành công!",
      data: result,
      status: true,
    });
  } catch (e) {
    console.log("ERROR: " + e.message);

    return res.json({
      status: false,
      message: e.message,
    });
  }
};
exports.getProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Product.getProduct(id);
    if (!result)
      return res.json({
        message: "Không load đươc data!",
        status: false,
      });
    return res.json({
      message: "Load danh sách thành công!",
      data: result,
      status: true,
    });
  } catch (e) {
    console.log("ERROR: " + e.message);

    return res.json({
      status: false,
      message: e.message,
    });
  }
};
exports.updateProduct = async (req, res) => {
  try {
    const entity = req.body;
    const result = await Product.updateProduct(entity);
    if (!result)
      return res.json({
        message: "Update thất bại!",
        status: false,
      });
    return res.json({
      message: "Update sản phẩm thành công",
      status: true,
    });
  } catch (e) {
    console.log("ERROR: " + e.message);

    return res.json({
      status: false,
      message: e.message,
    });
  }
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Product.removeProduct(id);
    if (!result)
      return res.json({
        message: "Xóa thất bại!",
        status: false,
      });
    return res.json({
      message: "Xóa thành công!",
      status: true,
    });
  } catch (e) {
    console.log("ERROR: " + e.message);

    return res.json({
      status: false,
      message: e.message,
    });
  }
};
