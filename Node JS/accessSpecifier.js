class Car {
  #finalprice = 2000; //private
  constructor(brandName, variant, manufacturing) {
    this.brandName = brandName;
    this.variant = variant;
    this.manufacturing = manufacturing;
  }
  showManufacturingYear() {
    console.log(this.manufacturing);
  }

  get price() {
    return this.#finalprice;
  }
  set price(p) {
    if (p < 1000) return;
    this.#finalprice = p * 0.9;
  }
}
//ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// class ElectricCar extends Car{
//     constructor(brandName, manufacturing) {
//         this.brandName = brandName;
//         this.manufacturing = manufacturing;
//         this.variant = "Electric";
//       }
// }
//therefore instead of above code
class ElectricCar extends Car {
  constructor(brandName, manufacturing) {
    super(brandName, "electric", manufacturing);
  }
}

let swiftDezire = new Car("Maruti", "Deisel", 2019);
let altroz = new Car("Tata", "petrol", "2021");
let tesla = new ElectricCar("modelY", 2024);
//console.log(altroz.finalprice);
console.log(altroz.price);
altroz.price = 1500;
console.log(altroz.price);
altroz.price = 900;
console.log(altroz.price);
console.log(tesla.price);
tesla.price = 1000;
console.log(tesla.price);
console.log(altroz.price);
console.log(swiftDezire.price);

//Method 2 for class creation
/*
  let Car= class{

  }
  let kia=new Car();
  console.log("kia" + kia )
  */
//eventhough no constructor is explicitly defined it creates default constructor for kia.
