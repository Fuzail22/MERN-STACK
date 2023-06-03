function Car(brandName, variant, manufacturing) {
  this.brandName = brandName;
  this.variant = variant;
  this.manufacturing = manufacturing;
}

let altroz = new Car("Tata", "Petrol", 2021);
let swiftDezire = new Car("Maruti", "Deisel", 2019);

Car.prototype.details = function () {
  console.log(this.manufacturing);
};
let manufacturing = 2029;
function manufact() {
  console.log(this.manufacturing);
}
altroz.details();
manufact.call(swiftDezire);
manufact();
