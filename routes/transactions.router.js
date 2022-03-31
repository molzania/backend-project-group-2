const express = require("express");
const transaction = express.Router();

const { getAll, getById, addTransaction, updateTransaction, deleteTransaction } = require("../controllers/transactions.controller");

transaction.get("/", getAll);
transaction.get("/:id", getById);
transaction.post("/", addTransaction);
transaction.put("/:id", updateTransaction);
transaction.delete("/:id", deleteTransaction);

module.exports = transaction;