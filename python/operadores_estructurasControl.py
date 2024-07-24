
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

print(f'AND: 10 & 11 = {10  & 11}')#  compara cada bit de dos números. Si ambos bits son 1, el resultado es 1; de lo contrario, el resultado es 0.
print(f"OR: 10 | 11 = {10 | 3}")  # compara cada bit de dos números. Si al menos uno de los bits es 1, el resultado es 1; si ambos bits son 0, el resultado es 0.
print(f'NOT: 10  = {~10}') #preguntar a vero porque sale  -11 mirarse esto detenidamente porque que es complemento a 1 y complemento a 2
print (f'XOR: 10 ^ 11 = {a ^ b}') # devuelve true o 1  para combinaciones de 0 1 o 1 a 0 y 0 para las demas
print(f'>>: 10 >> 2 = {a >> 2}') # desplaza numero de casillas X hacia la derecha el bit
print(f'<<: 10 << 2 = {b << 2}')# desplaza numero de casillas hacia la izquierda el bit pone x numero de ceros a la derecha

#Condicional 

a = 10
b = 2

print(f'IF: 4 / 2 if 2 != 0 = ')

if b != 0:
    print(a / b)

print(f'Else/Elif: 4 / 2 si 2 != 2 elif si 4 == 4 4 + 2 else no adios')

if b == 3:
    print(a/b)
elif a == 10:
    print(a + 2)
else:
    print('adios')
    
print(f'Ternario: OK si a = 10 ko si no')

print('Ok' if a == 10 else 'KO')

# bucle for

print(' i de 0 a 10')

for i in range(0, 11):
    print(f'{i}')

print('iterar una cadena texto Hola mundo')

for i in 'Hola Mundo':
    print(i)
    
lista = [1, 2, 3, 'german', True]
cadena = 'German'

print(f'Saber si una lista es iterable', isinstance(lista, list))
print(f'Saber si una una cadena es iterable', isinstance(cadena, str))

print(f'Ver donde se almacena la lista')
it = iter(lista)
print(it)


print('Iterar la lista')
for i in lista:
    print(next(it))
it = iter(cadena)
print(it)

print('iterar cadenas')
for i in cadena:
    print(next(it))

print('for anidados en matriz')

lista = [
         [5, 2, 1],
         ['german', True, 2],
         [1, 2, 2]
         ]
print('recorrer una lista de listas')
for i in lista:
    print(i)
print('recorrer cada item en la lista de listas solo una lista hacia atras')
for i in lista:
    for j in i[::-1]:
        print(j)
        
print('recorrer al reves la lista de listas')

for i in lista[::-1]:
    for j in i[::-1]:
        print(j)

#Range

print('Range generando una secuencia de 0 a 10')
for i in range(6):
    print(i)

print('Range de dos en dos')
for i in range(0, 10, 2):
    print(i)
    
print('hacer del range una lista del 5 al 20 saltando sumando 2')

print(list(range(5, 20, 2)))

print('secuencia con range inversa')

for i in range(5, 0, -1):
    print(i)

#while

print('recorrer del 0 al 5 usando while')

a = 0

while a <= 5:
    print(a)
    a += 1

print('Ir eliminando una lista mientras no este vacia')

a = list(range(0, 20))

while a:
    a.pop(0)
    print(a)

b = list(range(0, 10))    
print('Instruccion else para ver si el bucle se ha completado naturalmente no con un break por ejemplo')

while b:
    b.pop(0)
    print(b)
else:
    print('el bucle a finalizado')
    
print('Arbol de navidad')

z = 6
x = 1

while z > 0:
    print(' ' * z + '*' * x + ' ' * z)
    x += 2
    z -= 1
    

print('sucesion de fibonacci')

a = 0
b = 1

while b < 5:
    print(b)
    temp = b 
    b = a + b  
    a = temp
    
print('Switch usando match en Python simulando la sumna de 2 y 2 pasado a una funcion')

operador = 'suma'

match operador:
    case 'resta':
        print(2 - 2)
    case 'suma':
        print(2 + 2)
    case _:
        print('no válido')
        
print('Switch usando if elif')

lang = 'suma'
def switch(lang):
    if lang == 'resta':
        return 'esto seria una resta'
    elif lang == 'suma':
        return f'Suma de 2 + 2 = {2 + 2}'
    else: 
        return 'wrong'
print(f'esto es switch con valor resta')
print(switch('resta'))

print('esto es switch con valor suma')
print(switch('suma'))

print('uso de diccionario con python')

switch = {
    '0': '000',
    '1': '001',
    '2': '010',
    '3': '011',
    '4': '100',
    '5': '101',
    '6': '110',
    '7': '111'
}

def tablaSwitch(decimal):
    return switch.get(decimal, 'NA')
print(tablaSwitch('5'))

print('break en bucle con cadena German')

cadena = 'German'

for i in cadena:
    print(i)
    if i == 'r':
        break
print('fin del bucle')

print('continue con German pasando a la siguiente iteracion')

for i in cadena:
    if i == 'G':
        continue
    print(i)
print('Iteracion del 1 al 5 saltandonos el 4')
for i in range(6):
    if i == 4:
        continue
    print(i)
    
#Iterar con Zip

print('Usar zip e iterar tres listas')

a = ['uno', 'dos','tres']
b = [1, 2, 3]
c = ['one', 'two', 'three']

d = zip(a, b, c)

for i in d:
    print(i)
print('Zip varias listas y pasando varios argumentos al for')

numero = [1, 2]
ingles = ['one', 'two']
frances= ['un', 'deux']
espanol= ['uno', 'dos']
c = zip(numero, ingles, frances, espanol)
for n, i, f, e in c:
    print(n, i, f, e)
    
numeros = [1, 2, 3, 4, 5]
espanol = ["Uno", "Dos"]

for n, e, in zip(numeros, espanol):
    print(n, e)
    
print('Zip con diccionarios')

esp = {'1': 'Uno'}


    
    
            
    
    

