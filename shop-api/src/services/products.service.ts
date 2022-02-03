import {getDbInstance} from "../../db/db";
import {Category} from "./categories.service";

export interface Product {
    productId: string,
    name: string,
    price: number,
    category: Category
}

export class ProductsService {
    static async getAllProducts() {
        return (await getDbInstance().collection('products').find({}).toArray()).map(value => {
            return {
                productId: value.productId,
                name: value.name,
                price: value.price,
                category: value.category
            }
        });
    }
}