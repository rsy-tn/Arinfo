<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 7</title>
</head>

<body>
    <?php
    // Définir le fuseau horaire à Paris
    date_default_timezone_set('Europe/Paris');

    // Afficher la date et l'heure actuelle
    echo "Date et Heure actuelle à Paris : " . date('d-m-Y H:i:s');
    ?>
</body>

</html>