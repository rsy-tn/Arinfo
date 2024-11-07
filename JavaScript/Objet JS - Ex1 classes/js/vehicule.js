class Vehicule {
    constructor(marque="", modele="", nombrePlaces=0) {
        this.marque = marque;
        this.modele = modele;
        this.nombrePlaces = nombrePlaces;
    }
    afficher(){
        console.log(`Le véhicule est de la marque ${this.marque} et du modèle ${this.modele}. Il peut transporter ${this.nombrePlaces} personnes.`);
    }
}