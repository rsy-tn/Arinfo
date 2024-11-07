<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 7</title>
</head>

<body>
    <?php
    if (6 % 3 === 0 && 10 % 5 === 0) { // Vérification si 6 est un multiple de 3 ET si 10 est un multiple de 5
        echo "C'est à la fois un multiple de 3 et de 5."; // Si les deux conditions sont vraies, afficher ce message
    } else {
        echo "Ce n'est pas un mutliple de 3 et de 5."; // Si au moins une des conditions est fausse, afficher ce message
    }
    ?>
</body>

</html>