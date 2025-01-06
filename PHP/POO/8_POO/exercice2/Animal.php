<?php
class Animal {
    // Définition des attributs
    private $espece;
    private $nom;
    private $age;

    // Constructeur
    public function __construct(string $espece, string $nom, int $age) {
        $this->espece = $espece;
        $this->nom = $nom;
        $this->age = $age;
    }

    // Getters, pour la lecture
    public function getEspece() {
        return $this->espece;
        }

    public function getNom() {
        return $this->nom;
    }

    public function getAge() {
        return $this->age;
    }

    // Setters, pour la modification
    public function setEspece($espece) {
        if (isset($espece)) {
            $this->espece = $espece;        
        }
    }

    private function setNom($nom) {
        if (isset($nom)) {
            $this->nom = $nom;        
        }
    }

    private function setAge($age) {
        if ($age >= 0) {
            $this->age = $age;
        }
    }

    // Définitions des méthodes
    public function jouer(){
        echo "Mon animal joue. <br>";
    }

    public function promener(){
        echo $this->nom . " se fait proméner. <br>";
    }
}
?>