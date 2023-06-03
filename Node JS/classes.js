class Car {
  constructor(brandName, variant, manufacturing) {
    this.brandName = brandName;
    this.variant = variant;
    this.manufacturing = manufacturing;
  }
  showManufacturingYear() {
    console.log(this.manufacturing);
  }
}

let swiftDezire = new Car("Maruti", "Deisel", 2019);
let altroz = new Car("Tata", "petrol", "2021");
function printObject(obj) {
  for (prop in obj) {
    console.log(obj[prop]);
  }
}

printObject(altroz);
swiftDezire.showManufacturingYear();
