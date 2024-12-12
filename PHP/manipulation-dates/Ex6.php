<?php
function chaineVersTimestamp($date) {
    return strtotime($date); // Utiliser strtotime pour convertir la chaîne en timestamp
}

echo chaineVersTimestamp("2024-11-24 14:30:00"); // Affichera 1737767400
?>