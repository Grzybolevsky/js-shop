import express from 'express';
import {createCategory, deleteCategory, getAllCategories, getCategoryBy} from "../controllers/categories.controller";

export const categoriesRouter = express.Router();

categoriesRouter.get('/', getAllCategories);

categoriesRouter.get('/:name', getCategoryBy);

categoriesRouter.post('/', createCategory);

categoriesRouter.delete('/:name', deleteCategory);