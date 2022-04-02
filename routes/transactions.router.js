const express = require("express");
const transaction = express.Router();
const authenticateJWT = require("../auth");

const { getAll, getById, addTransaction, updateTransaction, deleteTransaction } = require("../controllers/transactions.controller");

transaction.get("/", authenticateJWT, getAll);
transaction.get("/:id", authenticateJWT, getById);
transaction.post("/", authenticateJWT, addTransaction);
transaction.put("/:id", authenticateJWT, updateTransaction);
transaction.delete("/:id", authenticateJWT, deleteTransaction);

module.exports = transaction;