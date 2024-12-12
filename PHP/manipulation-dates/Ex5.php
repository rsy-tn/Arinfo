<?php
function jourDeLaSemaine($date) {
    return date('l', strtotime($date)); //Trouver le jour de la semaine
}

echo jourDeLaSemaine("2024-11-24"); //Sunday
?>