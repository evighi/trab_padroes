*Padrões de Projeto - Factory Method e Builder*

*O que são Padrões de Projeto?*
Padrões de projeto são soluções reutilizáveis para problemas recorrentes no design de software. Eles ajudam a criar sistemas mais modulares, flexíveis e fáceis de manter.

*Padrão Builder*

O Builder é um padrão criacional que separa a construção de um objeto complexo de sua representação, permitindo que o mesmo processo de construção crie diferentes representações.
Esse padrão é ideal para cenários onde objetos possuem muitos parâmetros opcionais ou configurações complexas.

Código sem o Builder
No exemplo abaixo, a criação de um pedido de restaurante com múltiplos atributos resulta em um construtor extenso e de difícil manutenção.
``` ts
class Order {
  constructor(
    public appetizer: string,
    public mainCourse: string,
    public dessert: string,
    public drink: string
  ) {}
}

const order = new Order('Salada', 'Filé', 'Pudim', 'Refrigerante');

```
Código com o Builder
Com o Builder, encapsulamos cada etapa da construção do objeto em métodos específicos, tornando o processo mais flexível e legível.
``` ts 
class Order {
  public appetizer?: string;
  public mainCourse?: string;
  public dessert?: string;
  public drink?: string;
}

class OrderBuilder {
  private order: Order;

  constructor() {
    this.order = new Order();
  }

  setAppetizer(appetizer: string): OrderBuilder {
    this.order.appetizer = appetizer;
    return this;
  }

  setMainCourse(mainCourse: string): OrderBuilder {
    this.order.mainCourse = mainCourse;
    return this;
  }

  setDessert(dessert: string): OrderBuilder {
    this.order.dessert = dessert;
    return this;
  }

  setDrink(drink: string): OrderBuilder {
    this.order.drink = drink;
    return this;
  }

  build(): Order {
    return this.order;
  }
}

const order = new OrderBuilder()
  .setAppetizer('Salada')
  .setMainCourse('Filé')
  .setDessert('Pudim')
  .setDrink('Refrigerante')
  .build();
```
*Por que com Builder é melhor?*

Flexibilidade: Permite criar objetos com diferentes combinações de atributos.

Legibilidade: A construção do objeto é intuitiva e fácil de entender.

Reutilização: O processo de construção pode ser reaproveitado para diferentes configurações.

*Padrão Factory Method*
O Factory Method é um padrão criacional que fornece uma interface para criar objetos em uma superclasse, permitindo que as subclasses alterem o tipo de objetos que serão criados.

Este padrão promove o Princípio Aberto/Fechado, permitindo a extensão da lógica de criação sem modificar o código existente.

Código sem o Factory Method
No exemplo abaixo, o código de criação de veículos está diretamente acoplado à classe principal. Para cada tipo de veículo, uma lógica específica precisa ser implementada, dificultando a manutenção e a escalabilidade.
``` ts
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
```
Código com o Factory Method
Com o Factory Method, encapsulamos a lógica de criação em subclasses específicas, permitindo fácil extensão para novos tipos de veículos.
``` ts
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
 
  
```
*Por que com Factory Method é melhor?*
Extensibilidade: Novos tipos de veículos podem ser adicionados sem modificar o código existente.

Princípio Aberto/Fechado: A lógica de criação está encapsulada em classes independentes.

Reutilização: Cada classe de fábrica pode ser reutilizada em diferentes contextos.

*Conclusão*

Factory Method:
Ideal para situações em que há necessidade de criar famílias de objetos relacionados.
Simplifica a lógica de criação e promove a extensibilidade.

Builder:
Bom para construção de objetos complexos com muitas configurações opcionais.
Oferece um processo de construção intuitivo e modular.
Os dois padrões promovem boas práticas de design, como o respeito ao Princípio de Aberto/Fechado e a redução do acoplamento.
