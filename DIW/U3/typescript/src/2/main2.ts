
//funcion con dos parametros numericos a y b y devuelve un numero que es la suma de estos dos parametros
function sumar(a: number, b: number): number {
    return a + b;
}

//cojemos el valor del promp que va a ser uns tring o nullo
let n1: string | null = prompt("Primer número:");
let n2: string | null = prompt("Segundo número:");

//si es un numero le hacemos el parse a la variable, si es null o indefinido le damos 0 y lo parseamos a 0 
let parseN1: number = parseInt(n1 || '0');
let parseN2: number = parseInt(n2 || '0');

//sumamos los dos parametros parseados y devolvemos el valor por ventana emergente
let resultado: number = sumar(parseN1, parseN2);
alert(`La suma de ${parseN1} y ${parseN2} es: ${resultado}`);
