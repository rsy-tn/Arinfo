<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 8</title>
</head>

<body>
    <?php
    function calculerMontantTTC($prixHT, $tva){ // Déclare une fonction qui calcule le montant TTC (toutes taxes comprises)
        $montantTTC = $prixHT * (1 + ($tva / 100)); // Calcule le montant TTC en multipliant le prix HT par (1 + taux de TVA)
        return round($montantTTC, 2); // Renvoie le montant TTC arrondi à deux décimales
    }

    $prixHT = 20; // Déclare une variable pour le prix HT (hors taxes), ici fixée à 20
    $tva = 20; // Déclare une variable pour le taux de TVA, ici fixée à 20

    echo 'Le montant TTC est : '.calculerMontantTTC($prixHT, $tva); // Affiche le montant TTC en appelant la fonction avec les variables prixHT et tva
    ?>
</body>

</html>