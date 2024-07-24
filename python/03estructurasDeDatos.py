"""

/*
 * EJERCICIO:
 * - Muestra ejemplos de creación de todas las estructuras soportadas por defecto
 *   en tu lenguaje.
 * - Utiliza operaciones de inserción, borrado, actualización y ordenación.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una agenda de contactos por terminal.
 * - Debes implementar funcionalidades de búsqueda, inserción, actualización
 *   y eliminación de contactos.
 * - Cada contacto debe tener un nombre y un número de teléfono.
 * - El programa solicita en primer lugar cuál es la operación que se quiere realizar,
 *   y a continuación los datos necesarios para llevarla a cabo.
 * - El programa no puede dejar introducir números de teléfono no númericos y con más
 *   de 11 dígitos (o el número de dígitos que quieras).
 * - También se debe proponer una operación de finalización del programa.
 */
"""

#Listas
#pintar una lista
lista = ['German', 2, 'Hola', 3]
print(lista)

#pintar el ultimo elemento de la lista
print(lista[-1])

#cambiar el valor de un elemento de la lista

lista[0] = 'valor cambiado'

print(lista)

#lista anidada

lista = [1, 2,['ger', 1,[1,2]],[1,2]]

print(lista[2] [1])

#iterar la lista

for l in lista:
    print(l)
    
#iterar listas dentro de listas

def it_list(lst):
    for element in lst:
        if isinstance(element,list):
            it_list(element)
        else:
            print(element)

print(it_list(lista))

#añadir un elemento a la lista
n = 3
lista.append(n)

print(f'{lista}')

# extender una lista con otra lista 

lista2 = [1,2,9]

lista.extend(lista2)

print(lista)

# añadir un elemento en una posicion en concreto

lista.insert(0, 2)
print(lista)

#borrar el primer elemento de la lista que sea igual al valor que paso

lista.remove(1)

print(lista)

#eliminar el ultimo elemento de la lista si se mete indice cambia el elemento que se borrra

lista.pop()
print(lista)

#invertir el order de la lista

lista.reverse()
print(lista)

#ordenar los elementos de la lista de menor a mayor mediante sort solo funciona con numeros obviamente
lista = [1, 3,2,1,237,6,1,0,6547,624,7,8,4,1,1]
lista.sort()
print(lista)

#obtener el indice de la primera aparicion que haga el valor que pasamos

lista = ['German', 'he', 'aaa']

print(lista.index('German'))

#introducir el parametro desde el que comenzar la busqueda

lista = [1, 1, 2, 1, 9, 7, 2]

index_nine = lista.index(9)


print(lista[index_nine + 1:])

"""
Estructuras
"""

# Listas
my_list: list = ["Brais", "Bl4ck", "Wolfy", "Visionos"]
print(my_list)
my_list.append("Castor")  # Inserción
my_list.append("Castor")
print(my_list)
my_list.remove("Brais")  # Eliminación
print(my_list)
print(my_list[1])  # Acceso
my_list[1] = "Cuervillo"  # Actualización
print(my_list)
my_list.sort()  # Ordenación
print(my_list)
print(type(my_list))

"""
Tuplas

Las tuplas en Python son un tipo o estructura de datos que permite almacenar datos de una manera muy parecida a las listas, con la salvedad de que son inmutables.
"""

# ejemplo de tupla básica

tuples = (1, 2, 3)

print(tuples)
print(type(tuples))

tupla = 1, 2, 3

print(tupla)
print(type(tupla))

"""
operar con tuplas
"""

#pintar tupla anidada

tupla = 1, 3, 2, ('a', 'b')
print(tupla)

#cambiar una lista a tupla 

lista = [1, 2, 3]

tupla = tuple(lista)
print (tupla)

#iterar una tupa

for i in tupla:
    print(i)
    
#asignar valores de una tupla con n elementos a n variable

x, y , z = tupla

print(f'{x}, {y}, {z}')

"""
metodos tuplas
"""

#saber cuantas veces aparece el elemento en la tupla

tupla = 1, 1, 2, 3, 1, 7,1, 1, 2, 3, 1, 7,1, 1, 2, 3, 1, 7,1, 1, 2, 3, 1, 7,1, 1, 2, 3, 1, 7,

print(tupla.count(2))

#idice del elemento que se ha pasado como parametro en la tupla

print(tupla.index(2))
#aparicion del indice del numero a partir del indice que le paso como parametro

print(tupla.index(1, 20))

# Tuplas
my_tuple: tuple = ("Brais", "Moure", "@mouredev", "36")
print(my_tuple[1])  # Acceso
print(my_tuple[3])
my_tuple = tuple(sorted(my_tuple))  # Ordenación
print(my_tuple)
print(type(my_tuple))

"""
Sets

Para crear un set en Python se puede hacer con set() y pasando como entrada cualquier tipo iterable, como puede ser una lista. Se puede ver como a pesar de pasar elementos duplicados como dos 8 y en un orden determinado, al imprimir el set no conserva ese orden y los duplicados se han eliminado.
"""
#crear un set en python

