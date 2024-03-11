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
var Rectangulo = /** @class */ (function () {
    function Rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Object.defineProperty(Rectangulo.prototype, "area", {
        /**
         * public getFullName(): string {
                return `${this.firstName} ${this.lastName}`;
            }
         */
        get: function () {
            return this.calcularArea();
        },
        enumerable: false,
        configurable: true
    });
    Rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return Rectangulo;
}());
//creo la instancia
var miRectangulo = new Rectangulo(321, 444);
//accedo al getter de la instancia
console.log("El área es: ", miRectangulo.area);
