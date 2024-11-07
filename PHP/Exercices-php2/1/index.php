<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php Exercice 1</title>
</head>

<body>
    <?php
    function afficher($incrementation){
        if ($incrementation <= 0) {
            return;
        }

        $resultats = []; // Initialisation d'un tableau pour stocker les résultats

        for ($i = $incrementation; $i <= 100; $i += $incrementation) { // Boucle pour générer la suite jusqu'à 100
            $resultats[] = $i; // Ajout de l'élément à la liste des résultats
        }
        echo implode(',', $resultats); // Affichage des résultats sous forme de chaîne
    }

    afficher(12); //appel de la fonction
    ?>
</body>

</html>