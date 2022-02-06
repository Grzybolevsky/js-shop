import express from 'express';
import {createProduct, deleteProduct, getAllProducts, getProductBy} from "../controllers/products.controller";

export const productsRouter = express.Router();

productsRouter.get('/', getAllProducts);

productsRouter.get('/:name/:categoryName', getProductBy);

productsRouter.post('/', createProduct);

productsRouter.delete('/:name', deleteProduct);