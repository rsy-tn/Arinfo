class Maison {
    constructor(numeroRue=0, typeVoie="", nomVoie="", codePostal=0, ville="") {
        this.numeroRue = numeroRue;
        this.typeVoie = typeVoie;
        this.nomVoie = nomVoie;
        this.codePostal = codePostal;
        this.ville = ville;
    }
    afficher(){
        console.log(`Le logement se situe ${this.numeroRue} ${this.typeVoie} ${this.nomVoie} - ${this.codePostal} ${this.ville}`);
    }
}