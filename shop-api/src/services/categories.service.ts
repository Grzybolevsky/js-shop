import {Request, Response} from 'express';

export interface Category {
    name: string;
}


export const getCategories = (request: Request, response: Response) => {
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
