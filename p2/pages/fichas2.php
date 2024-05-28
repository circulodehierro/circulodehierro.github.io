<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" type="text/css" href="../css/fichas.css">
    <link rel="icon" type="image/png" href="../images/logo1.svg"/>
    <script src="../js/fichas.js"></script>
    <title>Circulo de Hierro - Fichas</title>
</head>
<body>
    <!--SECCION FICHAS-->
    <div class="grid-general" id="bloques">
        <div class="grid">
            <div class="square" onclick="ver_ficha(1);return false;">PABLO</div>
            <div class="square" onclick="ver_ficha(2);return false;">ALE</div>
            <div class="square" onclick="ver_ficha(3);return false;">JOTA</div>
            <div class="square" onclick="ver_ficha(4);return false;">BRACKA</div>
            <div class="square" onclick="ver_ficha(5);return false;">ROBINSON</div>
            <div class="square">CHADU</div>
            <div class="square">RAUL</div>
            <div class="square"></div>
            <div class="square"></div>
        </div>
    </div>
    <div class="ficha" id="ficha" style="display: none;">
        <div id="nombre" onclick="cerrarFicha();">Nombre</div>
        <div id="tabla">
            <?php
                echo "hola";
            ?>
        </div>

    </div>
</body>
</html>