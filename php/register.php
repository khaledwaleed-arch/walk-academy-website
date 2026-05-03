<?php
header('Content-Type: application/json');

// ── Load Stripe via Composer (run: composer require stripe/stripe-php) ──
require_once __DIR__ . '/../vendor/autoload.php';

$stripe_secret = 'sk_live_YOUR_STRIPE_SECRET_KEY';   // <-- Replace
\Stripe\Stripe::setApiKey($stripe_secret);

$full_name     = htmlspecialchars(trim($_POST['full_name'] ?? ''));
$email         = htmlspecialchars(trim($_POST['email']     ?? ''));
$phone         = htmlspecialchars(trim($_POST['phone']     ?? ''));
$country       = htmlspecialchars(trim($_POST['country']   ?? ''));
$course        = htmlspecialchars(trim($_POST['course']    ?? ''));
$payment_token = $_POST['stripeToken'] ?? '';

$prices = ['c1' => 29900, 'c2' => 49900, 'c3' => 59900, 'c4' => 34900]; // cents
$names  = [
    'c1' => 'Accounting Fundamentals',
    'c2' => 'Advanced Financial Analysis',
    'c3' => 'Odoo ERP Mastery',
    'c4' => 'Tax & Compliance'
];

if (!$full_name || !$email || !$course || !$payment_token) {
    echo json_encode(['success' => false, 'message' => 'Missing required fields.']);
    exit;
}
if (!array_key_exists($course, $prices)) {
    echo json_encode(['success' => false, 'message' => 'Invalid course selected.']);
    exit;
}

try {
    $charge = \Stripe\Charge::create([
        'amount'      => $prices[$course],
        'currency'    => 'usd',
        'source'      => $payment_token,
        'description' => 'Walk Academy — ' . $names[$course],
        'receipt_email' => $email,
        'metadata'    => [
            'name'    => $full_name,
            'phone'   => $phone,
            'country' => $country,
            'course'  => $names[$course]
        ]
    ]);

    // Send confirmation email
    $subject = 'Walk Academy — Registration Confirmed';
    $headers = "From: Walk Academy <info@walk-business.com>\r\nContent-Type: text/html; charset=UTF-8\r\n";
    $body    = "
    <h2>Thank you, $full_name!</h2>
    <p>Your registration for <strong>{$names[$course]}</strong> has been confirmed.</p>
    <p>We will contact you within 24 hours with course access details.</p>
    <p>Best regards,<br>Walk Business Team</p>
    ";
    mail($email, $subject, $body, $headers);

    echo json_encode(['success' => true, 'redirect' => 'thankyou.html']);

} catch (\Stripe\Exception\CardException $e) {
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Payment failed. Please try again.']);
}
