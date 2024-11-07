//Exercice 1 :
function afficherDimensions() {
    document.querySelector('#width').textContent = window.innerWidth;
    document.querySelector('#height').textContent = window.innerHeight;
}
window.addEventListener("resize", afficherDimensions);
afficherDimensions();

//Exercice 2 :
window.onload = function () {
    window.addEventListener("beforeunload", function (event) {
        const message = "Etes vous sûr de vouloir quitter la page ?";
        event.returnValue = message;
        return message;
    })
}

//Exercice 3 :
const msg = document.querySelector('#msg');
const geoBtn = document.querySelector('#geoBtn');

function afficherPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const precision = position.coords.accuracy;

    msg.textContent = `Votre position est : Latitude : ${latitude}, Longitude : ${longitude} avec une précision de : ${precision}.`;
}

function erreurs(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            msg.textContent = 'Refus d"optemperer';
            break;
        case error.POSITION_UNAVAILABLE:
            msg.textContent = 'Position non disponible';
            break;
        case error.TIMEOUT:
            msg.textContent = 'expiration de la demande';
            break;
        default:
            msg.textContent = "erreur inconnue";
    }
}

geoBtn.addEventListener('click', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(afficherPosition, erreurs);
    } else {
        msg.textContent = "geolocalisation n'est pas dispo";
    }
})

//Exercice 4 :
