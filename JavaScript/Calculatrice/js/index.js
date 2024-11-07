const boutons = document.querySelectorAll("button"); // Sélectionne tous les éléments <button> sur la page et les stocke dans la variable 'boutons'
const ecran = document.querySelector("#ecran"); // Sélectionne l'élément avec l'ID 'ecran' pour afficher le calcul ou le résultat

// Variable vide pour stocker l'expression de calcul
let calcul = "";

// Fonction pour mettre à jour l'écran d'affichage avec la valeur actuelle de 'calcul'
function updateEcran() {
    ecran.textContent = calcul; // Modifie le texte affiché dans l'élément 'ecran' avec la valeur de la variable 'calcul'
}

// Ajoute un event listener à chaque bouton pour détecter les clics
boutons.forEach(function (bouton) {
    bouton.addEventListener("click", function () {
        let value = this.textContent; // Récupère le texte du bouton cliqué (par ex., "1", "2", "+", "=", "C")

        if (value === "C") {
            calcul = ""; // Si le bouton "C" est cliqué, réinitialise la variable 'calcul' (efface tout)
        } else if (value === "=") {
            try {
                calcul = eval(calcul).toString(); // Si le bouton "=" est cliqué, évalue l'expression et convertit le résultat en chaîne de caractères
            } catch {
                calcul = "Error"; // Si l'évaluation échoue (ex. division par zéro), affiche "Error"
            }
        } else {
            calcul += value; // Pour les autres boutons, ajoute leur texte à l'expression de calcul (concaténation)
        }

        updateEcran(); // Met à jour l'écran après chaque clic
    });
});
