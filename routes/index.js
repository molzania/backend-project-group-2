const express = require("express");
const router = express.Router();

const productRouter = require("./product.router");
const cartRouter = require("./carts.router");
const transactionRouter = require("./transactions.router");
const userRouter = require("./user.router");
const flowerRouter = require("./flowers.router");

router.use("/product", productRouter);
router.use("/cart", cartRouter);
router.use("/transaction", transactionRouter);
router.use("/user", userRouter);
router.use("/flower", flowerRouter);

module.exports = router;
