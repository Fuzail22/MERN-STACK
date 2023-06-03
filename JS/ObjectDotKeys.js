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
let keys=Object.keys(person)
console.log(keys)
console.log(Object.keys(person)[2]);
keys.forEach((key)=>{
    console.log(person[key])
})
keys.forEach((ke,index)=>{
    console.log(person[ke])
})