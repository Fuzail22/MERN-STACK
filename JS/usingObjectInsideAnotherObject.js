/*let a=[1,2,3,4,5];
for(let per of a)
{
  console.log(per)


}
*/

let person = {
  name: 'Shirhaan',
  favFruits: ['🍒','🍐','🍏'],
  hobbies: ['🛴','🚒','🚣‍♀️','🚴‍♂️'],
  address: {
      street: "B.V Road",
      lane: "Vaslane",
      mobileNums: ['1234','4567','897'],
  }

};

/*
for(let per in person)
{
  console.log(person[per])


}
for(let per in person)
{
  console.log(per+":"+person[per])


}

//console.log(person.address.mobileNums[0])
let repairMan = {
  name: "Mannu",
  mob: 123,

  call: function () {
    console.log("calling mannu on 123");
  },
};

let technician = {
  call: function () {
    console.log("Dummy guy");
  },
};

let car = {
  name: "ferrari",
  model: 2019,
  fuelType: "petrol",
  technician: repairMan,

  run: function () {
    console.log("Wroom wroom");
  },

  brake: function () {
    console.log("Stopping the car");
  },

  emergency: function () {
    this.technician.call();
    //car.technician.call();
  },
};
//global type  
console.log(Object.keys(car));

console.log(Object.keys(car)[2]);

console.log(car[Object.keys(car)[2]]);

console.log(Object.entries(car));
*/