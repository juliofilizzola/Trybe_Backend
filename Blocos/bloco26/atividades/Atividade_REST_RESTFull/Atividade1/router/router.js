const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

const {
  getAllProducts,
  getProductID,
  addNewProduct,
  deleteProduct,
  updateProduct
} = require('../controllers/productController');

router.get('/list-products', getAllProducts);
router.get('/list-products/:id', getProductID);
router.post('/list-products', addNewProduct);
router.delete('/list-products/:id', deleteProduct);
router.put('/list-products/:id', updateProduct);

module.exports = router;
