//Exercice 1 :

function checkAge(age) { //Je déclare une fontion nommé checkAge, dans cette fontion je nomme un paramètre appelé age.
    return age > 18 ? true : confirm('As-tu la permission ?'); //Expression booléen en utilisant un opérateur ternaire, si true ok si false j'aurais ce message.
    //return age > 18 || confirm('As-tu la permission ?'); avec l'opérateur || (OU).
  }
let age = prompt("Quel age avez-vous ?") //Je demande à l'utilisateur de saisir l'information.
  checkAge(age) //J'appelle la fontion checkAge pour transmettre ce que l'utilsateur à renseigné.



//Exercice 2 :
