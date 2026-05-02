<?php
header('Content-Type: application/json');

$name    = htmlspecialchars(trim($_POST['name']    ?? ''));
$email   = htmlspecialchars(trim($_POST['email']   ?? ''));
$phone   = htmlspecialchars(trim($_POST['phone']   ?? ''));
$subject = htmlspecialchars(trim($_POST['subject'] ?? ''));
$message = htmlspecialchars(trim($_POST['message'] ?? ''));

if (!$name || !$email || !$subject || !$message) {
    echo json_encode(['success' => false, 'message' => 'Please fill all required fields.']);
    exit;
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
    exit;
}

$to      = 'info@walk-business.com';
$headers = "From: $name <$email>\r\nReply-To: $email\r\nContent-Type: text/html; charset=UTF-8\r\n";
$body    = "
<h2>New Contact Message — Walk Business</h2>
<p><strong>Name:</strong> $name</p>
<p><strong>Email:</strong> $email</p>
<p><strong>Phone:</strong> $phone</p>
<p><strong>Subject:</strong> $subject</p>
<p><strong>Message:</strong><br>$message</p>
";

$sent = mail($to, "Walk Business Contact: $subject", $body, $headers);
echo json_encode(['success' => $sent, 'message' => $sent ? 'Message sent.' : 'Mail error.']);
