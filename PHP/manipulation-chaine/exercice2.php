<?php
function extraireSousChaine($texte, $debut, $longueur) {
    return mb_substr($texte, $debut, $longueur, 'UTF-8');
    // Utilisation de mb_substr pour extraire une portion de texte en tenant compte des caractères multibytes
    // - $texte : la chaîne d'entrée
    // - $debut : la position de départ (index) à partir de laquelle extraire
    // - $longueur : la longueur de la sous-chaîne à extraire
    // - 'UTF-8' : l'encodage pour gérer correctement les caractères multibytes
}

echo extraireSousChaine("Bonjour tout le monde",4 ,8);
?>