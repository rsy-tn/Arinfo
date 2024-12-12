<?php
function comparerDates($date1, $date2) {
    $dateTime1 = new DateTime($date1);
    $dateTime2 = new DateTime($date2);

    //comparer les dates
    if ($dateTime1 < $dateTime2) {
        return -1; // $date1 est avant $date2
    } else if ($dateTime1 == $dateTime2){
        return 0; // Les dates sont égales
    } else {
        return 1; // $date1 est après $date2
    }
}

echo comparerDates("2024-11-24", "2024-12-01"); // Affichera -1
?>