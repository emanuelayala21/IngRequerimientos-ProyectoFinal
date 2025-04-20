<?php
include('conectionBBDD.php'); // Incluir la conexión correctamente

$cedula = $_POST["cedula"];
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$celular = $_POST["celular"];
$clave = $_POST["clave"];

// Consulta SQL para insertar datos
$sql = "INSERT INTO usuario (cedula, nombre, email, celular, clave) 
        VALUES ('$cedula', '$nombre', '$email', '$celular', '$clave')";

// Ejecutar la consulta y verificar si fue exitosa
if ($conexion->query($sql) === TRUE) {
    echo "Usuario registrado con éxito";
} else {
    echo "Error: " . $conexion->error;
}

$conexion->close(); // Cerrar la conexión
?>