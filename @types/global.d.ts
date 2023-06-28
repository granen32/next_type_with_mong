import type { MongoClient } from 'mongodb';

declare global {
  namespace globalThis {
    var _mongo: Promise<MongoClient>;
  }
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      NEXT_PUBLIC_MONGO_DB_URL: string;
    }
  }
}
