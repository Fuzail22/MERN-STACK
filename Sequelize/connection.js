let sequelize = require("sequelize");
let sequelizeInstance = new sequelize(
  "ecommerce", //dbName
  "root", //usrname
  "#PerExcellent#", //paswword
  {
    host: "localhost",
    dialect: "mysql",
    operationAliases: false, //not used due to security concerns
    /*pool is for min-max  connections, no of active connections,wait time for query exectuion is "acquire",the db goes idle after "idle" time */
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = sequelizeInstance;
