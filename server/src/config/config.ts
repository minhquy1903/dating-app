// import dotenv from 'dotenv';

// dotenv.config();

const PORT = process.env.PORT || 8000;
const HOSTNAME = process.env.HOST || 'localhost';

const MONGO_OPTION = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  autoIndex: true,
};

const MONGO_USERNAME = process.env.MONGO_USERNAME || '127.0.0.1:27017';
const MONGO_PASSWORD = process.env.MONGO_PASSWORD || '';
const DATABASE_NAME = process.env.DATABASE_NAME || '';
const MONGO_HOST = process.env.MONGO_URL || '';

const MONGO = {
  host: MONGO_HOST,
  username: MONGO_USERNAME,
  password: MONGO_PASSWORD,
  option: MONGO_OPTION,
  uri: `mongodb://${MONGO_USERNAME}/${DATABASE_NAME}`,
};

const SERVER = {
  hostname: HOSTNAME,
  port: PORT,
};

const config = {
  server: SERVER,
  mongodb: MONGO,
};

export default config;
