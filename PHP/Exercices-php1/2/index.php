<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 2</title>
</head>

<body>
    <?php
    // Déclare une variable pour la note de maths
    $note_maths = 15;

    // Déclare une variable pour la note de français
    $note_français = 12;

    // Déclare une variable pour la note d'histoire-géographie (HG)
    $note_HG = 9;

    // Calcule la moyenne des notes en additionnant les notes et en divisant par 3
    $moyenne = ($note_maths + $note_français + $note_HG) / 3;

    // Affiche la moyenne sur 20
    echo "La moyenne est de $moyenne/20.";
    ?>
</body>

</html>