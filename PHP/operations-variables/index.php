<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Opérations sur variables</title>
</head>

<body>
    <?php
    $chiffre = 50;
    $diviseur = 3;

    $entier = intdiv($chiffre, $diviseur);
    $reste = $chiffre % $diviseur;

    echo "Le résultat de la division entière de 50 par 3 est de $entier et le reste est de $reste.";
    ?>
</body>
</html>