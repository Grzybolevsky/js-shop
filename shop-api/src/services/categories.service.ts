import {getDbInstance} from "../../db/db";



export class CategoriesService {
    static async getAllCategories() {
        return (await getDbInstance().collection('categories').find({}).toArray()).map(value => {
            return {
                categoryId: value.categoryId,
                name: value.name
            }
        });
    }
}