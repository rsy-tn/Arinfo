// Sélection des éléments HTML avec 'querySelector' pour récupérer les boutons via leurs ID
let openBtn = document.querySelector('#openbtn');
let resizeByBtn = document.querySelector('#resizeByBtn');
let resizeToBtn = document.querySelector('#resizeToBtn');
let closeBtn = document.querySelector('#closeBtn');
let fenetre; // Déclaration d'une variable pour stocker la fenêtre ouverte

// Ajout d'un événement 'click' sur le bouton "openBtn" pour appeler la fonction 'openWindow'
openBtn.addEventListener('click', openWindow);

// Fonction pour ouvrir une nouvelle fenêtre avec des dimensions de 500x500 pixels
function openWindow() {
    fenetre = window.open('', '', "height=500, width=500");
}

// Ajout d'un événement 'click' sur le bouton "resizeByBtn" pour appeler la fonction 'resizeByWindow'
resizeByBtn.addEventListener('click', resizeByWindow);

// Fonction pour augmenter la taille actuelle de la fenêtre de 400 pixels en hauteur et largeur
function resizeByWindow() {
    fenetre.resizeBy(400, 400);
}

// Ajout d'un événement 'click' sur le bouton "resizeToBtn" pour appeler la fonction 'resizeToWindow'
resizeToBtn.addEventListener('click', resizeToWindow);

// Fonction pour redimensionner la fenêtre directement à 200 pixels de hauteur et 200 pixels de largeur
function resizeToWindow() {
    fenetre.resizeTo(200, 200);
}

// Ajout d'un événement 'click' sur le bouton "closeBtn" pour fermer la fenêtre en appelant la méthode 'close'
closeBtn.addEventListener('click', function() {
    fenetre.close();
});
