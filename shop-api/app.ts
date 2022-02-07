#!/usr/bin/env node

import express from 'express';
import cors from 'cors';
import {APP_PORT, MONGODB_URI} from "./app.config";
import {categoriesRouter} from "./src/routes/categories.route";
import {productsRouter} from "./src/routes/products.route";
import {paymentsRouter} from "./src/routes/payments.route";
import {connect, connection} from "mongoose";
import {db_init} from "./db/db";
import {Request, Response} from 'express';

connect(MONGODB_URI, {dbName: 'shop'}, () => {
    console.log('Connected to DB on ' + MONGODB_URI);
});

connection.on('error', (err) => {
    console.log('DB error:' + err);
})

const app = express();

// USE ONLY FIRST TIME - TO FILL DB WITH INITIAL (EXAMPLE) VALUES
db_init()
    .then(_ => console.log("DB initialized successfully."))
    .catch(reason => console.log("DB failed: " + reason));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', async (request: Request, response: Response) => {
    response.status(200).json({message:'Welcome to shop-api.'});
});
app.use('/categories', categoriesRouter);
app.use('/payments', paymentsRouter);
app.use('/products', productsRouter);

app.listen(APP_PORT, () => {
    console.log(`shop-api is running on port ${APP_PORT}.`);
});