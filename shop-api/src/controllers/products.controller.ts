import {Request, Response} from 'express';
import { ProductsService} from "../services/products.service";
import {Product} from "../models/product.model";



export const getAllProducts = async (request: Request, response: Response) => {
    const products: Product[] = await ProductsService.getAllProducts();

    response.status(200).json(products);
};

export const getProductByName = async (request: Request, response: Response) => {
    const products: Product[] = await ProductsService.getAllProducts();

    response.status(200).json(products);
};

export const getProductByCategory = async (request: Request, response: Response) => {
    const products: Product[] = await ProductsService.getAllProducts();

    response.status(200).json(products);
};

export const createProduct = async (request: Request, response: Response) => {
    const products: Product[] = await ProductsService.getAllProducts();

    response.status(200).json(products);
};

export const updateProduct = async (request: Request, response: Response) => {
    const products: Product[] = await ProductsService.getAllProducts();

    response.status(200).json(products);
};

export const deleteProduct = async (request: Request, response: Response) => {
    const products: Product[] = await ProductsService.getAllProducts();

    response.status(200).json(products);
};