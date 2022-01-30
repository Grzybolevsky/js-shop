#!/usr/bin/env node

import express, { Request, Response, NextFunction } from 'express';

const app = express();
const port = 8080;

interface Product {
    name: string;
    price: number;
    category: Category;
}

interface Category {
    name: string;
}

const getProducts = (request: Request, response: Response) => {
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

const getCategories = (request: Request, response: Response) => {
    const categories: Category[] = [
        {
            name: 'Food'
        },
        {
            name: 'Cleaning Products'
        }
    ]

    response.status(200).json(categories);
}

app.listen(port, () => {
    console.log(`shop-api is running on port ${port}.`);
});

app.get('/products', getProducts);
app.get('/categories', getCategories);