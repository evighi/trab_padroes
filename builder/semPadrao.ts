class House {
    constructor(
      public windows: number,
      public doors: number,
      public hasGarage: boolean
    ) {}
  }
  
  const house = new House(4, 1, false);
  console.log("Without Builder:", house); 
  