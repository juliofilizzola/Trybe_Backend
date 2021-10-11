const ProductModel = require('../models/productModel');
const { verificationResponse, verificationReturnResponse, verificationRequest } = require('../middleware/verification');
const { statusPositivos, statusNegativos } = require('../dataStatus.json');

const messageAdd = 'Name e Brand tem que ser enviado e não podem ser menor do que 4 caracteres cada'

const getAllProducts = async (req, res) => {

  const products = await ProductModel.getAll();

  if(verificationResponse(products)) {
    res.status(statusNegativos.status400).json({ message: 'Request erro1524r'});
  };
  if(verificationReturnResponse(products)) {
    res.status(statusPositivos.status204).json({ message: 'successful request, but no return'});
  };
  res.status(statusPositivos.status200).send(products);

};

const getProductID = async (req, res) => {
  const { id } = req.params;
  const products = await ProductModel.getById(id);
  if(verificationResponse(products)) {
    return res.status(statusNegativos.status400).json({ message: 'Request error'});

  };
  if(verificationReturnResponse(products)) {

    return res.status(statusPositivos.status204).json({ message: 'successful request, but no return'});
  };

  res.status(statusPositivos.status200).send(products);

};

const addNewProduct = async (req, res) => {
  const { name, brand } = req.body;
  if(verificationRequest(name, brand)) {
    return res.status(statusNegativos.status406).json({ message: messageAdd });
  }
  await ProductModel.add(name, brand);
  res.status(statusPositivos.status200).json({ message: "product add successful"});
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const products = await ProductModel.exclude(id);
  if(verificationResponse(products)) {
    res.status(statusNegativos.status400).json({ message: 'Request error'});
  };
  if(verificationReturnResponse(products)) {
    res.status(statusPositivos.status204).json({ message: 'successful request, but no return'});
  };

  res.status(statusPositivos.status200).json({ message: 'product deleted successfully'});
};

const updateProduct = async (req, res) => {
  const { name, brand } = req.body;
  const { id } = req.params;
  if(verificationRequest(name, brand)) {
    return res.status(statusNegativos.status406).json({ message: messageAdd })
  }
  await ProductModel.update(id, name, brand);
  res.status(statusPositivos.status200).json({ message: 'product updated successfully'});
};

module.exports = {
  getAllProducts,
  getProductID,
  addNewProduct,
  deleteProduct,
  updateProduct
}
