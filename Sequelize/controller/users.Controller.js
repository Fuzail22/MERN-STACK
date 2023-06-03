let Users = require("../model/Users");
async function getAllUsers() {
  let users = await Users.findAll(/*{
    where: {
      email: "dinakar@gmail.com",
    },
  }*/);
  console.log(JSON.stringify(users));
  // console.log(users);
}

getAllUsers();
