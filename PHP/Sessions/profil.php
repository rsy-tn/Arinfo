<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profil</title>
</head>

<body>
    <h2>Modifier votre profil :</h2>
    <form method="POST">
        <!-- NOM -->
        <label for="name">Utilisateur : </label>
        <input type="text" id="name" name="name" placeholder="<?php session_start();
                                                                if ($_SESSION['name'] == '') {
                                                                    echo "vide";
                                                                } else {
                                                                    echo htmlspecialchars($_SESSION['name']);
                                                                } ?>">
        <!-- AGE -->
        <label for="age">Age : </label>
        <input type="number" id="age" name="age" min="18" max="90" placeholder="<?php if ($_SESSION['age'] == '') {
                                                                                    echo "vide";
                                                                                } else {
                                                                                    echo htmlspecialchars($_SESSION['age']);
                                                                                } ?>">
        <!-- SEXE -->
        <label for="sexe">Sexe : </label>
        <select name="sexe" id="sexe" aria-placeholder="<?php echo htmlspecialchars($_SESSION['sexe']); ?>">
            <option value="" disabled>Veuillez sélectionnez</option>
            <option value="woman">Femme</option>
            <option value="men">Homme</option>
            <option value="others">Autres</option>
        </select>
        <!-- DATE DE NAISSANCE -->
        <label for="birth">Date de naissance : </label>
        <input type="date" id="birth" name="birth" placeholder="<?php echo htmlspecialchars($_SESSION['birth']); ?>">
        <!-- VILLE -->
        <label for="city">Ville : </label>
        <input type="text" id="city" name="city" placeholder="<?php if ($_SESSION['city'] == '') {
                                                                    echo "vide";
                                                                } else {
                                                                    echo htmlspecialchars($_SESSION['city']);
                                                                } ?>">
        <!-- PROFESSION -->
        <label for="job">Profession : </label>
        <input type="text" id="job" name="job" placeholder="<?php if ($_SESSION['job'] == '') {
                                                                echo "vide";
                                                            } else {
                                                                echo htmlspecialchars($_SESSION['job']);
                                                            } ?>">

        <button type="submit">Modifier</button>
        <br><br><a href="?logout=true">Se déconnecter</a>
    </form>

    <?php
    // je récupère mes valeurs enregistrer dans le form POST
    if ($_SERVER['REQUEST_METHOD'] == "POST") {
        $_SESSION['name'] =htmlspecialchars($_POST['name']);
        $_SESSION['age'] =htmlspecialchars($_POST['age']);
        $_SESSION['sexe'] =htmlspecialchars($_POST['sexe']);
        $_SESSION['birth'] =htmlspecialchars($_POST['birth']);
        $_SESSION['city'] =htmlspecialchars($_POST['city']);
        $_SESSION['job'] =htmlspecialchars($_POST['job']);
        echo 'profil sauvegardé'; // Message de confirmation
    }

    //Déconnexion
    if (isset($_GET['logout'])) {
        session_destroy(); //desctruction des données de la session actuelle
        session_unset(); // Réinitialisation de la session
        header('Location: connexion.php'); // Redirection vers la page de connexion
        exit; // Arrêt du script
    }
    ?>
</body>

</html>