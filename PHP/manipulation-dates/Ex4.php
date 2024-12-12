<?php
function calculerDifference($date1, $date2) {
    $dateTime1 = new DateTime($date1);
    $dateTime2 = new DateTime($date2);

    $interval = $dateTime1->diff($dateTime2); //calcul la différence entre les 2 dates

    return $interval->days; // Retourne le nombre de jours de la différence
}

echo calculerDifference("2024-11-24", "2024-12-25"); // Affichera 31
?>