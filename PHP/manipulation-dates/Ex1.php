<?php
function afficherDateActuelle() {
    return date("Y-m-d H:i:s");
}

echo afficherDateActuelle(); // Appeler la fonction après avoir défini le fuseau horaire
?>