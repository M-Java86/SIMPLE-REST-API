'use strict';

const Sequelize = require('sequelize');

const config = {
  username: 'root',
  password: 'Nike1986@',
  database: 'quotum_class',
  host: '127.0.0.1',
  dialect: 'mysql',
};
const db = {};
config.logging = console.log;

const sequelize = new Sequelize(config);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
