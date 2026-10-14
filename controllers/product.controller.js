import Product from "../models/product.model.js";

const createProduct = async (req, res) => {
  const data = req.body;
  const product = await Product.create(data);

  console.log("Product Data Created", data);

  res.json({
    message: "Create Product Successfully",
    data: product,
  });
};

const getProduct = async (req, res) => {
  const products = await Product.find();

  res.json({
    message: "Get All Products Successfully",
    data: products,
  });
};

const updateProductByPut = async (req, res) => {
  const product = await Product.findById(req.params.id);

  product.name = req.body.name;
  product.price = req.body.price;
  product.description = req.body.description;
  product.quantity = req.body.quantity;

  await product.save();

  res.json({
    message: "Update Product Successfully",
    data: product,
  });
};

const updateProductByPatch = async (req, res) => {
  const product = await Product.findById(req.params.id);

  // Update only the fields that are provided in the request body
  if (req.body.name !== undefined) product.name = req.body.name;
  if (req.body.price !== undefined) product.price = req.body.price;
  if (req.body.description !== undefined)
    product.description = req.body.description;
  if (req.body.quantity !== undefined) product.quantity = req.body.quantity;

  await product.save();

  res.json({
    message: "Update Product Successfully",
    data: product,
  });
};

const deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);

  res.json({
    message: "Delete Product Successfully",
  });
};

export default {
  createProduct,
  getProduct,
  updateProductByPut,
  updateProductByPatch,
  deleteProduct
};
