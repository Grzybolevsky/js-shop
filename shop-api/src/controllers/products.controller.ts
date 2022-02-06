import {Request, Response} from 'express';
import {ProductModel} from "../models/product.model";


export const getAllProducts = async (request: Request, response: Response) => {
    try {
        const product = await ProductModel.find();
        response.status(200).json(product);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
};

export const getProductBy = async (request: Request, response: Response) => {
    const {
        name, categoryName
    } = request.params;

    try {
        const products = await ProductModel.find({
            name: name,
            category: {name: categoryName}
        });
        response.status(200).json(products);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
};

export const createProduct = async (request: Request, response: Response) => {
    const productModel = new ProductModel({
        name: request.body.name,
        price: request.body.price,
        imageUrl: request.body.imageUrl,
        category: {name: request.body.category.name}
    });

    try {
        const createdProduct = await productModel.save();
        response.status(201).json(createdProduct);
    } catch (error) {
        response.status(400).json({message: error.message})
    }
};

export const deleteProduct = async (request: Request, response: Response) => {
    try {
        await ProductModel.remove({
            name: request.params['name'],
        });
        response.status(200);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
};