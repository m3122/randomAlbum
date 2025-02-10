import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  namespace NodeJS {
    interface GlobalThis {
      _mongoClientPromise: Promise<MongoClient>;
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  if (!(globalThis as typeof globalThis & { _mongoClientPromise?: Promise<MongoClient> })._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (globalThis as typeof globalThis & { _mongoClientPromise?: Promise<MongoClient> })._mongoClientPromise = client.connect();
  }
  clientPromise = (globalThis as typeof globalThis & { _mongoClientPromise: Promise<MongoClient> })._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;