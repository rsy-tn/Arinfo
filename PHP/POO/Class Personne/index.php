<?php
// Inclusion du fichier contenant la classe Personne
include 'Personne.php';

// Instancier l'objet
$maPersonne = new Personne("Tana", "25 ans", "Femme");

// Utilisation des méthodes
$maPersonne->parler();
$maPersonne->pleurer();
$maPersonne->crier();

// Affichage des attributs
echo "nom: ". $maPersonne->nom . " ";
echo "age: ". $maPersonne->age . " ";
echo "sexe: ". $maPersonne->sexe . " ";
?>