<?php
$servername = "localhost"; 
$username = "root"; 
$password = "root"; 
$dbname = "requerimientosbbdd"; 

// Crear conexión
$conexion = new mysqli($servername, $username, $password, $dbname); 

// Comprobar conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
?>