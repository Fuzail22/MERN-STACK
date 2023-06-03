let Categories = require("../model/Category");
let sequelizeInstance = require("../connection");
const { Sequelize, Op } = require("sequelize");

async function createTable() {
  let status =
    await sequelizeInstance.sync(); /*by default-creates table if already doesn't exist, force:true-drops if already exists and creates the table,alter:true-checks the current status of the table and makes changes if any columns or its data types varies with the model  */
  console.log("Table Creation Successfull ");
}
async function InsertValues() {
  await Categories.create({
    name: "Mobile phone",
    description: "consist of mobiles",
  });
  console.log();
}
async function InsertManyValues() {
  await Categories.bulkCreate([
    {
      name: "laptop",
      description: "consist of Laptops",
    },
    {
      name: "Television",
      description: "consist of Televisions",
    },
    {
      name: "Utensil",
      description: "consist of Utensil",
    },
  ]);
  console.log("Bulk insertion successfull");
}

async function getAllCategories() {
  let allCat = await Categories.findAll();
  console.log(JSON.stringify(allCat, null, 1));
}

async function getSpecificCategories() {
  let result = await Categories.findAll({
    where: {
      //   id: {
      //     [Op.or]: [2, 5],
      //   },
      [Op.or]: [{ id: 2 }, { id: 5 }],
      //[Op.and]: [{ id: 2 }, { name: "laptop" }],
    },
  });
  console.log(JSON.stringify(result));
}
async function getCountOfEntries() {
  let count = await Categories.count({
    distinct: true,
    col: "id",
  });
  //let count=await Categories.findAll(attributes:[[Sequelize.fn('COUNT',Sequelize.col('id')),'num_category']])
  console.log(count);
}

//createTable();
//InsertValues();
//InsertManyValues();
getAllCategories();
//getCountOfEntries();
//getSpecificCategories();
