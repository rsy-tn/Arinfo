<?php
function afficherDateLocale($date, $langue) {
    $formatter = new IntlDateFormatter(
        $langue, // La locale (ici "fr_FR" pour le français).
        IntlDateFormatter::LONG, // Format long pour la date.
        IntlDateFormatter::NONE, // Pas d'affichage de l'heure.
    );

    $timestamp = strtotime($date); // Conversion de la chaîne de date en timestamp Unix.
    return $formatter->format($timestamp); // Formatage de la date selon la locale et retour du résultat formaté.
}

echo afficherDateLocale("2024-11-24", "fr_FR");
?>