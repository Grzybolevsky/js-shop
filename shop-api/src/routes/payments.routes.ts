import express from 'express';
import {
    createPayment,
    deletePayment,
    getAllPayments,
    getPaymentById,
    updatePayment
} from "../controllers/payments.controller";

export const paymentsRouter = express.Router();

paymentsRouter.get('/', getAllPayments);

paymentsRouter.get('/:id', getPaymentById);

paymentsRouter.post('/', createPayment);

paymentsRouter.put('/:id', updatePayment);

paymentsRouter.delete('/:id', deletePayment);