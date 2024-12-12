<?php
function trouverMot($texte, $mot) {
    return mb_strpos($texte, $mot, 0, 'UTF-8');
    //fonction `mb_strpos` pour trouver la position du mot dans le texte, prenant en compte les encodages UTF-8.
}

echo trouverMot("PHP est un langage puissant", "langage");
?>