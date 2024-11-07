class Rectangle {
    constructor(longueur, largeur) {
        this.longueur = longueur;
        this.largeur = largeur;
    }
    surface() {
        return this.longueur * this.largeur;
    }
    perimetre() {
        return 2 * (this.longueur + this.largeur);
    }
}