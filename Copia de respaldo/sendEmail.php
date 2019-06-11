<?php
     $name = $_POST['nombre'];
    $email = $_POST['email'];
    $phone = $_POST['telefono'];
    $message = $_POST['mensaje'];


    $destinatario = 'contacto@topoconcret.com';
    $asunto = "contacto desde topoconcret";
   
    $carta = "De: $nombre \n";
    $carta .= "Correo: $correo \n";
    $carta .= "Telefono: $telefono \n";
    $carta .= "Mensaje: $mensaje";

    mail($destinatario, $asunto, $carta);
    header('Location:sendEmail.html');

?>


