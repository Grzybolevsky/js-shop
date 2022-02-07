import {ListDatabasesResult, MongoClient} from 'mongodb';
import {readFile} from './file_reader';
import {INITIAL_STORAGE_LOCATION, MONGODB_URI} from '../app.config';


const collectionFiles = ['categories.json', 'products.json'];
const client = new MongoClient(MONGODB_URI);

async function resetMongo(client: MongoClient) {
    const databasesList: ListDatabasesResult = await client.db().admin().listDatabases();

    databasesList.databases.filter(db => db.name !== 'admin').forEach(db => client.db(db.name).dropDatabase());
}

async function fillCollectionsWithInitialValues(client: MongoClient) {
    await client.db('shop');
    collectionFiles.forEach(fileName => {
        const json = readFile(INITIAL_STORAGE_LOCATION + fileName);
        const values: [] = json['values'];
        const collection: string = json['collection'];

        Promise.all(values.map(product => {
            client.db('shop').collection(collection).insertOne(product);
        }));
    });
}


export async function db_init() {
    try {
        await client.connect();
        await resetMongo(client);
        await fillCollectionsWithInitialValues(client);
    } catch (e) {
        console.log("Cannot connect to DB on uri:" + MONGODB_URI);
        console.log("Ensure that mongoDB instance is running on uri above and restart app.");
    }
}