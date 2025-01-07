<?php
class Document {
    // Attributs protégés
    protected $titre;
    protected $auteur;
    protected $anneePublication;

    // Constructeur
    public function __construct($titre, $auteur, $anneePublication) {
        $this->titre = $titre;
        $this->auteur = $auteur;
        $this->anneePublication =$anneePublication;
    }

    public function afficherInfos(){
    // Affiche les informations du document
    echo "Titre: " . $this->titre . "\n";
    echo "Auteur: " . $this->auteur . "\n";
    echo "Année de publication: " . $this->anneePublication . "\n";
    }
}
?>