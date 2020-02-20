<?php
    /** Definir la zona horaria  */
    date_default_timezone_set('America/El_salvador');

    $nombre = $_GET['nombre'];
    echo 'Hola '. $nombre .' desde el servidor '.date('d-m-Y H:i:s');
?> 