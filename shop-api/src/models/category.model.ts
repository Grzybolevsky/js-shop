import {model, Schema} from "mongoose";

export interface Category {
    name: string;
}

const schema = new Schema<Category>({
        name: {type: String, required: true}
    }
);

export const CategoryModel = model<Category>('Category', schema);