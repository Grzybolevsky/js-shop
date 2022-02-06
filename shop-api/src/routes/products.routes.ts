import express from 'express';
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getProductByName,
    updateProduct
} from "../controllers/products.controller";

export const productsRouter = express.Router();

productsRouter.get('/', getAllProducts);

productsRouter.get('/:name', getProductByName);

productsRouter.post('/', createProduct);

productsRouter.put('/:name', updateProduct);

productsRouter.delete('/:name', deleteProduct);