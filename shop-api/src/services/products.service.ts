import {getDbInstance} from "../../db/db";

export class ProductsService {
    static async getAllProducts() {
        return (await getDbInstance().collection('products').find({}).toArray()).map(value => {
            return {
                productId: value.productId,
                name: value.name,
                price: value.price,
                category: value.category,
                imageUrl: value.imageUrl
            }
        });
    }
}