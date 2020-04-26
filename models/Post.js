// tell mongoose where to fetch the database credentials from
const databaseConfig = require("../config/db.config");
 
const mongoose = require('mongoose');

const dbConfig = {};
dbConfig.mongoose = mongoose;
dbConfig.url = databaseConfig.url;
dbConfig.PostSchema = require("./model.js")(mongoose);

module.exports = dbConfig;
