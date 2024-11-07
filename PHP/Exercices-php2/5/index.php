<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 5</title>
</head>

<body>
    <?php
    for ($i = 1; $i <= 100; $i++){ // affiche tous les nombres entre 1 et 100
        $racine = sqrt($i); // Calcule la racine carrée du nombre actuel

        if ($racine == (int)$racine){ // Vérifie si la racine est un entier
            echo $i . " ";
        }
    }
    ?>
</body>

</html>