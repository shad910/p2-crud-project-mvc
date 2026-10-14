import { Router } from "express";
import productController from '../controllers/product.controller.js'

const route = Router();

route.post('/product/create', productController.createProduct)
route.get('/product', productController.createProduct)
route.put('/product/:id', productController.createProduct)
route.patch('/product/:id', productController.createProduct)
route.delete('/product/:id', productController.createProduct)

export default route;