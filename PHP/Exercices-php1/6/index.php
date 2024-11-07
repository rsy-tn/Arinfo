<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 6</title>
</head>

<body>
    <?php
    $choix = 2;

    if ($choix == 1){ // Vérifie si le choix est égal à 1
        echo "Insérer";
    } elseif ($choix == 2){ // Vérifie si le choix est égal à 2
        echo "Supprimer";
    } elseif ($choix == 3){ // Vérifie si le choix est égal à 3
        echo "Afficher";
    } elseif ($choix == 4){ // Vérifie si le choix est égal à 4
        echo "Ce choix n'existe pas";
    } else { // Exécuté si le choix n'est pas entre 1 et 4
        echo "Veuillez choisir un nombre entre 1 à 4.";
    }
    ?>
</body>

</html>