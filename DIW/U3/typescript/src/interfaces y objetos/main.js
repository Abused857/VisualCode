/*Interfaces y Objetos: Crea una interfaz Libro con propiedades como titulo, autor, y
anioPublicacion. Luego, declara un objeto de tipo Libro y muestra sus detalles en la
consola.
*/
var libro = {
    titulo: "Libro 1",
    auto: "Autor 1",
    anioPublicacion: 2020
};
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
Object.entries(libro).forEach(function (_a) {
    var clave = _a[0], valor = _a[1];
    console.log("".concat(clave, ": ").concat(valor));
});
