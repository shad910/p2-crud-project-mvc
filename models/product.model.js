import mongoose from "mongoose";
import productController from '../controllers/product.controller.js'

// SCHEMA
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  quantity: Number
});

// MODEL
const Product = mongoose.model('Product', productSchema);

export default Product;

