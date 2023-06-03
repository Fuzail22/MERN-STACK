let sequelize = require("sequelize");
let sequelizeInstance = require("../connection");

let Categories = sequelizeInstance.define("categories", {
  id: {
    type: sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Categories;
