const { Router } = require("express");
const adminRouter = require("./admin.route");
const customerRouter = require("./customer.route");
const authRouter = require("./auth.route");

const router = Router();

router.use("/admin", adminRouter);

router.use("/customer", customerRouter);

router.use("/auth", authRouter);

module.exports = router;
