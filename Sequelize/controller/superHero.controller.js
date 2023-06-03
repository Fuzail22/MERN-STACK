const { Sequelize, Op } = require("sequelize");
//const { UPDATE } = require("sequelize/types/query-types");
const sequelizeInstance = require("../connection");
const Superhero = require("../model/superHero");

async function createTable() {
  await sequelizeInstance.sync({
    force: true,
  }); /*this sync function is executed for the specific table based on the model imported */
  console.log("Table created");
}

async function InsertValues() {
  await Superhero.create({
    id: 1,
    name: "iron man",
    power: 78,
    comics: "marvel",
  });
  console.log("created");
}
async function InsertManyValues() {
  await Superhero.bulkCreate([
    {
      name: "Batman",
      power: 65,
      comics: "DC",
    },
    {
      name: "Superman",
      power: 90,
      comics: "DC",
    },
    {
      name: "Wanda",
      power: 100,
      comics: "Marvel",
    },
    {
      name: "Commando Dhruv",
      power: 65,
      comics: "Raj Comics",
    },
  ]);
}
async function getSpecificattributes() {
  let result = await Superhero.findAll({
    attributes: ["id", ["name", "he is"] /*alias*/],
  });
  console.log(JSON.stringify(result, null, 1));
}
async function getCount() {
  let result = await Superhero.findAll({
    attributes: [[Sequelize.fn("count", Sequelize.col("id")), "couunt of ids"]],
  });
  console.log(JSON.stringify(result, null, 1));
}

async function getSum() {
  let result = await Superhero.findAll({
    attributes: [
      [Sequelize.fn("sum", Sequelize.col("power")), "sum of powers"],
    ],
  });
  console.log(JSON.stringify(result, null, 1));
}
async function converToUpper() {
  let result = await Superhero.findAll({
    attributes: [
      [Sequelize.fn("Upper", Sequelize.col("name")), "capitalized names"],
    ],
  });
  console.log(JSON.stringify(result, null, 1));
}
async function excludeColumns() {
  let result = await Superhero.findAll({
    attributes: { exclude: ["id", "power"] },
  });
  console.log(JSON.stringify(result, null, 1));
}
async function getPowerfulSuperHero() {
  let result = await Superhero.findAll({
    where: {
      power: {
        [Op.gte]: 90,
      },
    },
  });
  console.log(JSON.stringify(result, null, 1));
}
async function getPowerfulSuperHeroFromMarvel() {
  let result = await Superhero.findAll({
    where: {
      power: {
        [Op.gte]: 90,
      },
      comics: {
        [Op.eq]: "marvel",
      },
    },
  });
  console.log(JSON.stringify(result, null, 1));
}
async function getPowerfulOrMarvelSuperHero() {
  let result = await Superhero.findAll({
    where: {
      [Op.or]: {
        power: {
          [Op.gte]: 90,
        },
        comics: {
          [Op.eq]: "marvel",
        },
      },
    },
  });
  console.log(JSON.stringify(result, null, 1));
}
async function updatePower() {
  await Superhero.update(
    { power: 70 },
    {
      where: {
        comics: "Raj Comics",
      },
    }
  );
}
async function deleteRows() {
  await Superhero.destroy({
    where: {
      comics: "Raj Comics",
    },
  });
}
async function groupHeroes() {
  let group = await Superhero.findAll({
    attributes: [
      "comics",
      [Sequelize.fn("count", Sequelize.col("comics")), "total comics"],
    ],

    group: "comics",
  });
  console.log(JSON.stringify(group, null, 1));
}
async function orderHeroes() {
  let order = await Superhero.findAll({
    order: [[["power", "DESC"]]],
    // order: ["power"],
  });
  console.log(JSON.stringify(order, null, 1));
}
//createTable();
//InsertValues();
//InsertManyValues();
//getSpecificattributes();
//getCount
//getSum();
//converToUpper();
//excludeColumns();
//getPowerfulSuperHero();
//getPowerfulSuperHeroFromMarvel();
//getPowerfulOrMarvelSuperHero();
//updatePower();
//deleteRows();
//groupHeroes();
orderHeroes();
