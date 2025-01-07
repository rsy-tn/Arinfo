<?php
// Inclusion des fichiers contenant les classes
include 'Document.php';
include 'Livre.php';
include 'Magazine.php';
include 'Journal.php';

// Création d'objet de la classe Document
$document = new Document("Harry Potter", "JK", 2001);
$document->afficherInfos();
echo "\n";

// Création d'objet de la classe Livre
$livre = new Livre("Harry Potter", "JK", 2001, 1000);
$livre->afficherInfos();
echo "\n";

// Création d'objet de la classe Magazine
$magazine = new Magazine("Harry Potter", "JK", 2001, "Mensuel");
$magazine->afficherInfos();
echo "\n";

// Création d'objet de la classe Journal
$journal = new Journal("Harry Potter", "JK", 2001, "26 juin 1997");
$journal->afficherInfos();
echo "\n";
?>