s = set([1, 3, 2, 1, 1, 6, 0, 9])
print(s)
print(type(s))

s = {1, 2, 1, 3, 7, 4, 1, 9, 1, 5, 15, 1547, 7777}

print(s)

"""
Sets
A diferencia de las listas, en los set no podemos modificar un elemento a través de su índice. Si lo intentamos, tendremos un TypeError.

"""
#iterar un set
for ss in s:
    print(ss)
    
#mostrar la longitud de un set

print(len(s))

#saber si un elemento esta presente en el set

print(5 in s)

#juntar dos sets

s2 = {1, 'hoal'}

s3 = s | s2

print(s3)

"""
Métodos sets

"""

#añadir un elemento al set

s.add('hermanillo')
print(s)

#eliminar un elemento del set

s.remove('hermanillo')
print(s)

#borrar un elemento en caso de que exista

s.discard(15)
print(s)
s.discard('adios')
print(s)

#eliminar un elemento aleatorio del set

s.pop()
print(s)

#eliminar todos los elementos de un set

s.clear()
print(s)

#congelar un set para que no se pueda volver a cambiar

s = frozenset(s)
s = print(type(s))

# Sets
my_set: set = {"Brais", "Moure", "@mouredev", "36"}
print(my_set)
my_set.add("mouredev@gmail.com")  # Inserción
my_set.add("mouredev@gmail.com")
print(my_set)
my_set.remove("Moure")  # Eliminación
print(my_set)
my_set = set(sorted(my_set))  # No se puede ordenar
print(my_set)
print(type(my_set))



"""
Otros
Los sets cuentan con una gran cantidad de métodos que permiten realizar operaciones con dos o más, como la unión o la intersección.

Podemos calcular la unión entre dos sets usando el método union(). Esta operación representa la “mezcla” de ambos sets. Nótese que el método puede ser llamado con más parámetros de entrada, y su resultado será la unión de todos los sets.

s1 = {1, 2, 3}
s2 = {3, 4, 5}
print(s1.union(s2)) #{1, 2, 3, 4, 5}
También podemos calcular la intersección entre dos o más set. Su resultado serán aquellos elementos que pertenecen a ambos sets.

s1 = {1, 2, 3}
s2 = {3, 4, 5}
print(s1.intersection(s2)) #{3}
Los set en Python tiene gran cantidad de métodos, por lo que lo dejaremos para otro capítulo, pero aquí os dejamos con un listado de ellos:

s1.union(s2[, s3 ...])
s1.intersection(s2[, s3 ...])
s1.difference(s2[, s3 ...])
s1.symmetric_difference(s2)
s1.isdisjoint(s2)
s1.issubset(s2)
s1.issuperset(s2)
s1.update(s2[, s3 ...])
s1.intersection_update(s2[, s3 ...])
s1.difference_update(s2[, s3 ...])
s1.symmetric_difference_update(s2)
"""

"""
Diccionario
"""
# Diccionario
my_dict: dict = {
    "name": "Brais",
    "surname": "Moure",
    "alias": "@mouredev",
    "age": "36"
}
my_dict["email"] = "mouredev@gmail.com"  # Inserción
print(my_dict)
del my_dict["surname"]  # Eliminación
print(my_dict)
print(my_dict["name"])  # Acceso
my_dict["age"] = "37"  # Actualización
print(my_dict)
my_dict = dict(sorted(my_dict.items()))  # Ordenación
print(my_dict)
print(type(my_dict))


def my_agenda():

    agenda = {'german' : 12312313}
    
    def insert_contact(name):
        phone = input('introduce el tlf del contacto')
        if phone.isdigit() and len(phone) > 0 and len(phone) < 11:
            agenda[name] = phone
        else:
            print('debes introducir un hnumero valido')
            
            
    while True:
        print('')
        print('1. Search Contact')
        print('2. Add contact')
        print('3. Update contact')
        print('4. Delete contact')
        print('5. Contactos de la agenda')
        print('6. Salir')
    
        option = input('\n select an option: ')
    
        match option:
            case "1":
                name = input('introduce el nombre de lcontacto a buscar: ')
                if name in agenda:
                    print(f'el numero de telefono de {name} es {agenda[name]}')
                else:
                    print('el nombre no existe en la agend')
            case "2":
                name = input('introduce el nombre')
                insert_contact(name)
            case "3":
                name = input('introduce el nombre a actualizar: ')
                if name in agenda:
                    insert_contact(name)
            case "4":
                name = input('introduce el nombre a eliminar')
                if name in agenda:
                    del agenda[name]
                else:
                    print('el nombre no existe en la agenda')
            case "5":
                print('lista de contactos de la agenda')
                for x, y in agenda.items():
                    print(f'{x}: {y}')
            case "6":
                print('saliendo de la agenda')
                break
            case _:
                print('operacion no valida')
           
            
            
            
            


my_agenda()