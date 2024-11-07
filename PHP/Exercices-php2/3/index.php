<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 3</title>
</head>

<body>
    <?php
    function rectangle($largeur, $longueur){ //fonction avec 2 variables
        return $largeur * $longueur; //multiplication entre les 2 variables
    }

    echo rectangle(5,10); //affiche la fonction avec les nombres indiqués
    ?>
</body>

</html>