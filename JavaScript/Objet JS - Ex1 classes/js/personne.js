class Personne {
    constructor(nom="", prenom="") {
        this.nom = nom;
        this.prenom = prenom;
    }
    afficher(){
        console.log(`La personne s'appelle ${this.nom} ${this.prenom}`);
    }
}