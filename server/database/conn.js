import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import { MongoMemoryServer } from "mongodb-memory-server";

async function connect() {
  const mongod = await MongoMemoryServer.create();
  const getUri = mongod.getUri();

  mongoose.set("strictQuery", true);
  // const db = await mongoose.connect(getUri);
  const db = await mongoose.connect(process.env.MONGO_URI);
  console.log("Database Connected");
  return db;
}

export default connect;
