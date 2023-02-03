/* eslint-disable camelcase */
const fs = require("fs");
const path = require("path");
const db = require("../db/index");
const basename = path.basename(__filename);

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })

module.exports = db;
