<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 4</title>
</head>

<body>
    <?php
    do {
        $a = rand(0,9); // Génère des nombres aléatoires entre 0 et 9
        $b = rand(0,9); // Génère des nombres aléatoires entre 0 et 9
        $c = rand(0,9); // Génère des nombres aléatoires entre 0 et 9

        $total = $a + $b + $c; // Calcule la somme des trois nombres
    } while ($total !== 10); // Vérifie si la somme est égale à 10

    echo "Nombre 1 = ".$a." Nombre 2 = ".$b. " Nombre 3 = ".$c." Total = ".$total;
    ?>
</body>

</html>