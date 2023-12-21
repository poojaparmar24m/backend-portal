const { Router } = require("express");
const { customerController } = require("../controller");

const router = Router();

router.post("/registration");

module.exports = router;
