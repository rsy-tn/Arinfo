<?php
class Voiture
{
    // Définition des attributs
    private $marque;
    private $modele;
    private $annee;
    private $km;

    // Constructeur
    public function __construct(string $marque, string $modele, int $annee) {
        $this->marque = $marque;
        $this->modele = $modele;
        $this->annee = $annee;
        $this->km = 0;
    }
    
    // Méthodes

// Retourner le KMage
    public function getKilometrage() {
        return $this->km;
    }

// Ajouter du KMage 
    public function ajouterKilometrages($km) {
        if ($km > 0) {
            $this->km += $km;
        }
    }
}
