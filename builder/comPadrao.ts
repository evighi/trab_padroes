class ConstrutorDeCasa {
    private janelas = 0;
    private portas = 0;
    private temGaragem = false;
  
    definirJanelas(janelas: number): this {
      this.janelas = janelas;
      return this;
    }
  
    definirPortas(portas: number): this {
      this.portas = portas;
      return this;
    }
  
    definirGaragem(temGaragem: boolean): this {
      this.temGaragem = temGaragem;
      return this;
    }
  
    construir(): Casa {
      return new Casa(this.janelas, this.portas, this.temGaragem);
    }
  }
  
  class Casa {
    constructor(
      public janelas: number,
      public portas: number,
      public temGaragem: boolean
    ) {}
  }
  
  const casaLuxuosa = new ConstrutorDeCasa()
    .definirJanelas(10)
    .definirPortas(5)
    .definirGaragem(true)
    .construir();
  
  console.log("Com Builder:", casaLuxuosa); 
  