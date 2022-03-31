const express = require("express");
const router = express.Router();

const productRouter = require("./product.router");
const cartRouter = require("./carts.router");
const transactionRouter = require("./transactions.router");
const userRouter = require("./user.router");

router.use("/product", productRouter);
router.use("/cart", cartRouter);
router.use("/transaction", transactionRouter);
router.use("/user", userRouter);

module.exports = router;
