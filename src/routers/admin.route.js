const { Router } = require("express");
const { adminController } = require("../controller");

const router = Router();

router.post("/registration");

module.exports = router;
