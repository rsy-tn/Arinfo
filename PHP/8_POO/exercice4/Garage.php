<?php

include 'Voiture.php';

class Garage {
    private $voitures = [];
    
    // Méthodes
    
    public function ajouterVoiture(Voiture $voiture) {
        $this->voitures[] = $voiture;
    }

    $garage1 = new Garage();
    $garage1->ajouterVoiture($chrysler, $bmw);

    $garage2 = new Garage($formule1, $ford);


    // public function listerVoitures() {

    // }


}