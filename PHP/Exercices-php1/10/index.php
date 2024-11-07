<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 10</title>
</head>

<body>
    <?php
    // Définition des variables pour l'âge et le sexe
    $age = 30;
    $sexe = "Femme";

    if ($age >= 18 && $age <= 35 && $sexe === "Femme"){ // Vérification si l'âge est entre 18 et 35 ans et le sexe est "Femme"
        echo "Vous êtes la bienvenue"; // Si les conditions sont remplies, afficher un message de bienvenue
    } else {
        echo "Vous n'êtes pas la bienvenue"; // Sinon, afficher un message de refus
    }
    ?>
</body>

</html>