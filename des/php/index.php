<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ordenar Clientes por Apellido</title>
</head>
<body>
    <?php
  
    $datosClientes = [
        ['id' => 3, 'nombre' => 'Sara', 'apellido' => 'Zahara', 'totalCompras' => 15],
        ['id' => 33, 'nombre' => 'Sergio', 'apellido' => 'Perez', 'totalCompras' => 100],
        ['id' => 2, 'nombre' => 'Carmen', 'apellido' => 'Gómez', 'totalCompras' => 50],
        ['id' => 10, 'nombre' => 'Elena', 'apellido' => 'Navarro', 'totalCompras' => 300],
        ['id' => 21, 'nombre' => 'Carlos', 'apellido' => 'García', 'totalCompras' => 150],
        ['id' => 6, 'nombre' => 'Beatriz', 'apellido' => 'Ruiz', 'totalCompras' => 50],
        ['id' => 4, 'nombre' => 'David', 'apellido' => 'López', 'totalCompras' => 95],
        ['id' => 1, 'nombre' => 'Ana', 'apellido' => 'Martínez', 'totalCompras' => 200],
        ['id' => 5, 'nombre' => 'Luis', 'apellido' => 'Hernández', 'totalCompras' => 20],
    ];

 
    usort($datosClientes, function($a, $b) {
        return strcmp($a['apellido'], $b['apellido']);
    });

 
 
  
    foreach ($datosClientes as $cliente) {
        echo "<li>{$cliente['apellido']}, {$cliente['nombre']}</li>";
    }
 
    ?>
</body>
</html>
