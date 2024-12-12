<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
</head>

<body>
    <form method="POST" action="connexion.php">
        <!-- Nom -->
        <label for="username">Utilisateur : </label>
        <input type="text" id="username" name="username" required>
        <!-- Mot de passe -->
        <label for="password">Mot de passe : </label>
        <input type="password" id="password" name="password" required>

        <button type="submit">Se connecter</button>
    </form>

    <?php
    // sécurisation des sessions
    session_set_cookie_params([
        'lifetime' => 3600,
        'path' => '/',
        'domain' => 'example.com',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Strict',
    ]);

    session_start();

    $usernamedb = 'admin';
    $passworddb = 'password';

    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        //Vérification authentification et redirection vers logout.php
        if ($_POST['username'] === $usernamedb && $_POST['password'] === $passworddb) {
            $_SESSION['user'] = 'admin';
            header('Location: profil.php');
            exit();
        } else {
            echo 'Identifiants incorrects';
        }
    }

    ?>
</body>

</html>