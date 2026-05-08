<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
	http_response_code(405);
	echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
	exit;
}

$rawBody = file_get_contents('php://input');
$data = json_decode($rawBody, true);

if (!is_array($data)) {
	$data = $_POST;
}

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$schedule = trim((string)($data['schedule'] ?? ''));
$description = trim((string)($data['description'] ?? ''));

if ($name === '' || $email === '' || $phone === '' || $schedule === '') {
	http_response_code(400);
	echo json_encode(['success' => false, 'message' => 'Missing required fields.']);
	exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	http_response_code(400);
	echo json_encode(['success' => false, 'message' => 'Invalid email address.']);
	exit;
}

$entry = [
	'timestamp' => gmdate('c'),
	'name' => $name,
	'email' => $email,
	'phone' => $phone,
	'schedule' => $schedule,
	'description' => $description
];

$logPath = __DIR__ . DIRECTORY_SEPARATOR . 'requests.log';
$logLine = json_encode($entry) . PHP_EOL;

file_put_contents($logPath, $logLine, FILE_APPEND | LOCK_EX);

echo json_encode(['success' => true]);
