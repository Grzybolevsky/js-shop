#!/usr/bin/env node

import express from 'express';
import {port} from "./config/app.config";
import {getProducts} from "./src/controllers/products.controller";
import {getCategories} from "./src/controllers/categories.controller";
import {db_init} from "./db/db";


const app = express();


db_init().catch(console.error);

app.listen(port, () => {
    console.log(`shop-api is running on port ${port}.`);
});

app.get('/products', getProducts);
app.get('/categories', getCategories);
//app.get('/', )