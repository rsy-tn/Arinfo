<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 9</title>
</head>

<body>
    <?php
    $euro = 10; // Montant en euros

    $tauxUsa = $euro * 1.09; // Taux de change 1 EUR = 1.09 USD
    $tauxCad = $euro * 1.51; // Taux de change 1 EUR = 1.51 CAD
    $tauxGbp = $euro * 0.84; // Taux de change 1 EUR = 0.84 GBP

    echo "{$euro}€ = {$tauxUsa}USD". "<br>";
    echo "{$euro}€ = {$tauxCad}CAD". "<br>";
    echo "{$euro}€ = {$tauxGbp}GBP". "<br>";
    ?>
</body>

</html>