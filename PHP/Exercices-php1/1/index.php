<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 1</title>
</head>

<body>
    <?php
    // Déclare une variable pour le nom
    $nom = "Martin";

    // Déclare une variable pour l'année de naissance
    $anneeNaissance = 2000;

    // Calcule l'âge en soustrayant l'année de naissance de l'année actuelle (2015)
    $soustraction = 2015 - $anneeNaissance;

    // Affiche un message de bienvenue avec le nom et l'âge
    echo "Bonjour Mr $nom vous avez $soustraction ans";
    ?>
</body>

</html>