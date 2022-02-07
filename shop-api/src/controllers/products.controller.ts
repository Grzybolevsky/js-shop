import {Request, Response} from 'express';
import {ProductModel} from "../models/product.model";


export const getAllProducts = async (request: Request, response: Response) => {
    console.log("/products/ GET" + request);
    try {
        const product = await ProductModel.find({});
        response.status(200).json(product);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
};

export const getProductBy = async (request: Request, response: Response) => {
    console.log("/products/:name GET" + request);
    try {
        const products = await ProductModel.find({
            name: request.params['name'],
            categoryName: request.params['categoryName']
        });
        response.status(200).json(products);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
};

export const createProduct = async (request: Request, response: Response) => {
    console.log("/products/:name POST" + request);
    const productModel = new ProductModel({
        name: request.body['name'],
        price: request.body['price'],
        imgUrl: request.body['imgUrl'],
        categoryName: request.body['categoryName']
    });

    try {
        const createdProduct = await productModel.save();
        response.status(201).json(createdProduct);
    } catch (error) {
        response.status(400).json({message: error.message})
    }
};

export const deleteProduct = async (request: Request, response: Response) => {
    console.log("/products/:name DELETE" + request);
    try {
        await ProductModel.remove({
            name: request.params['name'],
        });
        response.status(200);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
};