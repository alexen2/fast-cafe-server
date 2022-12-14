const express = require("express");
const router = express.Router();
const orderRouter = require("./orderRouter");
const categoryRouter = require("./categoryRouter");
const userRouter = require("./userRouter");
const productRouter = require("./productRouter");

router.use("/order", orderRouter);
router.use("/category", categoryRouter);
router.use("/user", userRouter);
router.use("/product", productRouter);

module.exports = router;