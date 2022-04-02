const express = require('express')
const router = express.Router();
<<<<<<< HEAD
const authenticateJWT = require('../auth');
=======
const authenticateJWT = require('../auth')
>>>>>>> 5c9e5dac6b9da914100d8ca9d454bcf3a51e9473
const { getAll, getById, addProduct, updateProductById, deleteProductById  } = require('../controllers/product.controller')

router.get('/', authenticateJWT, getAll)

router.get("/:id", getById);

router.post("/", authenticateJWT, addProduct);

router.put("/:id", authenticateJWT, updateProductById);

router.delete("/:id", authenticateJWT, deleteProductById);

module.exports = router;