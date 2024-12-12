<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Déconnexion</title>
</head>

<body>
    <h1>Bienvenue, vous êtes connecté</h1>
    <form method="POST" action="connexion.php">
        <button type="submit">Se déconnecter</button>
    </form>

    <?php
    //Déconnexion
    if (isset($_GET['logout'])) {
        session_unset();
        session_destroy();
        header('Location: connexion.php');
        exit;
    }
    ?>
</body>

</html>