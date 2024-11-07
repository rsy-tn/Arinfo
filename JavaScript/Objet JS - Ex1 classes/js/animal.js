class Animal {
    constructor(nomAnimal="", espece="") {
        this.nomAnimal = nomAnimal;
        this.espece = espece;
    }
    afficher(){
        console.log(`L'animal s'appelle ${this.nomAnimal} et est de l'espèce ${this.espece}`);
    }
}