<?php
class Livre extends Document {
    // Attribut supplémentaire
    private $nbPages;

    // Constructeur
    public function __construct($titre, $auteur, $anneePublication, $nbPages) {
        parent::__construct($titre, $auteur, $anneePublication); // Appel du constructeur de la classe de base
        $this->nbPages = $nbPages;
    }

    // Méthodes pour obtenir le nombre de pages
    public function getNbPages() {
        return $this->nbPages;
    }

    // Redéfinition de la méthode afficherInfos
    public function afficherInfos() {
        parent::afficherInfos(); // Appel de la méthode de la classe de base
        echo "Nombre de pages: " . $this->nbPages . "pages\n";
    }
}
?>