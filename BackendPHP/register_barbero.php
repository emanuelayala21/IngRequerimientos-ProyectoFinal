<?php
include("conectionBBDD.php");

$cedula = $_POST["cedula"];
$nombre = $_POST["nombre"];
$clave = $_POST["clave"];

// Verificar si ya existe un barbero con esa cédula
$checkSql = "SELECT * FROM barbero WHERE cedula = ?";
$checkStmt = $conexion->prepare($checkSql);
$checkStmt->bind_param("s", $cedula);
$checkStmt->execute();
$checkResult = $checkStmt->get_result();

if ($checkResult->num_rows > 0) {
    echo "Ya existe un barbero con esa cédula.";
} else {
    // Insertar nuevo barbero
    $sql = "INSERT INTO barbero (cedula, nombre, clave) VALUES (?, ?, ?)";
    $stmt = $conexion->prepare($sql);
    $stmt->bind_param("sss", $cedula, $nombre, $clave);

    if ($stmt->execute()) {
        echo "success";
    } else {
        echo "Error al registrar al barbero.";
    }

    $stmt->close();
}

$checkStmt->close();
$conexion->close();
?>
