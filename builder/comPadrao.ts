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
