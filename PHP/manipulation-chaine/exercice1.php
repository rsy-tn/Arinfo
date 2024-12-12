<?php
function compterCaracteres($texte) {
    return mb_strlen($texte, 'UTF-8');
    // Utilisation de la fonction mb_strlen pour compter les caractères de manière sécurisée,
    // en prenant en compte l'encodage UTF-8 (gestion des caractères multibytes)
}

echo compterCaracteres("École informatique");
?>