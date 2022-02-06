import {Category} from "./category.model";
import {model, Schema} from "mongoose";


export interface Product {
    name: string,
    price: number,
    imageUrl: string,
    category: Category
}

const schema = new Schema<Product>({
        name: {type: String, required: true},
        price: {type: Number, required: true},
        imageUrl: {type: String, default: ''},
        category: {required: true}
    }
);

export const ProductModel = model<Product>('Product', schema);