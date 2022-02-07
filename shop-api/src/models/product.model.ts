import {model, Schema} from "mongoose";


export interface Product {
    name: string,
    price: number,
    categoryName: string,
    imgUrl: string,
}

const schema = new Schema<Product>({
        name: {type: String, required: true},
        price: {type: Number, required: true},
        categoryName: {type: String, required: true},
        imgUrl: {type: String, default: '', required: false}
    }
);

export const ProductModel = model<Product>('Product', schema);