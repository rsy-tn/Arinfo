// Constructeur pour créer un objet 'Voiture' avec les propriétés 'marque' et 'modele'
function Voiture(marque, modele) {
    this.marque = marque; // Initialisation de la propriété 'marque'
    this.modele = modele; // Initialisation de la propriété 'modele'
}

// Constructeur pour créer un objet 'Camion' qui hérite de 'Voiture'
// 'poidsMax' est une nouvelle propriété spécifique à 'Camion'
function Camion(marque, modele, poidsMax) {
    // Appel du constructeur 'Voiture' avec 'this' pour initialiser 'marque' et 'modele'
    Voiture.call(this, marque, modele);
    this.poidsMax = poidsMax; // Initialisation de la propriété 'poidsMax'
}

// Définition d'une méthode 'afficherDetails' sur le prototype de 'Camion'
// Cette méthode affiche les détails du camion dans la console
Camion.prototype.afficherDetails = function () {
    // Affiche les informations de la marque, du modèle et du poids maximal
    console.log("Marque: " + this.marque + ", Modèle: " + this.modele + ", Poids Max: " + this.poidsMax + " tonnes");
};

// Création d'une nouvelle instance de 'Camion' avec la marque 'Mercedes', le modèle 'Actros' et un poids max de 18 tonnes
let CamionOne = new Camion("Mercedes", "Actros", 18);

// Appel de la méthode 'afficherDetails' sur l'objet 'CamionOne'
// Cela affichera les détails du camion dans la console
CamionOne.afficherDetails();