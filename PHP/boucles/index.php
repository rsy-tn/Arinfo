<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boucles</title>
</head>

<body>
    <?php
    // Boucle for : calcul des puissances de 2 de 2^0 à 2^16
    for ($i = 0; $i <= 16; $i++) {
        // Calcul de 2 à la puissance de $i
        $resultat = pow(2, $i);
        // Affichage du résultat pour chaque valeur de $i
        echo "résultat = $resultat<br>";
    }

    // Boucle while : même calcul avec une syntaxe différente
    $i = 0; // Initialisation de $i à 0
    while ($i <= 16) {
        // Calcul de 2 à la puissance de $i
        $resultats = pow(2, $i);
        // Affichage du résultat pour chaque valeur de $i
        echo "résultat avec while = $resultats<br>";
        // Incrémentation de $i pour passer à la puissance suivante
        $i++;
    }
    ?>
</body>

</html>