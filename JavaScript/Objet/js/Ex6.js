// Constructeur pour créer un objet 'Camion' qui hérite de 'Voiture'
// 'marque', 'modele' et 'poidsMax' sont les propriétés spécifiques au camion
function Camion(marque, modele, poidsMax) {
    // Appel du constructeur 'Voiture' pour initialiser 'marque' et 'modele'
    Voiture.call(this, marque, modele);
    this.poidsMax = poidsMax; // Initialisation de la propriété 'poidsMax'
}

// Définition d'une méthode 'transportMarchandise' sur le prototype de 'Camion'
// Cette méthode affiche les détails du transport de marchandises par le camion
Camion.prototype.transportMarchandise = function () {
    // Affiche un message contenant la marque, le modèle et le poids maximal transporté par le camion
    console.log("Le camion de cette marque: " + this.marque + ", du modèle: " + this.modele + ", transporte un poids Max de : " + this.poidsMax + " tonnes");
}

// Création d'une nouvelle instance de 'Camion' avec la marque 'Volvo', le modèle 'FH16' et un poids max de 30 tonnes
let camionThree = new Camion("Volvo", "FH16", 30);

// Appel de la méthode 'transportMarchandise' sur l'objet 'camionThree'
// Cela affichera les détails du transport de marchandises dans la console
camionThree.transportMarchandise();