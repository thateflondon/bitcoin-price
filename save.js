const url = 'https://blockchain.info/ticker';

// Créer une requête
import XMLHttpRequest from 'xmlhttpRequest';
var xhr = new XMLHttpRequest();
let requete = new XMLHttpRequest(); // Créer un objet
requete.open('GET', url); // Premier paramètre GET / POST, deuxième paramètr : url
requete.responseType = 'json'; // Nous attendons du JSON
requete.send(); // Nous envoyons notre requête
// Dèss qu'on reçoit une réponse, cette fonction est executée
requete.onload = function () {
    if (requete.readyState === DONE) {
        if (requete.status === 200) {
            let reponse = requete.response; // on stock la réponse
            console.log(reponse);
        }
    }
};
