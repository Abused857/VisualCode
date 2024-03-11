//funcion con dos parametros numericos a y b y devuelve un numero que es la suma de estos dos parametros
function sumar(a, b) {
    return a + b;
}
//cojemos el valor del promp que va a ser uns tring o nullo
var n1 = prompt("Primer número:");
var n2 = prompt("Segundo número:");
//si es un numero le hacemos el parse a la variable, si es null o indefinido le damos 0 y lo parseamos a 0 
var parseN1 = parseInt(n1 || '0');
var parseN2 = parseInt(n2 || '0');
//sumamos los dos parametros parseados y devolvemos el valor por ventana emergente
var resultado = sumar(parseN1, parseN2);
alert("La suma de ".concat(parseN1, " y ").concat(parseN2, " es: ").concat(resultado));
