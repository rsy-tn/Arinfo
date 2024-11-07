//Demander à l'utilisateur pour Personne
let nom = prompt("Entrez votre nom");
let prenom = prompt("Entrez votre prénom");

//Demander à l'utilisateur pour Animal
let nomAnimal = prompt("Entrez le nom de votre animal");
let espece = prompt("Entrez l'espèce de l'animal");

//Demander à l'utilisateur pour Voiture
let marque = prompt("Quel la marque de votre voiture ?");
let modele = prompt("Quel est le modèle ?");
let nombrePlaces = prompt("Nombres de places ?");

//Demander à l'utilisateur pour Maison
let numeroRue = prompt("Quel est votre numéro de rue ?");
let typeVoie = prompt("Quel est votre type de voie ?");
let nomVoie = prompt("Quel est le nom de votre voie ?");
let codePostal = prompt("Quel est votre code postal ?");
let ville = prompt("Quel est le nom de votre ville ?");

//Instancier les objets
let personne = new Personne(nom, prenom);
let animal = new Animal(nomAnimal, espece);
let vehicule = new Vehicule(marque, modele, nombrePlaces);
let maison = new Maison(numeroRue, typeVoie, nomVoie, codePostal, ville);

//Afficher les détails dans la console
console.log(`Nom: ${personne.nom}, Prénom: ${personne.prenom}`);
console.log(`Nom: ${animal.nomAnimal}, Espèce: ${animal.espece}`);
console.log(`Marque: ${vehicule.marque}, Modèle: ${vehicule.modele}, Nombres de places: ${vehicule.nombrePlaces}`);
console.log(`${maison.numeroRue} ${maison.typeVoie} ${maison.nomVoie} ${maison.codePostal} ${maison.ville}`);

//Exercices constructeurs, ajouts des lignes suivantes demandés :
let formateur = new Personne('DESVAUX', 'Brendon');
let chatFormateur = new Animal('Chaussette', 'chat');
let vehiculeFormateur = new Vehicule('Tesla', 'Model X', 7);
let domicileFormateur = new Maison(1, 'rue', 'du paradis', 18999, 'Las Angelos');

formateur.afficher()
chatFormateur.afficher()
vehiculeFormateur.afficher()
domicileFormateur.afficher()