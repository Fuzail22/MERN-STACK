let inputArr = [
    { "name": "Shanghai", "population": 2430000 },
    { "name": "Los Angeles", "population": 372621 },
    { "name": "New Delhi", "population": 2180000 },
    { "name": "Mumbai", "population": 1840000 },
    { "name": "Chicago", "population": 265598 },
    { "name": "Houston", "population": 2100263 },
   ];
console.log(inputArr)   
let out=inputArr.filter(a=>a.population>=2000000)
console.log(out)