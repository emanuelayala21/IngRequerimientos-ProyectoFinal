<?php
include("conectionBBDD.php");

$cedula = $_POST["cedula"];
$clave = $_POST["clave"];

$sql = "SELECT * FROM barbero WHERE cedula = ? AND clave = ?";
$stmt = $conexion->prepare($sql);
$stmt->bind_param("ss", $cedula, $clave);
$stmt->execute();
$resultado = $stmt->get_result();

if ($resultado->num_rows > 0) {
    echo "success";
} else {
    echo "Cédula o clave incorrecta";
}

$stmt->close();
$conexion->close();
?>
