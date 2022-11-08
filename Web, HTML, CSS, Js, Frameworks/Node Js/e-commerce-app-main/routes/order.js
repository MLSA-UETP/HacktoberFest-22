const router = require("express").Router();

const orderController = require("../controllers/order");
const verifyToken = require("../middlewares/verifyToken");

router.post("/:userId", verifyToken.verifyTokenAndAuthorization, orderController.createOrder);
router.put("/:userId/:orderId", verifyToken.verifyTokenAndAdmin, orderController.updateOrder);
router.delete("/:userId/:orderId", verifyToken.verifyTokenAndAdmin, orderController.deleteOrder);
router.get("/find/:userId/:orderId", verifyToken.verifyTokenAndAuthorization, orderController.getOrder);
router.get("/:userId", verifyToken.verifyTokenAndAdmin, orderController.getAllOrders);
// Get monthly income
router.get("/income/:userId", verifyToken.verifyTokenAndAdmin, orderController.getIncomeStatistics);

module.exports = router;