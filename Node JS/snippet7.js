let obj1 = {};
let obj2 = new Object();
obj2.name = "suchen";
console.log(obj2);
let obj3 = Object.create(null);
obj1.name = "chinchan";

let obj4 = Object.create(obj1);
let obj5 = Object.create(obj4);
obj1.name = "ram";
console.log(obj1);
obj4.name = "fuz";
console.log(obj5.name);
console.log(obj5);
