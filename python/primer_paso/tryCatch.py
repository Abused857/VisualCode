try:
    decimal = float(input('Introduce tu calificación: '))
    if decimal < 60 and decimal >= 0:
        print( "Lo siento, has suspendido. Debes esforzarte más en la próxima evaluación.")
    elif decimal >= 60 and decimal < 70:
        print( "Has aprobado, pero necesitas mejorar un poco.")
    elif decimal >= 70 and decimal < 90:
        print( "Has aprobado satisfactoriamente.")
    elif decimal >= 90 and decimal <= 100:
        print( "¡Felicidades! Has aprobado con una calificación sobresaliente.")
    else:
        print('calificación no válida')
except:
    print('calificación no válida')