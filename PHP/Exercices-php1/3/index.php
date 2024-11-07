<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 3</title>
</head>

<body>
    <?php
    // Déclare une variable pour le sexe, initialisée à une chaîne vide
    $sexe = "";

    // Vérifie si la variable $sexe est égale à "Femme"
    if ($sexe === "Femme") {
        echo "Je suis une femme"; // Affiche "Je suis une femme" si la condition est vraie
    }
    // Vérifie si la variable $sexe est égale à "Homme"
    elseif ($sexe === "Homme") {
        echo "Je suis un homme"; // Affiche "Je suis un homme" si la condition est vraie
    }
    // Exécuté si $sexe n'est ni "Femme" ni "Homme"
    else {
        echo "Autres"; // Affiche "Autres" si aucune des conditions précédentes n'est remplie
    }
    ?>

</body>

</html>