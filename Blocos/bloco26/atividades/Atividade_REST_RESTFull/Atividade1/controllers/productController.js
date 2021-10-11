const ProductModel = require('../models/productModel');
const { statusPositivos, statusNegativos } = require('../dataStatus.json');

const getAllProducts = async (req, res) => {

  const products = await ProductModel.getAll();

  res.status(statusPositivos.status200).send(products);

};

const getProductID = async (req, res) => {
  const { id } = req.params;
  const products = await ProductModel.getById(id);

  res.send(products);
};

const addNewProduct = async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductModel.add(name, brand);

  res.send(newProduct);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const products = await ProductModel.exclude(id);
  res.send(products);
};

const updateProduct = async (req, res) => {
  const { name, brand } = req.body;
  const { id } = req.params;
  const products = await ProductModel.update(id, name, brand);

  res.send(products);
};

module.exports = {
  getAllProducts,
  getProductID,
  addNewProduct,
  deleteProduct,
  updateProduct
}
