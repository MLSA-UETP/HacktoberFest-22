const express = require("express");
const router = express.Router();

const productController = require("../controllers/product");
const verifyToken = require("../middlewares/verifyToken");

router.post("/:userId", verifyToken.verifyTokenAndAdmin, productController.createProducts);
router.put("/:userId/:productId", verifyToken.verifyTokenAndAdmin,productController.updateProducts);
router.delete("/:userId/:productId", verifyToken.verifyTokenAndAdmin, productController.deleteProducts);
router.get("/find/:productId", productController.getProduct);
router.get("/", productController.getAllProducts);

module.exports = router;