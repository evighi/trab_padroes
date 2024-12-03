class Vehicle {
  constructor(public name: string, public type: string) {}
}

class VehicleFactory {
  createVehicle(name: string, type: string): Vehicle {
    if (type === 'car') {
      return new Vehicle(name, 'car');
    } else if (type === 'motorcycle') {
      return new Vehicle(name, 'motorcycle');
    } else {
      throw new Error('Unknown vehicle type');
    }
  }
}

const factory = new VehicleFactory();
const car = factory.createVehicle('Car A', 'car');
const motorcycle = factory.createVehicle('Motorcycle B', 'motorcycle');
