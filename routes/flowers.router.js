const express = require("express");
const flower = express.Router();
const authenticateJWT = require("../auth");

const { getAll, getById, addFlower, updateFlower, deleteFlower } = require("../controllers/flowers.controller");

flower.get("/", getAll);
flower.get("/:id", authenticateJWT, getById);
flower.post("/", authenticateJWT, addFlower);
flower.put("/:id", authenticateJWT, updateFlower);
flower.delete("/:id", authenticateJWT, deleteFlower);

module.exports = flower;