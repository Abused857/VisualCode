/*
class Persona {
  nombre: string;
  edad: number;

  constructor(nombre:string, edad:number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  imprimir() {
    console.log(`Nombre: ${this.nombre} y edad:${this.edad}`);
  }
}

let persona1: Persona;
persona1 = new Persona('Juan', 45);
persona1.imprimir();*/ 

class Rectangulo {
   
    base: number;
    altura: number;


    constructor(base: number, altura: number) {
        this.base = base;
        this.altura = altura;
    }
/**
 * public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
 */
    public get area(): number {
        return this.calcularArea();
    }

  
    private calcularArea(): number {
        return this.base * this.altura;
    }
}

//creo la instancia
const miRectangulo = new Rectangulo(321, 444);

//accedo al getter de la instancia
console.log("El área es: ", miRectangulo.area);