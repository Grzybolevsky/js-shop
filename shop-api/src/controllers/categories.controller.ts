import {Request, Response} from 'express';
import {Category, CategoryModel} from "../models/category.model";


export const getAllCategories = async (request: Request, response: Response) => {
    try {
        const categories = await CategoryModel.find();
        response.status(200).json(categories);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

export const getCategoryBy = async (request: Request, response: Response) => {
    try {
        const categories = await CategoryModel.find({
            name: request.params['name'],
        });
        response.status(200).json(categories);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}

export const createCategory = async (request: Request, response: Response) => {
    const categoryModel = new CategoryModel({name: request.body.name});

    try {
        const createdCategory = await categoryModel.save();
        response.status(201).json(createdCategory);
    } catch (error) {
        response.status(400).json({message: error.message})
    }
}

export const deleteCategory = async (request: Request, response: Response) => {
    try {
        await CategoryModel.remove({
            name: request.params['name'],
        });
        response.status(200);
    } catch (error) {
        response.status(500).json({message: error.message});
    }
}
