// Función para realizar cálculos según el operador seleccionado
function calcular(): void {
    // Obtener los valores de los números y el operador
    let num1Input = document.getElementById("num1") as HTMLInputElement;
    let num2Input = document.getElementById("num2") as HTMLInputElement;
    let operadorSelect = document.getElementById("operador") as HTMLSelectElement;

    // Convertir los valores a números
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    let operador = operadorSelect.value;

    // Realizar la operación según el operador seleccionado
    let resultado: number;
    switch (operador) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                resultado = NaN; // División por cero
            }
            break;
        default:
            resultado = NaN; // Operador inválido
    }

    // Mostrar el resultado en el párrafo
    let resultadoP = document.getElementById("resultado");
    if (resultadoP) {
        if (!isNaN(resultado)) {
            resultadoP.textContent = `Resultado: ${resultado}`;
        } else {
            resultadoP.textContent = "Error: Operación inválida";
        }
    }
}

// Asociar la función calcular al evento click del botón
let calcularBtn = document.getElementById("calcularBtn");
if (calcularBtn) {
    calcularBtn.addEventListener("click", calcular);
}
