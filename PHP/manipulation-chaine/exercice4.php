<?php
function remplacerMot($texte, $ancien, $nouveau) {
    return str_replace($ancien, $nouveau, $texte);
    // Utilisation de la fonction `str_replace` pour remplacer toutes les occurrences du mot "ancien" par le mot "nouveau" dans le texte.
    
}

echo remplacerMot("Bonjour tout le monde", "Bonjour", "Salut",);
?>