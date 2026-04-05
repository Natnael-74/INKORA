import mongoose from "mongoose";

const MONGODB_URI = process.env.LOCAL_MONGO_DB_URL;

if (!MONGODB_URI) {
  throw new Error("Please define LOCAL_MONGO_DB_URL !");
}

/*** Global cache (IMPORTANT in Next.js) */

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  // If already connected → reuse
  if (cached.conn) return cached.conn;

  // If connection is in progress → wait
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
