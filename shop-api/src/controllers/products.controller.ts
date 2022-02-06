import {Request, Response} from 'express';
import {Product, ProductsService} from "../services/products.service";



export const getProducts = async (request: Request, response: Response) => {
    const products: Product[] = await ProductsService.getAllProducts();

    response.status(200).json(products);
};