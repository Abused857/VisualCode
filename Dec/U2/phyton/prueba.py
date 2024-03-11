import random

numeroPc = random.randrange(0,3)
print("piedra")
print("papel")
print("tijera")
opcion = int(input("Elije tu opción"))

if opcion == 1:
    elijeJugador = "piedra"
    print("Piedra J")

if opcion == 2:
    elijeJugador = "papel"
    print("Papel J")

if opcion == 3:
    elijeJugador = "tijera"
    print("Tijera J")

if numeroPc == 0:
    jugadaPc = "piedra"
    print("Piedra P")

if numeroPc == 1:
    jugadaPc = "papel"
    print("Papel P")

if numeroPc == 2:
    jugadaPc = "tijera"
    print("Tijera P")

if elijeJugador == "piedra" and jugadaPc == "piedra":
    print("empate")

if elijeJugador == "papel" and jugadaPc == "papel":
    print("empate")

if elijeJugador == "tijera" and jugadaPc == "tijera":
    print("empate")

if elijeJugador == "piedra" and jugadaPc == "tijera":
    print("Jugador Gana")

if elijeJugador == "piedra" and jugadaPc == "papel":
    print("Maquina Gana")

if elijeJugador == "papel" and jugadaPc == "piedra":
    print("Jugador Gana")

if elijeJugador == "papel" and jugadaPc == "tijera":
    print("Maquina Gana")

if elijeJugador == "tijera" and jugadaPc == "piedra":
    print("Maquina Gana")

if elijeJugador == "tijera" and jugadaPc == "papel":
    print("Jugador Gana")