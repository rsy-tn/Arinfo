<?php
// Initialisation des erreurs et des variables
$errors = [];
$prenom = $nom = $email = "";

// Vérification si le formulaire est soumis
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Récupérer les valeurs du formulaire
    $prenom = $_POST['prenom'] ?? '';
    $nom = $_POST['nom'] ?? '';
    $email = $_POST['email'] ?? '';

    // Validation du prénom
    if (empty($prenom)) {
        $errors['prenom'] = "Le prénom est obligatoire.";
    }

    // Validation du nom de famille
    if (empty($nom)) {
        $errors['nom'] = "Le nom de famille est obligatoire.";
    }

    // Validation de l'email
    if (empty($email)) {
        $errors['email'] = "L'email est obligatoire.";
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors['email'] = "L'email n'est pas valide.";
    }

    // Si aucune erreur, affichage du message de succès
    if (empty($errors)) {
        echo "<h1>Inscription réussie !</h1>";
        echo "<p><strong>Prénom :</strong> " . htmlspecialchars($prenom) . "</p>";
        echo "<p><strong>Nom :</strong> " . htmlspecialchars($nom) . "</p>";
        echo "<p><strong>Email :</strong> " . htmlspecialchars($email) . "</p>";
    } else {
        // Si des erreurs sont présentes, réafficher le formulaire avec les erreurs
        include('inscription.php');
    }
} else {
    // Si aucune donnée n'est envoyée, afficher le formulaire vide
    include('inscription.php');
}
?>