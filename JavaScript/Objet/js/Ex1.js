// Création d'un objet 'voiture' avec des propriétés et une méthode
let voiture = {
    // Propriété 'marque' de l'objet avec pour valeur "Volkswagen"
    marque: "Volkswagen",

    // Propriété 'modele' de l'objet avec pour valeur "Polo"
    modele: "Polo",

    // Méthode 'afficherDetails' pour afficher la marque et le modèle de la voiture
    afficherDetails: function () {
        // Affiche dans la console la marque et le modèle de la voiture en utilisant 'this' pour faire référence à l'objet actuel
        console.log("Marque: " + this.marque + ", Modèle: " + this.modele);
    }
};

// Appel de la méthode 'afficherDetails' de l'objet 'voiture'
voiture.afficherDetails();