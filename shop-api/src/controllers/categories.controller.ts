import {Request, Response} from 'express';
import {CategoriesService} from "../services/categories.service";
import {Category} from "../models/category.model";


export const getAllCategories = async (request: Request, response: Response) => {
    const categories: Category[] = await CategoriesService.getAllCategories();

    response.status(200).json(categories);
}

export const getCategoryById = async (request: Request, response: Response) => {
    const categories: Category[] = await CategoriesService.getAllCategories();

    response.status(200).json(categories);
}

export const createCategory = async (request: Request, response: Response) => {
    const categories: Category[] = await CategoriesService.getAllCategories();

    response.status(200).json(categories);
}

export const updateCategory = async (request: Request, response: Response) => {
    const categories: Category[] = await CategoriesService.getAllCategories();

    response.status(200).json(categories);
}

export const deleteCategory = async (request: Request, response: Response) => {
    const categories: Category[] = await CategoriesService.getAllCategories();

    response.status(200).json(categories);
}
