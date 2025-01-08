document.addEventListener('DOMContentLoaded', function () {
    // Stockage des livres dans un objet
    let stockBooks = [];

    // Fonction pour ajouter un livre lorsque le bouton est cliqué
    document.querySelector('#add').addEventListener('click', function () {
        // Récupération des valeurs des champs de saisie et suppression des espaces
        let title = document.querySelector('#book').value.trim();
        let author = document.querySelector('#author').value.trim();

        // Sélection de l'élément pour afficher les messages d'erreur
        let errorMessage = document.querySelector('#error-message');

        // Vérifie que les deux champs sont remplis
        if (title === '' || author === '') {
            // Si le message d'erreur n'existe pas déjà, on le crée
            if (!errorMessage) {
                let error = document.createElement('p');
                error.id = 'error-message';
                error.style.color = 'red'; // Couleur du message d'erreur
                error.textContent = 'Veuillez remplir les 2 champs.'; // Texte du message d'erreur
                document.querySelector('#container').appendChild(error); // Ajout du message d'erreur au conteneur
            }
        } else {
            // Création d'un objet 'book' qui représente un livre avec ses propriétés
            let book = {
                title: title, // La propriété 'title' stocke le titre du livre
                author: author, // La propriété 'author' stocke le nom de l'auteur du livre
                read: false // La propriété 'read' indique si le livre a été lu (false par défaut)
            };

            stockBooks.push(book); // Ajoute l'objet 'book' au tableau 'stockBooks' pour stocker la collection de livres

            // Création d'un nouvel élément de livre
            let newBook = document.createElement('li');
            newBook.innerHTML = `<input type="checkbox" class="book-read"> <span class="add-book">${title} - ${author}</span> <button class="delete-btn">Supprimer</button>`;
            document.querySelector('#list-book').appendChild(newBook); // Ajout du livre à la liste
            document.querySelector('#book').value = ''; // Réinitialisation du champ titre
            document.querySelector('#author').value = ''; // Réinitialisation du champ auteur
            // Suppression du message d'erreur si les champs sont remplis
            if (errorMessage) {
                errorMessage.remove();
            }
        }
    });

    // Vérification si le livre est lu, la couleur devient vert
    document.addEventListener('change', function (event) {
        // Vérification si l'élément cliqué est une case à cocher de livre
        if (event.target.classList.contains('book-read')) {
            let bookItem = event.target.closest('li'); // Récupération de l'élément de livre parent
            bookItem.classList.toggle('check-read'); // Changement de la classe pour modifier le style
        }
    });

    // Suppression d'un livre de la liste avec un bouton
    document.addEventListener('click', function (event) {
        // Vérification si le bouton cliqué est le bouton de suppression
        if (event.target.classList.contains('delete-btn')) {
            let bookItem = event.target.closest('li'); // Récupération de l'élément de livre parent
            bookItem.remove(); // Suppression de l'élément de livre
        }
    });

    console.log(stockBooks);
});