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

Object.freeze(person)
console.log(Object.entries(person));
person['name']="fu"
delete person.name

console.log(Object.entries(person));
