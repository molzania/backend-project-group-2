const express = require('express')
const router = express.Router();
const authenticateJWT = require('../auth');
const { getAll, getById, addProduct, updateProductById, deleteProductById  } = require('../controllers/product.controller')

router.get('/', authenticateJWT, getAll)

router.get("/:id", getById);

router.post("/", addProduct);

router.put("/:id", updateProductById);

router.delete("/:id", deleteProductById);

module.exports = router;