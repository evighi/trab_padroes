abstract class FabricaDeCarro {
    abstract criarCarro(): Carro;
  }
  
  class FabricaDeSedan extends FabricaDeCarro {
    criarCarro(): Carro {
      return new Carro("Sedan", "V6");
    }
  }
  
  class FabricaDeSUV extends FabricaDeCarro {
    criarCarro(): Carro {
      return new Carro("SUV", "V8");
    }
  }
  
  class Carro {
    constructor(public modelo: string, public motor: string) {}
  }
  
  const fabricaDeSedan = new FabricaDeSedan();
  const fabricaDeSUV = new FabricaDeSUV();
  
  const sedan = fabricaDeSedan.criarCarro();
  const suv = fabricaDeSUV.criarCarro();
  
  console.log("Com Factory Method - Sedan:", sedan); 
  console.log("Com Factory Method - SUV:", suv);     
  