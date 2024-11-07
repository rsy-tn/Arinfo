<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Calcul d'heures</title>
</head>

<body>
    <?php
    $duree = 6700; // Durée en secondes (6700 secondes)

    $heures = intDiv($duree, 3600); // intDiv retourne la partie entière de la division
    $minutes = intDiv($duree % 3600, 60); // intDiv pour obtenir la partie entière
    $secondes = $duree % 60; // Reste de la division par 60 donne le nombre de secondes

    echo "{$heures}h{$minutes}m{$secondes}s"; // Formate et affiche le résultat

    // Affichage du même résultat sous forme de notification via une alerte JavaScript
    echo "<script>alert(`{$heures}h {$minutes}m {$secondes}s`)</script>";
    ?>

</body>

</html>