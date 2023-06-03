const sequelize = require("sequelize");
const sequelizeInstance = require("../connection");

let SuperHero = sequelizeInstance.define(
  "Superhero",
  {
    id: {
      type: sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    power: sequelize.BIGINT,
    comics: sequelize.STRING,
  },
  {
    timestamps: false,
  }
);
module.exports = SuperHero;
