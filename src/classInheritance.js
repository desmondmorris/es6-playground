'use strict';

class Vehicle {
  constructor(make = '') {
    this.make = make;
    this.wheels = 0;
    this.seats = 0;
    this.type = 'vehicle';
  }
};

class Car extends Vehicle {
  constructor(make = '') {
    super(make);

    this.wheels = 4;
    this.seats = 4;
    this.type = 'Car';
  }
};

class Suv extends Car {
  constructor(make = '') {
    super(make);

    this.wheels = 4;
    this.seats = 6;
    this.type = 'Suv';
  }
};


let prius = new Car('Toyota');

console.log(prius);


let expedition = new Suv('Ford');

console.log(expedition);
