// Configure le prototype de 'Camion' pour hériter du prototype de 'Voiture'
// Cela permet à toutes les instances de 'Camion' d'accéder aux méthodes de 'Voiture'
Camion.prototype = Object.create(Voiture.prototype);

// Redéfinition de la méthode 'afficherDetails' sur le prototype de 'Camion'
// Cette méthode affiche les détails du camion dans la console
Camion.prototype.afficherDetails = function () {
    // Affiche les informations de la marque, du modèle et du poids maximal
    console.log("Marque: " + this.marque + ", Modèle: " + this.modele + ", Poids Max: " + this.poidsMax + " tonnes");
};

// Création d'une nouvelle instance de 'Camion' avec la marque 'Renault', le modèle 'T' et un poids max de 19 tonnes
let camionTwo = new Camion("Renault", "T", 19);

// Appel de la méthode 'afficherDetails' sur l'objet 'camionTwo'
// Cela affichera les détails du camion dans la console
camionTwo.afficherDetails();