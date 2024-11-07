// function saluer(event) {
//     // Bloquer l'événement par défaut.
//     event.preventDefault();

//     // Récupération de la valeur des champs de saisie.
//     let prenom = document.querySelector('#prenom').value;
//     let nom = document.querySelector('#nom').value;
//     let titre = document.querySelector('#titre').value; // Récupération du titre
//     let race = document.querySelector('#race').value;
//     let rang = document.querySelector('input[name=rank]:checked').value;
//     let paragrapheClasses = document.querySelector('#classes');
//     paragrapheClasses.innerHTML = listerLesClasses();

//     // Construction du message
//     let message = "";
//     if (prenom.length == 0 && nom.length == 0) {
//         message = "Bonjour, illustre inconnu(e)!";
//     } else if (titre.length > 0) {
//         message = `Bonjour "${titre}" ${prenom} ${nom}`; // Si le titre est présent, on l'affiche entre guillemets avant le prénom
//     } else {
//         message = `Bonjour ${prenom} ${nom}`;
//     }

//     // Afficher le message dans une alerte
//     // alert(message);

//     //Structure SWITCH pour la race
//     // let emote = "";
//     // switch (race) {
//     //     case 'elf':
//     //         emote = emoteElfe();
//     //         break;
//     //     case 'ork':
//     //         emote = emoteOrque();
//     //         break;
//     //     default:
//     //         emote = emoteHumain();
//     //         break;
//     // }
//     // // alert(emote);

//     // //Stucture SWITCH pour le rang.
//     // let emoteRang = "";
//     // switch (rang) {
//     //     case 'roturier':
//     //         emoteRang = emoteRoturier();
//     //         break;
//     //     case 'noble':
//     //         emoteRang = emoteNoble();
//     //         break;
//     //     default:
//     //         emoteRang = emoteRoyal();
//     //         break;
//     // }
//     // alert(emoteRang);
// }

let bouton = document.querySelector('#btn_salutation');
bouton.addEventListener('click', saluerSansAlertes);

//3 fonctions créer pour la race.
function emoteHumain() {
    return "l'ordinateur observe la personne qui approche.";
}
function emoteElfe() {
    return "l'ordinateur observe la personne, totalement subjugé par la grâce elfique.";
}
function emoteOrque() {
    return "l'ordinateur observe la personne difforme et repoussante, plissant le nez.";
}

//3 fonctions créer pour le rang.
function emoteRoturier() {
    return "Le garde fait un signe de tête.";
}
function emoteNoble() {
    return "Le garde s’incline respectueusement.";
}
function emoteRoyal() {
    return "Le garde, ainsi que toutes les personnes présentes s’inclinent profondément.";
}

//Ajout d'une fonction pour compter le nombre de classe.
function getNombreClasse() {
    let classes = document.querySelectorAll('.classe:checked');
    return classes.length;
}

function listerLesClasses() {
    let classes = document.querySelectorAll('.classe:checked');
    let message = "<ul>";
    classes.forEach(classe => {
        message += `<li>${classe.name}</li>`;
    });
    return message;
}

//Ajout d'une nouvelle fonction pour faire disparaitre les alertes.
function saluerSansAlertes(event) {
    // Bloque le comportement par défaut de l'événement, permettant de traiter l'événement manuellement
    event.preventDefault();

    // Génération du message de salutation
    let message = genererMessageSalutation();
    // Génération de l'emote raciale en fonction de la race sélectionnée
    let emoteRaciale = genererEmoteRaciale();
    // Génération de l'emote sociale en fonction du rang sélectionné
    let emoteSociale = genererEmoteSociale();
    // Liste des classes (peut-être les rôles ou les types de personnages)
    let classes = listerLesClasses();

    // Affichage des emotes dans l'élément avec l'ID 'emotes'
    document.querySelector('#emotes').innerHTML = `<ul><li>${emoteRaciale}</li><li>${emoteSociale}</li></ul>`;
    // Affichage du message de salutation dans l'élément avec l'ID 'salutations'
    document.querySelector('#salutations').innerHTML = message;
    // Affichage des classes dans l'élément avec l'ID 'classe'
    document.querySelector('#classe').innerHTML = classes;
}

function genererEmoteSociale() {
    // Récupération du rang sélectionné par l'utilisateur
    let rang = document.querySelector('input[name=rank]:checked').value;
    let emote = ""; // Initialisation de la variable emote
    // Choix de l'emote en fonction du rang sélectionné
    switch (rang) {
        case 'royal':
            emote = emoteRoyal(); // Appel de la fonction pour obtenir l'emote royale
            break;
        case 'noble':
            emote = emoteNoble(); // Appel de la fonction pour obtenir l'emote noble
            break;
        default:
            emote = emoteRoturier(); // Appel de la fonction pour obtenir l'emote roturier
            break;
    }
    return emote; // Retourne l'emote sélectionnée
}

function genererEmoteRaciale() {
    // Récupération de la race sélectionnée par l'utilisateur
    let race = document.querySelector('#race').value;
    let emote = ""; // Initialisation de la variable emote
    // Choix de l'emote en fonction de la race sélectionnée
    switch (race) {
        case 'elf':
            emote = emoteElfe(); // Appel de la fonction pour obtenir l'emote elfe
            break;
        case 'ork':
            emote = emoteOrque(); // Appel de la fonction pour obtenir l'emote orque
            break;
        default:
            emote = emoteHumain(); // Appel de la fonction pour obtenir l'emote humain
            break;
    }
    return emote; // Retourne l'emote sélectionnée
}

function genererMessageSalutation() {
    // Récupération des valeurs des champs prénom et nom
    let prenom = document.querySelector('#prenom').value;
    let nom = document.querySelector('#nom').value;
    // Construction du message de salutation
    let message = "";
    // Vérification si le prénom et le nom sont vides
    if (prenom.length == 0 && nom.length == 0)
        message = "Bonjour, illustre inconnu(e)"; // Message par défaut si aucun nom n'est fourni
    else
        message = `Bonjour ${prenom} ${nom}`; // Message de salutation personnalisé avec le prénom et le nom
    return message; // Retourne le message de salutation
}