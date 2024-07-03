'''
/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */
'''

# operadores aritmeticos

print(f'Suma: 1 + 2 = {1 + 2}')
print(f'Resta: 2 - 1 = {2 - 1}')
print(f'Multiplicación: 2 * 1 = {2 * 1}')
print(f'División: 2 / 1 = {2 / 1}')
print(f'División entera: 2 // 1 = {2 // 1}')
print(f'Módulo: 4 % 2 = {4 % 2}')
print(f'Exponente: 4 cuadrado = {4 ** 2}')

#operadores de comparacion
print(f'Igualdad: 2 es == 1 es {2 == 1}')
print(f'Desigualdad: 2 != 1 es {2 != 1}')
print(f'Mayor: 2 es mayor que 3 {2 > 3}')
print(f'Menor: 2 es menor que 3 {2 < 3}')
print(f'Mayor o igual: 2 es menor que 3 {2 >= 3}')
print(f'Menor o igual: 2 es menor que 2 {2 <= 3}')

#Operadores lógicos

print(f'AND 10 + 1 == 11 and 2 - 1 == 1: {10 + 1 == 11 and 2 - 1 == 1}')
print(f'OR 1660 + 1 == 11 or 2 - 1 == 1: {1660 + 1 == 11 or 2 - 1 == 1}')
print(f'Not 10 + 1 == 13 {not 10 + 1 == 13}')

# operadores de asignacion 

number = 11
print(number)


number += 1
print(f'{number} (+ 1)')

number -= 1
print(f'{number} (- 1)')

number *= 2
print(f'{number} (* 2)')

number /= 2
print(f'{number} ( / 2)')

number %= 2
print(f'{number} (% 2)')

number **= 2
print(f'{number} (** 2)')

number //= 2
print(f'{number} (// 2)')

myNumber = number

#operadores de identidad

print(f'myNumber is number {myNumber is number}')
print(f'myNumber is not number {myNumber is not number}')

#operadores de pertenencia
print(f'u  in German {'u' in 'German'}')
print(f'u  not in German {'u' not in 'German'}')

#operadores bit
a = 10 #1010
b = 11 #1011

print(f'AND: 10 & 3 = {10  & 11}')#  compara cada bit de dos números. Si ambos bits son 1, el resultado es 1; de lo contrario, el resultado es 0.
print(f"OR: 10 | 3 = {10 | 3}")  # compara cada bit de dos números. Si al menos uno de los bits es 1, el resultado es 1; si ambos bits son 0, el resultado es 0.


