// Constructeur pour créer un objet 'Chat' qui hérite d'Animal
function Chat(nom) {
    // Appel du constructeur 'Animal' pour initialiser 'nom'
    Animal.call(this, nom);
}

// Configure le prototype de 'Chat' pour hériter du prototype de 'Animal'
// Cela permet aux instances de 'Chat' d'accéder aux méthodes définies dans 'Animal'
Chat.prototype = Object.create(Animal.prototype);

// Redéfinition de la méthode 'parler' sur le prototype de 'Chat'
// Cette méthode affichera un message indiquant que le chat miaule
Chat.prototype.parler = function () {
    console.log(this.nom + " miaule !");
};

// Constructeur pour créer un objet 'Chien' qui hérite d'Animal
function Chien(nom) {
    // Appel du constructeur 'Animal' pour initialiser 'nom'
    Animal.call(this, nom);
}

// Configure le prototype de 'Chien' pour hériter du prototype de 'Animal'
// Cela permet aux instances de 'Chien' d'accéder aux méthodes définies dans 'Animal'
Chien.prototype = Object.create(Animal.prototype);

// Redéfinition de la méthode 'parler' sur le prototype de 'Chien'
// Cette méthode affichera un message indiquant que le chien aboie
Chien.prototype.parler = function () {
    console.log(this.nom + " aboie !");
};

// Création d'un tableau d'animaux avec des instances de 'Chien' et 'Chat'
const animaux = [
    new Chien("Peanut"), // Instance de Chien avec le nom "Peanut"
    new Chien("Luna"),   // Instance de Chien avec le nom "Luna"
    new Chat("Ace"),     // Instance de Chat avec le nom "Ace"
    new Chat("Mimou"),   // Instance de Chat avec le nom "Mimou"
];

// Itération sur le tableau d'animaux pour appeler la méthode 'parler' sur chaque instance
animaux.forEach(animal => animal.parler());