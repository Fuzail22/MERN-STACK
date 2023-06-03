/*
let newAvenger = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
let {realName, city} = newAvenger;

console.log(realName); // Tony Stark
console.log(city); // California
//console.log(heroName); // Iron Man



let {realName, city, heroName} = {realName: 'Tony Stark', city: 'California', heroName: 'Iron Man'};
console.log(realName); // Tony Stark
console.log(city); // California
console.log(heroName); // Iron Man
*/
let newAvenger = {
    realName: "Tony Stark", country: "USA", city: ["California", "Malibu"], heroName: "Iron Man"
   };
   let {realName, country, ...rests } = newAvenger;
   console.log(realName); // "Tony Stark"
   console.log(rests); // { city: [ 'California', 'Malibu' ], heroName: 'Iron Man' }