import express from 'express';
import {
    createCategory,
    deleteCategory,
    getAllCategories,
    getCategoryById,
    updateCategory
} from "../controllers/categories.controller";

export const categoriesRouter = express.Router();

categoriesRouter.get('/', getAllCategories);

categoriesRouter.get('/:name', getCategoryById);

categoriesRouter.post('/', createCategory);

categoriesRouter.put('/:name', updateCategory);

categoriesRouter.delete('/:name', deleteCategory);