<?php
class Personne {
    // Définition des attributs
    public $nom;
    public $age;
    public $sexe;

    // Constructeur
    public function __construct($nom, $age, $sexe)
    {
        $this->nom = $nom;
        $this->age = $age;
        $this->sexe = $sexe;
    }

    // Définition des méthodes
    public function parler(){
        echo "Je parle\n";
    }

    public function pleurer(){
        echo "Je pleure\n";
    }

    public function crier(){
        echo "Je crie\n";
    }
}
?>