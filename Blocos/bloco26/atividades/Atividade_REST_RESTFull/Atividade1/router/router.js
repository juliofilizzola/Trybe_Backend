const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.router();

router.get('/list-products');
router.get('/get-by-id/:id');
router.post('/add-user');
router.post('/delete-user/:id');
router.post('/update-user/:id');

module.exports = router;
