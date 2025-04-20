<?php
$servername = "localhost"; // O usa el IP de tu servidor si no es localhost
$username = "root"; // El usuario por defecto en XAMPP
$password = "root"; // Si no has configurado una contraseña, déjalo vacío
$dbname = "requerimientosbbdd"; // Cambia esto por el nombre de tu base de datos

// Crear conexión
$conexion = new mysqli($servername, $username, $password, $dbname); // Renombré la variable a $conexion

// Comprobar conexión
if ($conexion->connect_error) {
    die("Conexión fallida: " . $conexion->connect_error);
}
?>