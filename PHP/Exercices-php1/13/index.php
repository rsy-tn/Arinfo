<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 13</title>
</head>

<body>
    <?php
    $number = 0;

    while ($number < 20){ // Début de la boucle while, continue tant que $number est inférieur à 20
        if ($number === 10){ // Vérifie si $number est exactement égal à 10
            echo "<strong>"."Valeur: $number". "</strong><br>"; // Si c'est le cas, affiche "Valeur: 10"
        } else {
            echo $number. "<br>"; // Sinon, affiche simplement la valeur de $number
        }

        $number += 2; // Incrémente $number de 2 à chaque itération
    }
    ?>
</body>

</html>