let sequelizeInstance = require("./../connection");
let Captain = require("./Captain");
let Ship = require("./Ships");
let sequelize = require("sequelize");
/*below association is necessary whenver depenent functions are used like awesomeCaptain.getShip() */
Captain.hasOne(Ship);
Ship.belongsTo(Captain);

async function LoadModel() {
  await sequelizeInstance.sync();
  const awesomeCaptain = await Captain.findOne({
    where: {
      name: "Jack Sparrow",
    },
  });
  // Do stuff with the fetched captain
  console.log("Name:", awesomeCaptain.name);
  console.log("Skill Level:", awesomeCaptain.skillLevel);
  // Now we want information about his ship!
  const hisShip = await awesomeCaptain.getShip();
  // Do stuff with the ship
  console.log(
    "Ship Name:",
    hisShip.name /*if captain and ship had one to many relationship then get ship woul have returned a array of objects which can be accesses as  hisShip[0].name,hisShip[1].name..,*/
  );
  console.log("Amount of Sails:", hisShip.amountOfSails);
}

LoadModel();
