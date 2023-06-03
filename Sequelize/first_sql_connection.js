let mysql = require("mysql");

let db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "#PerExcellent#",
  database: "ecommerce", //optional then wihout mentioning db it will connect to the instance
});

db.connect((err) => {
  if (err) throw new Error(err);
  console.log("Connection successful");
  db.query(
    "select * from products /*where category='laptop'*/",
    (err, data) => {
      if (err) throw /*new Error*/ err;
      console.log(JSON.stringify(data));
      // console.log(data);
    }
  );
  db.end();
});
