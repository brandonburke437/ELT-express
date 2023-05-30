<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  // Get the form data
  $recipientsName = $_POST["recipientsName"];
  $recipientsCity = $_POST["recipientsCity"];
  $recipientsNumber = $_POST["recipientsNumber"];
  $recipientsStreet = $_POST["recipientsStreet"];
  $weightKg = $_POST["weightKg"];
  $dimensionsCm = $_POST["dimensionsCm"];
  $description = $_POST["description"];
  $sendersName = $_POST["sendersName"];
  $sendersEmail = $_POST["sendersEmail"];
  $sendersNumber = $_POST["sendersNumber"];
  $sendersMessage = $_POST["sendersMessage"];

  // Build the email message
  $to = "brandonburke437@gmail.com";
  $subject = "New Delivery Form Submission";
  $message = "Recipients Name: " . $recipientsName . "\n"
           . "Recipients City: " . $recipientsCity . "\n"
           . "Recipients Number: " . $recipientsNumber . "\n"
           . "Recipients Street: " . $recipientsStreet . "\n"
           . "Weight (kg): " . $weightKg . "\n"
           . "Dimensions (cm): " . $dimensionsCm . "\n"
           . "Description: " . $description . "\n"
           . "Sender's Name: " . $sendersName . "\n"
           . "Sender's Email: " . $sendersEmail . "\n"
           . "Sender's Number: " . $sendersNumber . "\n"
           . "Sender's Message:" . $sendersMessage; "\n";

  // Send the email
  $headers = "From: " . $sendersEmail;
  if (mail($to, $subject, $message)) {
    header('Location: emailsuccess.html');
    exit;
  } else {
    echo "Sorry, there was a problem sending your message.";
  }

} else {
  // Handle the case where the form was not submitted
  echo "Sorry, this form cannot be accessed directly.";
}

?>
