<?php
// Inclusion du fichier contenant la classe Animal
include 'Animal.php';

// Instanciation de l'objet Animal

$chat = new Animal("chat", "Hélios", 15);
$chien = new Animal("chien", "Azazel", 16);

// Utilisation des méthodes de l'objet
$chat->jouer();
$chat->promener();
$chien->promener();