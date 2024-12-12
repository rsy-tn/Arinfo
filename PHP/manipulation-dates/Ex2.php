<?php
function ajouterIntervalle($dateInitiale, $intervalle) {
    $date = new DateTime($dateInitiale); // Créer un objet DateTime à partir de la date initiale
    $date-> modify($intervalle); // Ajouter l'intervalle à la date
    return $date->format("Y-m-d"); // Retourner la date modifiée au format Y-m-d
}

echo ajouterIntervalle("2024-11-24", "+1 week");
?>