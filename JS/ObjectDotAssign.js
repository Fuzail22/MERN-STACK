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
let person2=person;  
let dupperson=Object.assign({},person)
dupperson.name="fu"
console.log(Object.entries(person))
console.log(Object.entries(person2))
console.log(Object.entries(dupperson))
