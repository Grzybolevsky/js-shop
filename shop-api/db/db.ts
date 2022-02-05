import {ListDatabasesResult, MongoClient} from 'mongodb';
import {readFile} from './file_reader';
import {MONGODB_URI} from '../config/app.config';


const initialStorageLocation = './initial_storage/';
const collectionFiles = ['categories.json', 'products.json'];
const client = new MongoClient(MONGODB_URI);

async function resetMongo(client: MongoClient) {
    // console.log('DROPPING DATABASES');
    const databasesList: ListDatabasesResult = await client.db().admin().listDatabases();

    databasesList.databases.filter(db => db.name !== 'admin').forEach(db => client.db(db.name).dropDatabase());
}

async function createCollections(client: MongoClient) {
    // console.log('CREATING COLLECTIONS FOR DB: shop');
    await client.db('shop').createCollection('products');
    await client.db('shop').createCollection('categories');
}

async function fillCollectionsWithInitialValues(client: MongoClient) {
    // console.log('FILLING DB WITH INITIAL VALUES');
    collectionFiles.forEach(fileName => {
        const json = readFile(initialStorageLocation + fileName);
        const values: [] = json['values'];
        const collection: string = json['collection'];

        Promise.all(values.map(product => {
            client.db('shop').collection(collection).insertOne(product);
        }));
    });
}

async function createIndices(client: MongoClient) {
    await client.db().collection('categories').createIndex('categoryId');
    await client.db().collection('products').createIndex('productId');
}

async function listDatabases(client: MongoClient) {
    const databasesList = await client.db().admin().listDatabases();

    console.log('LISTING DATABASES:');
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
}

export async function db_init() {
    try {
        await client.connect();
        await resetMongo(client);
        await createCollections(client);
        await fillCollectionsWithInitialValues(client);
        await createIndices(client);
        // await listDatabases(client);
    } catch (e) {
        console.log("Cannot connect to DB on uri:" + MONGODB_URI);
        console.log("Ensure that mongoDB instance is running on uri above and restart app.");
        // console.error(e);
    }
}

export function getDbInstance() {
    return client.db('shop');
}

export async function db_close() {
    await client.close();
}