<?php

// this is an example for testing database connection
// i mean php is an intermediate between user and database
$servername = "localhost";
$username = "root";
$password = "root"; 
$dbname = "my_database"; 
$port = 8889; // بورت MySQL على MAMP

$conn = new mysqli($servername, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    
}
echo "Connected successfully to my_database!";
?> 


<!-- http://localhost:8888/phpMyAdmin5/index.php?route=/sql&pos=0&db=my_database&table=task -->
