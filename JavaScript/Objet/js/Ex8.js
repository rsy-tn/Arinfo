// Constructeur pour créer un objet 'Animal' avec la propriété 'nom'
function Animal(nom) {
    this.nom = nom; // Initialisation de la propriété 'nom' de l'animal
}

// Définition d'une méthode 'parler' sur le prototype de 'Animal'
// Cette méthode affiche un message indiquant que l'animal fait du bruit
Animal.prototype.parler = function () {
    console.log(this.nom + " fais du bruit !");
};

// Constructeur pour créer un objet 'Chien' qui hérite d'Animal
function Chien(nom) {
    // Appel du constructeur 'Animal' pour initialiser 'nom'
    Animal.call(this, nom);
}

// Configure le prototype de 'Chien' pour hériter du prototype de 'Animal'
// Cela permet à toutes les instances de 'Chien' d'accéder aux méthodes de 'Animal'
Chien.prototype = Object.create(Animal.prototype);

// Définition d'une méthode 'aboyer' sur le prototype de 'Chien'
// Cette méthode affiche un message indiquant que le chien aboie
Chien.prototype.aboyer = function () {
    console.log(this.nom + " aboie !");
};

// Création d'une nouvelle instance de 'Chien' avec le nom 'Rex'
let rex = new Chien("Rex");

// Appel de la méthode 'parler' sur l'objet 'rex'
// Cela affichera un message indiquant que Rex fait du bruit
rex.parler(); // Affiche "Rex fais du bruit !"

// Appel de la méthode 'aboyer' sur l'objet 'rex'
// Cela affichera un message indiquant que Rex aboie
rex.aboyer(); // Affiche "Rex aboie !"