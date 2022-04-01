const express = require("express");
const router = express.Router();

const { getAll, getByID, addUser, Login } = require("../controllers/user.controller");

router.get("/", getAll);
router.get("/:id", getByID);
router.post("/", addUser);
router.post("/login", Login);

module.exports = router;
