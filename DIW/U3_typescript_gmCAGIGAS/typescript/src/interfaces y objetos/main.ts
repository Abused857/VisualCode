/*Interfaces y Objetos: Crea una interfaz Libro con propiedades como titulo, autor, y
anioPublicacion. Luego, declara un objeto de tipo Libro y muestra sus detalles en la
consola.
*/

interface Libro{
titulo: string;
auto: string;
anioPublicacion: number;
}

const libro: Libro = {
    titulo: "Libro 1",
    auto: "Autor 1",
    anioPublicacion: 2020
}

/*
const obj = {
  name: 'Bobby Hadz',
  country: 'Chile',
};

Object.entries(obj).forEach(([key, value], index) => {
  // name Bobby Hadz 0
  // country Chile 1
  console.log(key, value, index);
});
*/ 

Object.entries(libro).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
})