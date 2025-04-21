<?php
include('conectionBBDD.php');

$cedula = $_POST["cedula"];
$nombre = $_POST["nombre"];
$email = $_POST["email"];
$celular = $_POST["celular"];
$clave = $_POST["clave"];

// Verificar si ya existe un usuario con ese email o cédula
$checkSql = "SELECT * FROM usuario WHERE email = ? OR cedula = ?";
$checkStmt = $conexion->prepare($checkSql);
$checkStmt->bind_param("ss", $email, $cedula);
$checkStmt->execute();
$checkResult = $checkStmt->get_result();

if ($checkResult->num_rows > 0) {
    echo "Ya existe un usuario con ese email o cédula.";
} else {
    // Insertar nuevo usuario
    $insertSql = "INSERT INTO usuario (cedula, nombre, email, celular, clave) VALUES (?, ?, ?, ?, ?)";
    $insertStmt = $conexion->prepare($insertSql);
    $insertStmt->bind_param("sssss", $cedula, $nombre, $email, $celular, $clave);

    if ($insertStmt->execute()) {
        echo "success";
    } else {
        echo "Error al registrar al usuario.";
    }

    $insertStmt->close();
}

$checkStmt->close();
$conexion->close();
?>