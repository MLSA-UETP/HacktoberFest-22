const { Router } = require("express");
const router = Router();

// Controllers
const controller = require("../controllers/user");

router.use("/users", controller.get);

module.exports = router;
