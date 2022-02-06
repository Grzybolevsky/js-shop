#!/usr/bin/env node

import express from 'express';
import cors from 'cors';
import {APP_PORT} from "./config/app.config";
import {db_init} from "./db/db";
import {categoriesRouter} from "./src/routes/categories.routes";
import {productsRouter} from "./src/routes/products.routes";
import {paymentsRouter} from "./src/routes/payments.routes";


const app = express();

db_init().then(r => {
    console.log("DB initialized successfully.");
}).catch(reason => {
    console.log("DB failed: " + reason);
});

app.use(cors());

app.get('/', () => {
    return 'Welcome to shop-api.';
});
app.get('/categories', categoriesRouter);
app.get('/payments', paymentsRouter);
app.get('/products', productsRouter);

app.listen(APP_PORT, () => {
    console.log(`shop-api is running on port ${APP_PORT}.`);
});