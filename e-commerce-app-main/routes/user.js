const router = require("express").Router();
const verifyToken = require("../middlewares/verifyToken");
const userController = require("../controllers/user");

router.put("/:userId", verifyToken.verifyTokenAndAuthorization, userController.updateUser);
router.delete("/:userId", verifyToken.verifyTokenAndAuthorization, userController.deleteUser);
router.get("/find/:userId", verifyToken.verifyTokenAndAdmin, userController.getUser);
router.get("/", userController.getAllUsers);
router.get("/stats",userController.stats);

module.exports = router;