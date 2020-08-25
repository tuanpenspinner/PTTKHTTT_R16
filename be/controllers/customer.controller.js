const Customer = require("../models/customer.model");

const jwt = require("jsonwebtoken");

//Đăng kí customer
exports.registerCustomer = async (req, res) => {
  try {
    const newCustomer = req.body;
    const customerExist = await Customer.findOneUserName(newCustomer.username);
    if (!customerExist) {
      const result = await Customer.registerCustomer(newCustomer);
      res.json({
        status: true,
        message: `Thêm tài khoản ${newCustomer.username} thành công`,
      });
    } else {
      res.json({
        status: false,
        message: `Tài khoản ${newCustomer.username} đã tồn tại`,
      });
    }
  } catch (e) {
    console.log("ERROR: " + e);

    return res.json({
      status: false,
      message: "Tạo tài khoản thất bại",
    });
  }
};
//Đăng nhập customer
exports.loginCustomer = async (req, res) => {
  try {
    const entity = req.body;
    const ret = await Customer.loginCustomer(entity);
    if (ret === null)
      return res.json({
        status: false,
        failLogin: "Tài khoản hoặc mật khẩu chưa chính xác",
      });
    const payload = {
      idUser: ret._id,
      username: ret.username,
      name: ret.name,
      phone: ret.phone,
    };

    const accessToken = generateAccessToken(payload);
    const customer = {
      username: ret.username,
      email: ret.email,
      name: ret.name,
      phone: ret.phone,
    };
    res.json({
      status: true,
      accessToken: accessToken,
      customer: customer,
    });
  } catch (e) {
    console.log("ERROR: " + e);

    return res.json({
      status: false,
      message: "Đăng nhập thất bại",
    });
  }
};

//Đổi mật khẩu customer

const generateAccessToken = (payload) => {
  const accessToken = jwt.sign(payload, "secretKeyCustomer", {
    expiresIn: "1d", // 1 day
  });

  return accessToken;
};
