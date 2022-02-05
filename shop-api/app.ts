#!/usr/bin/env node

import express from 'express';
import {APP_PORT} from "./config/app.config";
import {getProducts} from "./src/controllers/products.controller";
import {getCategories} from "./src/controllers/categories.controller";
import {db_init} from "./db/db";


const app = express();


db_init().catch(console.error);

app.listen(APP_PORT, () => {
    console.log(`shop-api is running on port ${APP_PORT}.`);
});

app.get('/products', getProducts);
app.get('/categories', getCategories);
//app.get('/', )