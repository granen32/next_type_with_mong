import { MongoClient } from 'mongodb';
const MONGGO_DATA_URL = process.env.NEXT_PUBLIC_MONGO_DB_URL;
let connectDB;
if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(MONGGO_DATA_URL).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(MONGGO_DATA_URL).connect();
}
export { connectDB };
