
//API RECUPERER SUR https://api.meteo-concept.com/documentation
const APIKEY = 'a26abc2b7545433c866b68b2adf9279a';

//VERIFICATION QU'ON ACCEDE BIEN A apimeteo.js
console.log("API BIEN PRIS EN COMPTE");



let RechercheMeteo = function(ville){
    //URL RECUPERER SUR https://api.meteo-concept.com/documentation
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${ville}&appid=${APIKEY}&units=metric&lang=fr`;

    //AFFICHAGE EN CONSOLE DE CE QU'ON RECUPERE AVEC L'URL
    fetch(URL).then(reponse=>
        reponse.json().then(data =>{

            //ON AFFICHE LE JSON DANS LA CONSOLE
            console.log(data);


            //ON RECUPERE LES INFORMATIONS QUI NOUS INTERRESSE
        const ville = data.name;
        const temp = data.main.temp + '°';
        const humidity = data.main.humidity + ' %';
        const vent = data.wind.speed + ' km/h';
        const status = data.weather[0].description;
        
        //ON CONSTRUIT LA PHRASE A AFFICHER DANS LA CONSOLE
        const phrase1 = status + ' a ' + ville + ' il faut prévoir ' + temp + ', il y a ' + humidity + ' d\'humidité ' + ' et le vent soufflera a ' + vent;

        //TEST QU'ON RECUPERE BIEN TOUTE LES INFORMATIONS
        console.log(phrase1);

        //ON ENTRE LES INFORMATIONS DANS LES BALISES HTML
        document.querySelector('#ville').innerHTML = ville;
        document.querySelector('#status').innerHTML = status;
        document.querySelector('#temp').innerHTML = temp;
        document.querySelector('#humidity').innerHTML = humidity;
        document.querySelector('#vent').innerHTML = vent;
        
        document.querySelector('#phrase').innerHTML = phrase1;


        }));

}


//ON S'OCCUPE DE RECUPERER LE NOM DE LA VILLE DANS LA RECHERCHE
document.querySelector('form').addEventListener('submit', function (e){
    //ON SUPPRIME L'EVENEMENT PAR DEFAULT (ACTUALISATION DE LA PAGE)
    e.preventDefault();
    //ON RECUPERE LA VALEUR RENTRER DANS L'INPUT TEXT
    let VilleRecherche = document.querySelector('#NomVille').value;

    RechercheMeteo(VilleRecherche);
});