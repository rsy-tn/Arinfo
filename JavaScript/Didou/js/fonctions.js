// Références aux éléments HTML
// Tout d'abord, je commence par récupérer les éléments HTML dont j'ai besoin, j'utilise document.getElementById pour sélectionner l'élément image et l'élément texte à partir de leurs IDs respectifs.
const imageElement = document.getElementById("id_image"); // Récupère l'élément image à partir de son ID.
const textElement = document.getElementById("id_quoi"); // Récupère l'élément texte à partir de son ID.


//Ensuite, j'ai créé un objet nommé animaux qui contient toutes les informations relatives aux différents animaux que je souhaite afficher. Chaque animal est un objet avec deux propriétés : src, qui contient le chemin de l'image, et texte, qui contient la description de l'animal.
const animaux = {
    chien: { // Objet pour le chien
        src: "assets/img/chien.jpg", // Propriété src qui indique le chemin de l'image du chien.
        texte: "un chien !" // Propriété texte à afficher pour le chien.
    },
    cochon: { // Objet pour le cochon
        src: "assets/img/cochon.jfif", // Propriété src qui indique le chemin de l'image du cochon.
        texte: "un cochon !" // Propriété texte à afficher pour le cochon.
    },
    singe: { // Objet pour le singe
        src: "assets/img/singe.jpg", // Propriété src qui indique le chemin de l'image du singe.
        texte: "un singe !" // Propriété texte à afficher pour le singe.
    },
    rat: { // Objet pour le rat
        src: "assets/img/rat.jpg", // Propriété src qui indique le chemin de l'image du rat.
        texte: "un rat !" // Propriété texte à afficher pour le rat.
    },
    ecureuil: { // Objet pour l'écureuil
        src: "assets/img/squirrel.jfif", // Propriété src qui indique le chemin de l'image de l'écureuil.
        texte: "un écureuil !" // Propriété texte à afficher pour l'écureuil.
    },
    leopard: { // Objet pour le léopard
        src: "assets/img/cheetah.jpg", // Propriété src qui indique le chemin de l'image du léopard.
        texte: "un léopard !" // Propriété texte à afficher pour le léopard.
    }
};

//Pour changer la grande image et le texte en fonction de l'animal choisi, j'ai défini une fonction appelée updateContent. Cette fonction prend un paramètre animal, qui correspond à la clé de l'objet animaux. Lorsque cette fonction est appelée, elle met à jour la source de l'image et le contenu du texte
function updateContent(animal) {
    imageElement.src = animaux[animal].src; // Met à jour l'attribut src de l'image avec le chemin de l'image de l'animal sélectionné.
    textElement.textContent = animaux[animal].texte; // Met à jour le texte affiché avec le texte de l'animal sélectionné.
}

//J'ai également inclus une fonction de réinitialisation appelée resetContent. Cette fonction remet la grande image à une valeur par défaut et le texte à un état initial. Cela permet à l'utilisateur de revenir à un état neutre 
function resetContent() {
    imageElement.src = "assets/img/didou.jpg"; // Remet l'image à celle de Didou
    textElement.textContent = "un animal..."; // Remet le texte à "un animal..."
}


//J'ai ajouté des écouteurs d'événements à chaque bouton qui correspondent aux différents animaux. Par exemple, lorsque l'utilisateur clique sur le bouton pour le chien, la fonction updateContent est appelée avec le paramètre "chien"
document.getElementById("btn_chien").addEventListener("click", function () { // Ajoute un écouteur d'événement pour le bouton du chien
    updateContent("chien"); // Appelle la fonction pour mettre à jour le contenu avec l'animal "chien"
});

document.getElementById("btn_cochon").addEventListener("click", function () { // Ajoute un écouteur d'événement pour le bouton du cochon
    updateContent("cochon"); // Appelle la fonction pour mettre à jour le contenu avec l'animal "cochon"
});

document.getElementById("btn_singe").addEventListener("click", function () { // Ajoute un écouteur d'événement pour le bouton du singe
    updateContent("singe"); // Appelle la fonction pour mettre à jour le contenu avec l'animal "singe"
});

document.getElementById("btn_rat").addEventListener("click", function () { // Ajoute un écouteur d'événement pour le bouton du rat
    updateContent("rat"); // Appelle la fonction pour mettre à jour le contenu avec l'animal "rat"
});

document.getElementById("btn_ecureuil").addEventListener("click", function () { // Ajoute un écouteur d'événement pour le bouton de l'écureuil
    updateContent("ecureuil"); // Appelle la fonction pour mettre à jour le contenu avec l'animal "écureuil"
});

document.getElementById("btn_leopard").addEventListener("click", function () { // Ajoute un écouteur d'événement pour le bouton du léopard
    updateContent("leopard"); // Appelle la fonction pour mettre à jour le contenu avec l'animal "léopard"
});

//j'ai associé un bouton de réinitialisation qui, lorsqu'il est cliqué, appelle la fonction resetContent. Cela permet de réinitialiser la page à son état initial, offrant ainsi une nouvelle chance à l'utilisateur d'interagir.
document.getElementById("btn_reset").addEventListener("click", resetContent); // Ajoute un écouteur d'événement pour le bouton de réinitialisation qui appelle la fonction de réinitialisation.

//Exercice 3 :
//J'ai ajouté des écouteurs d'événements à chaque petite image qui correspondent aux différents animaux. Par exemple, lorsque l'utilisateur survole la petite image pour le chien, la grande image et le texte change.
document.getElementById("img_chien").addEventListener("mouseover", function () { // Ajoute un écouteur d'événement pour la petite image du chien
    updateContent("chien"); // Appelle la fonction pour mettre à jour le contenu avec l'animal "chien"
});
document.getElementById("img_cochon").addEventListener("mouseover", function () { // Ajoute un écouteur d'événement pour la petite image du cochon
    updateContent("cochon"); // Appelle la fonction pour mettre à jour le contenu avec l'animal "cochon"
});

document.getElementById("img_singe").addEventListener("mouseover", function () { // Ajoute un écouteur d'événement pour la petite image du singe
    updateContent("singe"); // Appelle la fonction pour mettre à jour le contenu avec l'animal "singe"
});

document.getElementById("img_rat").addEventListener("mouseover", function () { // Ajoute un écouteur d'événement pour la petite image du rat
    updateContent("rat"); // Appelle la fonction pour mettre à jour le contenu avec l'animal "rat"
});

document.getElementById("img_ecureuil").addEventListener("mouseover", function () { // Ajoute un écouteur d'événement pour la petite image de l'écureuil
    updateContent("ecureuil"); // Appelle la fonction pour mettre à jour le contenu avec l'animal "écureuil"
});

document.getElementById("img_leopard").addEventListener("mouseover", function () { // Ajoute un écouteur d'événement pour la petite image du léopard
    updateContent("leopard"); // Appelle la fonction pour mettre à jour le contenu avec l'animal "léopard"
});