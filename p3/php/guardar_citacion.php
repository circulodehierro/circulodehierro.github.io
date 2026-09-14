<?php
header('Content-Type: application/json');
$data = json_decode(file_get_contents('php://input'), true);
if (!$data || empty($data['nombre'])) {
    echo json_encode([
        'ok' => false,
        'mensaje' => 'Datos inválidos'
    ]);
    exit;
}
$nombre = trim($data['nombre']);
$fecha  = $data['fecha'] ?? date('Y-m-d');
$ruta = __DIR__ . '/citaciones_api.js';
// Leer archivo actual
$contenido = file_get_contents($ruta);
// Obtener el array existente
preg_match('/export const citaciones = (.*?);/s', $contenido, $match);
if (isset($match[1])) {
    $citaciones = json_decode($match[1], true);
} else {
    $citaciones = [];
}
// Agregar nueva citación
$citaciones[] = [
    'nombre' => $nombre,
    'fecha'  => $fecha
];
// Generar nuevamente el archivo
$nuevoContenido =
    "export const citaciones = " .
    json_encode($citaciones, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) .
    ";\n";
// Guardar
file_put_contents($ruta, $nuevoContenido);
echo json_encode([
    'ok' => true,
    'mensaje' => 'Citación guardada correctamente'
]);
?>