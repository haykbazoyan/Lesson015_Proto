let isFly = {
  isFlying: false,

  takeOff: function () {
    this.isFlying = true;
  },
  land: function () {
    this.isFlying = false;
  },
};

let airBus = Object.create(isFly);
let j7 = Object.create(isFly);
let boing = Object.create(isFly);
let airArmenia = Object.create(isFly);

airBus.takeOff();
console.log(airBus.isFlying);
airBus.land();
console.log(airBus.isFlying);
console.log(airBus);
