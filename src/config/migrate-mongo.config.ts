import { mongoMigrateCli } from 'mongo-migrate-ts';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

mongoMigrateCli({
  uri: process.env.MONGO_URL,
  //   database: 'service',
  migrationsDir: __dirname + '/../migrations',
  migrationsCollection: 'migrations_collection',
});
