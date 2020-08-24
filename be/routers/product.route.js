const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.post("/",productController.addProduct);
router.get("/detail/:id", productController.getProduct);
router.get("/listProduct", productController.getAllProduct);
router.put("/", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);

module.exports = router;
