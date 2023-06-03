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
  },
};
car.emergency();
let repairMan2 = {
  name: "Mannu",
  mob: 123,

  call: function () {
    console.log("calling mannu on 123");
  },
};

let technician2 = {
  call: function () {
    console.log("Dummy guy");
  },
};
let car2 = {
  name: "ferrari",
  model: 2019,
  fuelType: "petrol",
  technician: repairMan2,

  run: function () {
    console.log("Wroom wroom");
  },

  brake: function () {
    console.log("Stopping the car");
  },

  emergency: function () {
    technician.call();
  },
};
car2.emergency();

function call2() {
  console.log("Dummy outside function");
}

let car3 = {
  name: "ferrari",
  model: 2019,
  fuelType: "petrol",
  technician: repairMan2,

  run: function () {
    console.log("Wroom wroom");
  },

  brake: function () {
    console.log("Stopping the car");
  },

  emergency: function () {
    call2();
  },
};
car3.emergency();
