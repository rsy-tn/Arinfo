$(document).ready(function () { // Lorsque le document est prêt, exécute la fonction suivante
    $('#add-task-btn').click(function () { // Ajoute un gestionnaire d'événements au bouton "Ajouter tâche"
        const add = $('input[id=new-task]').val(); // Récupère la valeur du champ de saisie

        if (add) { // Vérifie si la valeur n'est pas vide
            // Ajoute une nouvelle tâche à la liste avec une case à cocher et un champ modifiable
            $('ul').append('<li><input type ="checkbox" class="task-checkbox">' + '<span class="update-task" contenteditable="true">' + add + '</span>' + '</li>');
            $('input[id=new-task]').val(''); // Réinitialise le champ de saisie
        } else {
            alert('Veuillez entrer une tâche') // Alerte si le champ est vide
        }
    });

    $(document).on('click', '.task-checkbox', function () { // Ajoute un gestionnaire d'événements aux cases à cocher
        $(this).parent().toggleClass('line'); // Bascule la classe 'line' sur le parent de la case à cocher pour marquer comme complétée
    });

    $('#clear-completed-btn').click(function () { // Ajoute un gestionnaire d'événements au bouton "Supprimer les tâches complétées"
        $('.task-checkbox:checked').each(function () { // Pour chaque case à cocher cochée
            $(this).parent().remove(); // Supprime l'élément parent (la tâche)
        });
    });
});