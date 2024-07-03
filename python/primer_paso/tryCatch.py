try:
    cadena = int(input('Introduce un número: '))
    decimal = float(input('Introduce un decimal: '))
    booleano = bool(input('Introduce un booleano: '))
    print(cadena )
    print(decimal )
    print(booleano )
except ValueError:
    print('algo salio mal')
finally:
    print('aqui va el final')
    

