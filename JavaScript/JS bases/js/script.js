//Exercice 1 :
let name = "Martin";                        // j'attribue la valeur Martin à la variable name.
let anneeNaissance = 2000;                  // j'attribue la valeur 2000 à la variable anneeNaissance.

let anneeActuelle = 2024;                   // j'attribue la valeur 2024 à la variable anneeActuelle.
let age = anneeActuelle - anneeNaissance;   // j'attribue à la variable age, une soustraction entre 2 variables.

console.log(`Bonjour Mr ${name} vous avez ${age} ans.`); // j'affiche dans la console = Bonjour Mr Martin vous avez 24 ans.



//Exercice 2 :
let note_maths = 15;      // j'attribue la valeur 15 à la variable note_maths.
let note_français = 12;   // j'attribue la valeur 12 à la variable note_français.
let note_HG = 9;          // j'attribue la valeur 9 à la variable note_HG.

let moyenne = (note_maths + note_français + note_HG) / 3; // j'attribue à la variable moyenne, une addition des 3 variables divisé par 3.

console.log(`La moyenne est de ${moyenne} /20.`); // j'affiche dans la console = La moyenne est de 12/20.



//Exercice 3 :
let sexe = "femme"; // Si je change la valeur, j'aurais un message différent.

switch(sexe) {
    case "homme": // Si la valeur est homme j'aurais le message ci-dessous.
        console.log("Vous êtes un homme");
        break;

    case "femme": // Si la valeur est femme j'aurais le message ci-dessous.
        console.log("Vous êtes une femme");
        break;

    default:      // Si la valeur n'est pas homme ou femme j'aurais le message ci-dessous.
        console.log("Vous êtes autres");
}



//Exercice 4 :
let heure = 9; // Si je change la valeur, j'aurais un message différent.

if (heure >= 0 && heure < 12){          //Si la valeur est entre 0 et 12, j'aurais le message ci-dessous.
    console.log("C'est le matin");

} else if (heure >= 12 && heure < 18){  //Si la valeur est entre 12 et 18, j'aurais le message ci-dessous.
    console.log("C'est l'après-midi");

} else if (heure >= 18 && heure < 24){  //Si la valeur est entre 18 et 24, j'aurais le message ci-dessous.
    console.log("C'est la nuit");

} else {                                //Si la valeur n'est pas entre 0 et 24, j'aurais le message ci-dessous.
    console.log("Inconnu");                 
}



//Exercice 5 :
let choix = 6; // Si je change la valeur, j'aurais un message différent.

switch(choix) {
    case 1:                                     // Si la valeur est 1 j'aurais le message ci-dessous.
        console.log("Insérer");
        break;

    case 2:                                     // Si la valeur est 2 j'aurais le message ci-dessous.
        console.log("Supprimer");
        break;

    case 3:                                     // Si la valeur est 3 j'aurais le message ci-dessous.
        console.log("Afficher");
        break;
    
    case 4:                                     // Si la valeur est 4 j'aurais le message ci-dessous.
        console.log("Ce choix n'existe pas");
        break;

    default:                                    // Si la valeur est au delà de 4 j'aurais le message ci-dessous.
        console.log("Inconnu");
}



//Exercice 6 :
if (9 % 3 === 0 && 25 % 5 === 0) {      //Si je change la valeur 9 ou 25, j'aurais un message différent. J'utilise ET (&&) pour vérifier les 2 modulo en même temps et une égalité stricte (===) pour vérifier si c'est true.
    console.log("C'est à la fois un multiple de 3 et 5."); //Si les 2 modulo sont true alors j'aurais ce message.
} else {
    console.log("Ce n'est pas un multiple de 3 et 5"); //Si les 2 modulo ou une des 2 sont false alors j'aurais ce message.
}



//Exercice 7 :
for (let a = 44000; a <=44999; a++) {  //J'utilise la boucle for, je commence par 44000 en spécifiant une fin à 44999 et en indiquant qu'il faut qu'elle soit supérieur ou égale à celle ci.
    console.log(a);                    //J'ajoute ++ (qui veut dire +1) pour qu'elle me liste tous les chiffres entre 44000 et 44999.
}



