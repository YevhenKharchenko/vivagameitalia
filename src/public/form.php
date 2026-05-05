<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST['name'] ?? '');
  $email = htmlspecialchars($_POST['email'] ?? '');
  $company = htmlspecialchars($_POST['object'] ?? '');
  $message = htmlspecialchars($_POST['message'] ?? '');

  if (empty($name) || empty($company) || empty($email) || empty($message)) {
    http_response_code(400);
    echo "All fields are required";
    exit;
  }

  http_response_code(200);
  echo "✅ Your form has been successfully submitted";
} else {
  http_response_code(405);
  echo "Method Not Allowed";
}
?>