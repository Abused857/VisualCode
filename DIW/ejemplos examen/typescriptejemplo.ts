//Ejemplo 1: Variables y Tipos
let nombre: string = "Juan";
let edad: number = 30;
let estaCasado: boolean = false;

// Función que muestra información personal
function mostrarInfoPersonal(nombre: string, edad: number, estaCasado: boolean) {
    console.log(`Nombre: ${nombre}, Edad: ${edad}, ¿Está casado?: ${estaCasado ? 'Sí' : 'No'}`);
}

// Llamada a la función con los datos definidos
mostrarInfoPersonal(nombre, edad, estaCasado);


// Ejemplo 2: Funciones y Parámetros Opcionales
function sumar(a: number, b: number): number {
    return a + b;
}

// Función que saluda al usuario con un mensaje opcional
function saludar(nombre: string, mensaje?: string): void {
    if (mensaje) {
        console.log(`Hola, ${nombre}! ${mensaje}`);
    } else {
        console.log(`Hola, ${nombre}!`);
    }
}

// Llamada a las funciones
console.log("La suma es:", sumar(5, 3));
saludar("Juan");
saludar("María", "¿Cómo estás?");






// Ejemplo 3: Clases y Objetos
class Persona {
    nombre: string;
    edad: number;

    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    mostrarInfo(): void {
        console.log(`Nombre: ${this.nombre}, Edad: ${this.edad}`);
    }
}

// Creación de objetos de tipo Persona
let persona1 = new Persona("Juan", 30);
let persona2 = new Persona("María", 25);

// Llamada al método mostrarInfo() de los objetos
persona1.mostrarInfo();
persona2.mostrarInfo();
