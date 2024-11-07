// Définition d'une méthode 'demarrer' sur le prototype de 'Camion'
// Cette méthode affichera un message lorsque le camion démarre
Camion.prototype.demarrer = function () {
    // Affiche un message dans la console indiquant que le camion démarre
    console.log("Le camion " + this.marque + " " + this.modele + " démarre.");
};

// Appel de la méthode 'demarrer' sur l'objet 'camionThree'
// Cela exécutera la fonction définie dans le prototype et affichera le message dans la console
camionThree.demarrer();