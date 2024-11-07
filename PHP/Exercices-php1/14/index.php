<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Php - Exercice 14</title>
</head>

<body>
    <?php
    function estPair($nombre){
        return $nombre % 2 === 0 ? "pair" : "impair";
    }

    echo estPair(4);
    echo estPair(5);
    ?>
</body>

</html>