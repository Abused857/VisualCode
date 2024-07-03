numero = int(input('Introduce un número: '))



match numero:
    case numero if numero < 0:
        print('Rango 1')
    case numero if numero >= 0 and numero < 10:
        print('rango 2')
    case numero if numero >= 10:
        print('Rango 3')
    case _:
        print('número no válido')

print(numero)