abstract class Vehicle {
  constructor(public name: string) {}
}

class Car extends Vehicle {}
class Motorcycle extends Vehicle {}

abstract class VehicleFactory {
  abstract createVehicle(name: string): Vehicle;
}

class CarFactory extends VehicleFactory {
  createVehicle(name: string): Vehicle {
    return new Car(name);
  }
}

class MotorcycleFactory extends VehicleFactory {
  createVehicle(name: string): Vehicle {
    return new Motorcycle(name);
  }
}

const carFactory = new CarFactory();
const motorcycleFactory = new MotorcycleFactory();

const car = carFactory.createVehicle('Car A');
const motorcycle = motorcycleFactory.createVehicle('Motorcycle B');
 
  
