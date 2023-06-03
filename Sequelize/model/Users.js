let sequelize = require("sequelize");
let sequelizeInstance = require("./../connection" /*(or) ../connection*/);
let Users = sequelizeInstance.define(
  "user" /*name of my model 1.e table name in db it plularises this model name by default while quering*/,
  {
    id: {
      type: sequelize.DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: sequelize.DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: sequelize.DataTypes.DATE,
    },
  },
  {
    /*sequelize by default assumes/creates columns id(auto_incremental),createdAt,updatesAt by default to avoid it we falsify timestamps as we don't have updateAt column in out user table*/
    timestamps: false,
  } /*definition of model */
);

module.exports = Users;
