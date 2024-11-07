<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 6</title>
</head>

<body>
    <?php
    function fibonacciSeries($n){ // Définition de la fonction qui génère la série de Fibonacci
        $num1 = 0; // Premier nombre de la série
        $num2 = 1; // Deuxième nombre de la série

        for ($i = 0; $i < $n; $i++) { // Boucle pour générer les n premiers nombres de Fibonacci
            echo $num1 . ", "; // Affiche le nombre actuel de la série
            $num3 = $num1 + $num2; // Somme des deux derniers nombres
            $num1 = $num2; // num1 prend la valeur de num2
            $num2 = $num3; // num2 prend la valeur du nouveau nombre calculé (num3)
        }
    }

    // Driver Code
    $n = 10; // Nombre d'éléments à générer dans la série de Fibonacci
    fibonacciSeries($n); // Appel de la fonction pour afficher la série
    ?>
</body>

</html>