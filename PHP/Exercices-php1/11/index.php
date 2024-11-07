<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 11</title>
</head>

<body>
    <?php
    $codePostal = 44000;

    while($codePostal <= 44999){ // Boucle while qui commence à 44000 et continue jusqu'à 44999 inclus
        echo $codePostal."\n";
        $codePostal++;
    }
    ?>
</body>

</html>