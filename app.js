//URL du site qui renvoie le document JSON

const url = "https://blockchain.info/ticker";


function recupererPrix() {
    //Comment créer une requete ?

    //on crée un objet avec XMLHttpRequest()
    //var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
    //var xhr = new XMLHttpRequest();
    let requete = new XMLHttpRequest();
    //ouvrir la requete avec open()
    requete.open('GET', url); //open attend 2 paramètres: le 1er: GET / POST (GET sert a recupérer et POST sert à envoyer des données), le 2e: l'url
    //type de réponse attendu (JSON/text)
    requete.responseType = 'json'; //nous attendons du JSON
    //envoie de la requête
    requete.send(); //nous envoyons notre requête

    //Dès qu'on reçoit une réponse on execute cette fonction
    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) { //200 c'est le code erreur qui indique au navigateur que tout s'est bien passé
                let reponse = requete.response; //on stocke la réponse
                // console.log(reponse);
                let prixEnEuros = reponse.EUR.last;
                // console.log(prixEnEuros);
                document.querySelector('#price_label').textContent = prixEnEuros;
            } else {
                alert('Un problème est survenu, merci de revenir plus tard.');
            }
        }

    }
    console.log('Prix actualisé !');
}
setInterval(recupererPrix, 1000);


//ISSUES

//n'affiche pas le fichier json dans la console
//n'affiche pas reponse, prixEnEuros et "prix actualisé !"
//erreur sur XMLHttpRequest (not define) malgré l'installation (npm install xmlhttprequest)
//erreur sur require (not define)



