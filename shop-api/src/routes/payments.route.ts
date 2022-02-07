import express from 'express';
import {createPayment} from "../controllers/payments.controller";

export const paymentsRouter = express.Router();

paymentsRouter.post('/', createPayment);
