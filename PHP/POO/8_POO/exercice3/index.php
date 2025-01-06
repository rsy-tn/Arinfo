<?php
// Inclusion du fichier contenant la classe Voiture

include 'Voiture.php';

// Instanciation de l'objet Animal

$chrysler = new Voiture("Chrysler", "PT Cruiser", 2004);
$bmw = new Voiture("BMW", "serie 5", 2010);

// retourne le km
$chrysler->ajouterKilometrages(11);
echo $chrysler->getKilometrage(). '<br>';

$bmw->ajouterKilometrages(20);
echo $bmw->getKilometrage(). '<br>';

// ajouter le km
$chrysler->ajouterKilometrages(344);
echo $chrysler->getKilometrage(). '<br>';

$bmw->ajouterKilometrages(2439);
$bmw->ajouterKilometrages(1291);
echo $bmw->getKilometrage() . '<br>';