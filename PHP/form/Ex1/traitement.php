<?php
// Récupération des données du formulaire
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Initialisation des variables avec des valeurs par défaut (vide)
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $msg = $_POST['msg'] ?? '';

    // Validation des champs
    $errors = [];

    // Vérification du nom
    if (empty($name)) {
        $errors[] = "Le nom est obligatoire.";
    }

    // Vérification de l'email
    if (empty($email)) {
        $errors[] = "L'email est obligatoire.";
    }

    // Vérification du message
    if (empty($msg)) {
        $errors[] = "Le message est obligatoire.";
    }

    // Affichage des erreurs ou des données si tout est correct
    if (!empty($errors)) {
        // Affichage des erreurs
        echo "<h1>Erreur dans le formulaire</h1>";
        foreach ($errors as $error) {
            echo "<p>$error</p>";
        }
    } else {
        // Si tout est correct, affichage des données échappées et de la longueur du message
        echo "<h1>Confirmation</h1>";
        echo "<p><strong>Nom :</strong> " . htmlspecialchars($name) . "</p>";
        echo "<p><strong>Email :</strong> " . htmlspecialchars($email) . "</p>";
        echo "<p><strong>Longueur du message :</strong> " . strlen($msg) . " caractères</p>";
        echo "<p><strong>Votre message a bien été envoyé !</strong></p>";
    }
} else {
    echo "Aucune donnée reçue. Veuillez soumettre le formulaire.";
}
