"""
 * EJERCICIO:
 * - Crea ejemplos de funciones básicas que representen las diferentes
 *   posibilidades del lenguaje:
 *   Sin parámetros ni retorno, con uno o varios parámetros, con retorno...
 * - Comprueba si puedes crear funciones dentro de funciones.
 * - Utiliza algún ejemplo de funciones ya creadas en el lenguaje.
 * - Pon a prueba el concepto de variable LOCAL y GLOBAL.
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *   (y tener en cuenta que cada lenguaje puede poseer más o menos posibilidades)
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
 * - La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
 *   - Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
 *   - Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
 *   - Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
 *   - La función retorna el número de veces que se ha impreso el número en lugar de los textos.
 *
 * Presta especial atención a la sintaxis que debes utilizar en cada uno de los casos.
 * Cada lenguaje sigue una convenciones que debes de respetar para que el código se entienda.
 """
 
 #funciones en python
 
def my_funcion(nombre):
    return f'hola {nombre}'

print(my_funcion('Germán'))

def f1(name='Python'):
    print( f'Hola, {name}')

f1('fe')
f1()

# funcion con return

def f2(name='German'):
    return f'Hola, {name}'

resultado = f2()

print(f'por defecto', resultado)
print(f'cambiando el valor por defecto', f2('ger'))

#funcion con dos valores pasando solo 1 

def f3(nombre, edad='No quiere revelarlo'):
    return f'{nombre} y su edad: {edad}'

print(f'Pasando dos parametros a una funcion:', f3('German', 18))
print(f'Pasando solo un parámetro a una función que puede recibir 2', f3('German'))
print(f'Pasando los dos parametros en orden inverso usando el nombre del parametro en la función', f3(edad=2, nombre='German'))

def print_numbers(text_1, text_2):
    count = 0
    for number in range(1,101):
        if number % 3 == 0 and number % 5 == 0:
            print(text_1, text_2)
        if number % 3 == 0:
            print(text_1)
        if number % 5 == 0:
            print(text_2)
        else:
            print(number)
            count+=1
    return count

print(print_numbers('fizz', 'buzz'))