//Exercice 8 :
let number = 0; // Déclaration de la variable number avec la valeur 0.

while (number < 20) { // Tant que la variable number est inférieure à 20.
    if (number === 10) { // Vérifie si la variable est égale à 10 en utilisant une égalité stricte.
        console.log(`Valeur: ${number}`); // Affiche la valeur 10 dans la console.
    } else {
        console.log(number); // Affiche la valeur de la variable.
    }
    
    number += 2; // Incrémente la variable de 2, pour atteindre 20 afin de créer une boucle de sortie, sans cela ma valeur restera à 0 et n'atteindra jamais 20 (run infini).
}



// Exercice 9 : Correction
// Création d'une fonction de vérification d'un nombre pair
function estPair(nombre) {
    // Retourne vrai si le nombre est pair, faux sinon
    return nombre % 2 === 0;
}

// Initialisation des valeurs
let tirage; // Variable pour stocker le tirage aléatoire
let sequence = []; // Tableau pour stocker les tirages

// Boucle infinie jusqu'à ce qu'on atteigne les conditions d'arrêt
while (true) {
    // À chaque itération, création d'un nombre aléatoire entre 1 et 100
    tirage = Math.floor(Math.random() * 100) + 1;
    // Ajout du nombre aléatoire dans le tableau séquence
    sequence.push(tirage);
    
    // Vérification si le tableau contient au moins 3 éléments
    // et si la 3ème valeur en partant de la fin est paire
    // et que les 2ème et 1ère valeurs en partant de la fin sont impaires
    if (sequence.length >= 3 && 
        estPair(sequence[sequence.length - 3]) &&  // 3ème valeur
        !estPair(sequence[sequence.length - 2]) && // 2ème valeur
        !estPair(sequence[sequence.length - 1])) { // 1ère valeur
        // Si les conditions sont remplies, sortir de la boucle
        break;
    }
}

// Affichage de la séquence générée
console.log(`La séquence générée est : ${sequence.join(",")}`);



// Exercice 10 : Correction
// Initialisation d'un nombre prédéfini
let nombreInitial = 456;

// Compteur pour le nombre de tirages effectués
let nombreTirage = 0;
let tirageAleatoire; // Déclare une variable pour stocker le tirage aléatoire

// Boucle while : continue tant que le tirage aléatoire est différent du nombre initial
while (tirageAleatoire !== nombreInitial) {
    // Génère un nombre aléatoire entre 100 et 999
    tirageAleatoire = Math.floor(Math.random() * 900) + 100;
    // Incrémente le compteur de tirages
    nombreTirage++;
}

// Affiche le nombre trouvé et le nombre de tirages effectués
console.log(`Nombre trouvé: ${nombreInitial} après ${nombreTirage}`);

// Boucle for : une autre manière de réaliser le même tirage aléatoire
// Initialiser le tirage aléatoire et continuer tant qu'il est différent du nombre initial
for (let tirageAleatoire = Math.floor(Math.random() * 900) + 100; 
    tirageAleatoire !== nombreInitial; 
    tirageAleatoire = Math.floor(Math.random() * 900) + 100) {
    // Incrémente le compteur de tirages
    nombreTirage++;
}

// Affiche le nombre trouvé et le nombre de tirages effectués dans la boucle for
console.log(`Nombre trouvé: ${nombreInitial} après ${nombreTirage} boucle for`);



// Exercice 11 : Correction
// Crée une nouvelle date avec la date et l'heure actuelles
let DateActuelle = new Date();
// Récupère le jour du mois
let jour = DateActuelle.getDate();
// Récupère le mois (ajoute 1 car les mois commencent à 0)
let mois = DateActuelle.getMonth() + 1;
// Récupère l'année actuelle
let annee = DateActuelle.getFullYear();
// Récupère l'heure actuelle
let heures = DateActuelle.getHours();
// Récupère les minutes actuelles
let minutes = DateActuelle.getMinutes();

// Affiche la date et l'heure actuelle dans un format lisible
console.log(`Aujourd’hui nous sommes le ${jour}/${mois}/${annee} et il est ${heures}:${minutes}.`);
