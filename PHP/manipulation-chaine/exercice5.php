<?php
function convertirCasse($texte, $type) {
    return ucfirst($texte, $type);
}

$texte = "bonjour tout le monde";
$type = "ucfirst";

echo convertirCasse($texte, $type);
?>