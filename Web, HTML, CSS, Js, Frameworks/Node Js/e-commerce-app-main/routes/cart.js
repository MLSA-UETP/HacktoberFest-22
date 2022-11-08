const express = require("express");
const router = express.Router();

const cartController = require("../controllers/cart");
const verifyToken = require("../middlewares/verifyToken");

router.post("/:userId", verifyToken.verifyTokenAndAuthorization, cartController.createCart);
router.put("/:userId/:cartId", verifyToken.verifyTokenAndAuthorization, cartController.updateCart);
router.delete("/:userId/:cartId", verifyToken.verifyTokenAndAuthorization, cartController.deleteCart);
router.get("/find/:userId/:cartId", verifyToken.verifyTokenAndAuthorization, cartController.getCart);
router.get("/", verifyToken.verifyTokenAndAdmin, cartController.getAllCarts);

module.exports = router;