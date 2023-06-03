let Ship = require("./Ships");
let Captain = require("./Captain");
let sequelizeInstance = require("./../connection");
const sequelize = require("sequelize");

Captain.hasOne(Ship);
Ship.belongsTo(Captain);

async function createTable() {
  let status =
    await sequelizeInstance.sync(); /*by default-creates table if already doesn't exist, force:true-drops if already exists and creates the table,alter:true-checks the current status of the table and makes changes if any columns or its data types varies with the model  */
  console.log("Table Creation Successfull ");
}
async function insertData() {
  let ship = await Ship.create({
    name: "Black Pearl",
    crewCapacity: 1000,
    amountOfSails: 50,
  });
  /*createShip createCaptain getShip getCaptain deleteShip deleteCaptain  are provide by ORM associations*/
  ship.createCaptain({ name: "Jack Sparrow", skillLevel: 1 });
}

//createTable();
insertData();
