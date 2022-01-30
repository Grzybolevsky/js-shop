#!/usr/bin/env node

import express from 'express';
import {port} from "./src/configs/app.config";
import {getProducts} from "./src/services/products.service";
import {getCategories} from "./src/services/categories.service";


const app = express();


app.listen(port, () => {
    console.log(`shop-api is running on port ${port}.`);
});

app.get('/products', getProducts);
app.get('/categories', getCategories);