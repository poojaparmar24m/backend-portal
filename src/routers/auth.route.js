const { Router } = require("express");
const { authController } = require("../controller");

const router = Router();

router.post("/login");

router.post("/reset-password");

module.exports = router;
