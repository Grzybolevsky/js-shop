import {Request, Response} from 'express';
import {CategoriesService, Category} from "../services/categories.service";


export const getCategories = async (request: Request, response: Response) => {
    const categories: Category[] = await CategoriesService.getAllCategories();

    response.status(200).json(categories);
}
