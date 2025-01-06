<?php
class Animal {
    // Définition des attributs
    public $espece;
    public $nom;
    public $age;

    // Constructeur
    public function __construct(string $espece, string $nom, int $age)
    {
        $this->espece = $espece;
        $this->nom = $nom;
        $this->age = $age;
    }

    // Définitions des méthodes
    public function jouer(){
        echo "Mon animal joue. \n";
    }

    public function promener(){
        echo $this->nom . " se fait proméner.\n";
    }
}
?>