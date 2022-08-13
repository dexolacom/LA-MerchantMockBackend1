// @ts-nocheck
import { Sequelize } from 'sequelize';
import { currentDB } from '../constants';
import User from '../models/User';
import { URI } from '../constants';

let db = {};
const uri = URI;

// Localhost
export const sequelizeLocalhost = new Sequelize({
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST || 'localhost',
  port: 5432,
  dialect: 'postgres',
  query: {
    raw: true,
  },
  define: {
    freezeTableName: true,
  },
  pool: {
    max: 20,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
});

// Heroku
const sequelizeHeroku = new Sequelize(uri, {
  query: {
    raw: true,
  },
  define: {
    freezeTableName: true,
  },
  pool: {
    max: 20,
    min: 0,
    acquire: 60000,
    idle: 10000,
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

export const sequelize =
  currentDB === 'localhost'
    ? sequelizeLocalhost
    : currentDB === 'heroku' && sequelizeHeroku;

const Models = [User];

Models.forEach(model => {
  const seqModel = model(sequelize);
  db[seqModel.name] = seqModel;
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
// ***
