<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 2</title>
</head>

<body>
    <?php
    function verifier($nombre){
        if ($nombre % 2 == 0){ //verifier si un nombre est pair ou impair avec modulo
            echo "Pair";
        } else {
            echo "impair";
        }

        if ($nombre % 3 == 0){ // verifie si un nombre est un multiple de 3 avec modulo
            echo "est un multiple de 3";
        } else {
            echo "n'est pas un multiple de 3";
        }

        if ($nombre % 4 == 0) { // verifie si un nombre est un multiple de 4 avec modulo
            echo "est un multiple de 4";
        } else {
            echo "n'est pas un multiple de 4";
        }
    }

    echo verifier(11); //affiche la fonction avec le nombre indiqué
    ?>
</body>

</html>