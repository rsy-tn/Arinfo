<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 5</title>
</head>

<body>
    <?php
    // Déclaration de la variable $age avec une valeur de 22
    $age = 22;

    // Utilisation de l'opérateur ternaire pour déterminer le message basé sur l'âge    
    $message = ($age >= 18) ? "Vous êtes majeur." : "Vous êtes mineur."; // Si $age est supérieur ou égal à 18, $message sera "Vous êtes majeur." Sinon, $message sera "Vous êtes mineur."

    echo $message;
    ?>

</body>

</html>