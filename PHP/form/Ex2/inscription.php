<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire d'inscription</title>
</head>

<body>
    <h1>Formulaire d'Inscription</h1>

    <!-- Formulaire d'inscription avec la méthode POST -->
    <form action="valider.php" method="POST">
        <!-- Prénom -->
        <label for="prenom">Prénom :</label><br>
        <input type="text" id="prenom" name="prenom" value="<?= isset($_POST['prenom']) ? htmlspecialchars($_POST['prenom']) : ''; ?>" required>
        <span class="error"><?= isset($errors['prenom']) ? $errors['prenom'] : ''; ?></span><br><br>

        <!-- Nom de famille -->
        <label for="nom">Nom de famille :</label><br>
        <input type="text" id="nom" name="nom" value="<?= isset($_POST['nom']) ? htmlspecialchars($_POST['nom']) : ''; ?>" required>
        <span class="error"><?= isset($errors['nom']) ? $errors['nom'] : ''; ?></span><br><br>

        <!-- Email -->
        <label for="email">Email :</label><br>
        <input type="email" id="email" name="email" value="<?= isset($_POST['email']) ? htmlspecialchars($_POST['email']) : ''; ?>" required>
        <span class="error"><?= isset($errors['email']) ? $errors['email'] : ''; ?></span><br><br>

        <button type="submit">S'inscrire</button>
    </form>

</body>

</html>