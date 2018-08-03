<?php

if(isset($_POST['subtmit'])) {

    $name = $_POST['contactName'];
    $email = $_POST['contactEmail'];
    $phone = $_POST['contactPhone'];
    $message = $_POST['contactMessage'];


    $mailto = 'contacto@topoconcret.com';
    $header = "From ".$mailFrom;
    $txt = "Recibiste un mail de " .$name.".\n\n".$message;

    mail($mailto, $txt, $message,  $header);
    header("Location: index.html");
}

?>