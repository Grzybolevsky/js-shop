import express from 'express';
import {
    createPayment,
    deletePayment,
    getAllPayments,
    getPaymentsBy
} from "../controllers/payments.controller";

export const paymentsRouter = express.Router();

paymentsRouter.get('/', getAllPayments);

paymentsRouter.get('/:name', getPaymentsBy);

paymentsRouter.post('/', createPayment);

paymentsRouter.delete('/:name', deletePayment);