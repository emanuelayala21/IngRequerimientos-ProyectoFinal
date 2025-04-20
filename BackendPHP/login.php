<?php
include('conectionBBDD.php');

$email = $_POST["email"];
$clave = $_POST["clave"];

$sql = "SELECT * FROM usuario WHERE email = ? AND clave = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("ss", $email, $clave);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    echo "Inicio de sesión exitoso.";
} else {
    echo "Correo o contraseña incorrectos.";
}

$stmt->close();
$conexion->close();
?>