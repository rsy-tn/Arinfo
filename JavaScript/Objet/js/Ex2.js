// Fonction constructeur 'Voiture' pour créer des objets 'Voiture' avec des propriétés 'marque' et 'modele'
function Voiture(marque, modele) {
    // Initialisation de la propriété 'marque' avec la valeur passée en argument
    this.marque = marque;

    // Initialisation de la propriété 'modele' avec la valeur passée en argument
    this.modele = modele;

    // Méthode 'afficherDetails' pour afficher la marque et le modèle de la voiture
    this.afficherDetails = function () {
        // Affiche dans la console les détails de la voiture en utilisant 'this' pour faire référence à l'objet courant
        console.log("Marque: " + this.marque + ", Modèle: " + this.modele);
    }
}

// Création d'une nouvelle instance de 'Voiture' appelée 'troc' avec "Volkswagen" comme marque et "T-roc" comme modèle
let troc = new Voiture("Volkswagen", "T-roc");

// Création d'une autre instance de 'Voiture' appelée 'tiguan' avec "Volkswagen" comme marque et "Tiguan" comme modèle
let tiguan = new Voiture("Volkswagen", "Tiguan");

// Appel de la méthode 'afficherDetails' pour l'objet 'troc', cela affichera "Marque: Volkswagen, Modèle: T-roc"
troc.afficherDetails();

// Appel de la méthode 'afficherDetails' pour l'objet 'tiguan', cela affichera "Marque: Volkswagen, Modèle: Tiguan"
tiguan.afficherDetails();