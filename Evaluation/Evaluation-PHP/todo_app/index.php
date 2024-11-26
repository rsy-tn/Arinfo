<?php
// Tableau pour stocker les données
$tasks = [];

// Fonction uniqid() pour générer un ID unique basé sur le temps
function id() {
    return uniqid();
}

// Fonction si une tâche est terminée ou non terminée avec un code couleur dans le css
function status($status) {
    switch ($status) {
        case 'Terminé':
            return 'green'; // Tâche terminée en vert
            break;
        case 'Non terminé':
            return 'orange'; // Tâche non terminé en orange
            break;
        default:
            echo 'status inconnu';
    }
}

// Récupération des données
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $taskName = $_POST['taskName'] ?? '';
    $description = $_POST['description'] ?? '';
}

// Validation des données
if (!empty($_POST['taskName'])) { //si le champ taskName(required)
    if (!isset($_SESSION['tasks'])) {
        $_SESSION['tasks'] = [];
    }
    //Ajoute les données dans ce tableau
    $_SESSION['tasks'][] = [
        'id' => id(), //Générer avec la fonction uniqid
        'taskName' => $taskName, //Nom de la tâche (obligatoire)
        'description' => $description, //Description
        'status' => 'Non terminé', //Par défaut, la tâche est en orange "Non terminé"
    ];
    echo "La tâche a été ajouté !";
} else {
    echo "Vous devez remplir le Nom de la tâche !";
}

if (is_array($_SESSION['tasks'])) {
    var_dump($_SESSION['tasks']);
    foreach ($_SESSION['tasks'] as $tab) {
        echo $tab['description'];
    }
} else {
    echo 'pas un tableau';
}
?>

<!-- HTML -->
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do List - PHP</title>
</head>

<body>
    <!-- Formulaire -->
    <form method="post">
        <label for="taskName">Nom de la tâche :</label>
        <input type="text" name="taskName" id="taskName" required>

        <label for="description">Description :</label>
        <textarea name="description" id="description" placeholder="Décrivez votre tâche..." rows="5" cols="30"></textarea>

        <button type="submit">Ajouter</button>
    </form>

    <!-- Affichage de la liste dans un tableau -->
    <table>
        <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
        </tr>
        <!-- Ajout des données php dans le tableau HTML -->
        <tr>
            <?php foreach ($_SESSION['tasks'] as $tab): ?>
                <td><?php echo htmlspecialchars($tab['id']); ?></td>
                <td><?php echo htmlspecialchars($tab['taskName']); ?></td>
                <td><?php echo htmlspecialchars($tab['description']); ?></td>
                <td><?php echo htmlspecialchars($tab['status']); ?></td>
            <?php endforeach; ?>
        </tr>
    </table>
</body>

</html>