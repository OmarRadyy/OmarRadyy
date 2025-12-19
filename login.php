// as you see this is an example of php coding with some html code
<?php
include "db.php"; // ده ملف الاتصال بالـ DB

$login_message = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // تحقق من البيانات في جدول users
    $sql = "SELECT id, username FROM users WHERE email = '$email' AND password = '$password'";
    $result = $conn->query($sql);

    if ($result && $result->num_rows == 1) {
        $user = $result->fetch_assoc();
        $login_message = "Login successful!<br>User ID: " . $user['id'] . "<br>Username: " . $user['username'];
    } else {
        $login_message = " Invalid email or password!";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Collaborative Project Manager</title>
    <link rel="stylesheet" href="Pcss.css">
</head>
<body>
    <div class="login-container">
        <h1>Login</h1>

        <?php if($login_message != ""): ?>
            <p><?php echo $login_message; ?></p>
        <?php endif; ?>

        <form method="POST">
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" required><br><br>

            <label>Password</label>
            <input type="password" name="password" placeholder="Password" required><br><br>

            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="register.php">Register</a></p>
    </div>
</body>
</html>

