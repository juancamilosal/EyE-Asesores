<?php

// Success Message
$success = "";
$error = "Failed";

require("PHPMailer.php");
require("SMTP.php");

$nombre     	= strip_tags($_POST['nombre']);
$correo      = strip_tags($_POST['correo']);
$celular     	= strip_tags($_POST['celular']);
$selectSeguro     	= strip_tags($_POST['selectSeguro']);
$mensaje     	= strip_tags($_POST['mensaje']);
$asunto     	= '';
}

$mail = new PHPMailer\PHPMailer\PHPMailer();
$mail->IsSMTP(); // enable SMTP
$mail->SMTPDebug = 1; // debugging: 1 = errors and messages, 2 = messages only
$mail->SMTPAuth = true; // authentication enabled
$mail->SMTPSecure = 'ssl'; // secure transfer enabled REQUIRED for Gmail
$mail->Host = "euyenidyaver@eyeseguros.com";
$mail->Port = 465; // or 587
$mail->IsHTML(true);
$mail->Username = "euyenidyaver@eyeseguros.com";
$mail->Password = "{R,{?5@HdkIo";
$mail->SetFrom("contacto@eyeseguros.com");
$mail->Subject = $asunto;
$mail->Body = "<html><body>$body</body></html>";
$mail->AddAddress("euyenidyaver@eyeseguros.com");
$mail->AddAddress("edderrojas@eyeseguros.com");


if($mail->Send()) {
	echo "$success";
} else {
	echo "$error";
}
