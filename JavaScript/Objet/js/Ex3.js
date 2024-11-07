// Définition de la méthode 'demarrer' sur le prototype de l'objet 'Voiture'
Voiture.prototype.demarrer = function () {
    // Affiche un message dans la console indiquant que la voiture démarre
    console.log("La voiture " + this.marque + " " + this.modele + " démarre.");
};

// Création d'une nouvelle instance de 'Voiture' avec la marque 'BMW' et le modèle 'Série 1'
let bmw = new Voiture("BMW", "Série 1");

// Appel de la méthode 'demarrer' sur l'objet 'bmw'
// Cela exécutera la fonction définie dans le prototype et affichera le message
bmw.demarrer();