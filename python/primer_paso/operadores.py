try:
    decimal = float(input('Introduce tu calificación: '))
    if decimal < 5:
        print('has suspendido')
    elif decimal == 5:
        print('aprobado justo')
    elif decimal <= 6:
        print('aprobado')
    elif decimal <= 7:
        print('nota bien')
    elif decimal <= 8:
        print('muy bien')
    elif decimal <= 9:
        print('notable')
    elif decimal <= 10:
        print('sobresaliente')
    else:
        print('esta ')
except:
    print('calificación no válida')