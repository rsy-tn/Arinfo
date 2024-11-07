<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 4</title>
</head>

<body>
    <?php
    // Déclare une variable pour l'heure, ici fixée à 23
    $heure = 23;

    if ($heure >= 0 && $heure < 12) { // Vérifie si l'heure est entre 0 (inclus) et 12 (exclus)
        echo "C'est le matin"; // Affiche "C'est le matin" si la condition est vraie
    }
    
    elseif ($heure >= 12 && $heure < 18) { // Vérifie si l'heure est entre 12 (inclus) et 18 (exclus)
        echo "C'est l'après-midi"; // Affiche "C'est l'après-midi" si la condition est vraie
    }
    
    elseif ($heure >= 18 && $heure < 24) { // Vérifie si l'heure est entre 18 (inclus) et 24 (exclus)
        echo "C'est la nuit"; // Affiche "C'est la nuit" si la condition est vraie
    }
    
    else { // Exécuté si l'heure n'est pas dans l'intervalle de 0 à 24
        echo "Donner un chiffre entre 0 à 24"; // Affiche un message d'erreur si l'heure est en dehors des limites
    }
    ?>

</body>

</html>