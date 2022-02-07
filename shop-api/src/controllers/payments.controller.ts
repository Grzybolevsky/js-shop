import {Request, Response} from 'express';


export const createPayment = async (request: Request, response: Response) => {
    console.log("/payments/ POST" + request);
    try {
        await new Promise(resolve => setTimeout(resolve, 3000));
        response.status(201).json({message: "Payment Processed"})
    } catch (error) {
        response.status(500).json({message: error.message})
    }
}
