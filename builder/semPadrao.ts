class Order {
  constructor(
    public appetizer: string,
    public mainCourse: string,
    public dessert: string,
    public drink: string
  ) {}
}

const order = new Order('Salada', 'Filé', 'Pudim', 'Refrigerante');
