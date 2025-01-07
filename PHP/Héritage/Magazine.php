<?php
class Magazine extends Document {
    // Attribut supplémentaire
    private $frequence;

    // Constructeur
    public function __construct($titre, $auteur, $anneePublication, $frequence) {
        parent::__construct($titre, $auteur, $anneePublication); // Appel du constructeur de la classe de base
        $this->frequence = $frequence;
    }

    // Méthodes pour obtenir la frequence de publication
    public function getFrequence() {
        return $this->frequence;
    }

    // Redéfinition de la méthode afficherInfos
    public function afficherInfos() {
        parent::afficherInfos(); // Appel de la méthode de la classe de base
        echo "Fréquence: " . $this->frequence . "\n";
    }
}
?>