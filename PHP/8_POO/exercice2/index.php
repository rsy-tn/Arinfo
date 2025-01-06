<?php
// Inclusion du fichier contenant la classe Animal

include 'Animal.php';

// Instanciation de l'objet Animal

$chat = new Animal("chat", "Hélios", 15);
$chien = new Animal("chien", "Azazel", 16);

// Utilisation des méthodes de l'objet

$chat->jouer();
$chien->promener();

// Affiche ses attributs à l'aide des accesseurs
$phrase = 'Le ' . $chat->getEspece() .' s\'appelle ' . $chat->getNom() . ' et a ' . $chat->getAge() .  ' ans.<br>';
echo $phrase;

// Modifier les attributs à l'aide des mutateurs

$chat->setEspece("diable");
$phrase = 'Le ' . $chat->getEspece() .' s\'appelle ' . $chat->getNom() . ' et a ' . $chat->getAge() .  ' ans.<br>';
echo $phrase;