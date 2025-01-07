<?php
class Journal extends Document {
    // Attribut supplémentaire
    private $datePublication;

    // Constructeur
    public function __construct($titre, $auteur, $anneePublication, $datePublication) {
        parent::__construct($titre, $auteur, $anneePublication); // Appel du constructeur de la classe de base
        $this->datePublication = $datePublication;
    }

    // Méthodes pour obtenir la date précise de publication
    public function getDatePublication() {
        return $this->datePublication;
    }

    // Redéfinition de la méthode afficherInfos
    public function afficherInfos() {
        parent::afficherInfos(); // Appel de la méthode de la classe de base
        echo "Date de publication: " . $this->datePublication . "\n";
    }
}
?>