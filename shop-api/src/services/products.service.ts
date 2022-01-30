import {Request, Response} from 'express';
import {Category} from "./categories.service";

export interface Product {
    name: string,
    price: number,
    category: Category
}

export const getProducts = (request: Request, response: Response) => {
    const food: Category = {
        name: 'Food'
    }

    const cleaningProducts: Category = {
        name: 'Cleaning Products'
    }

    const products: Product[] = [
        {
            name: 'Bread',
            price: 4,
            category: food
        },
        {
            name: 'Butter',
            price: 7,
            category: food
        },
        {
            name: 'Soap',
            price: 3,
            category: cleaningProducts
        }
    ]

    response.status(200).json(products);
};