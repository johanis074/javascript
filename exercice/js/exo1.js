/*let day = prompt("Quels jour on est ?");

if(day == "lundi" || day == "Lundi"){
 window.alert("Demain on sera mardi");
}else if(day == "mardi" || day == "Mardi"){
    window.alert("Demain on sera mercredi");
}else if(day == "mercredi" || day == "Mercredi"){
    window.alert("Demain on sera jeudi");
}else if(day == "jeudi" || day == "Jeudi"){
    window.alert("Demain on sera vendredi");
}else if(day == "vendredi" || day == "Vendredi"){
    window.alert("Demain on sera samedi");
}else if(day == "samedi" || day == "Samedi"){
    window.alert("Demain on sera dimanche");
}else if(day == "dimanche" || day == "Dimanche"){
    window.alert("Demain on sera lundi");
}else{
    window.alert("pas correct");
};
    
let age = prompt("Quel est votre age ?")

if(age >= 18){
    alert("Bienvenue sur le site");
}else{
    alert("Vous êtes mineur");
    //document.location.href="https://www.samsung.com/fr/smartphones/galaxy-s/"; 
};


let prenom = prompt("Quel est votre prénom ?");
let age1 = prompt("Quel est votre age ?");


if (prenom == "johanis" && age1 == 21){

    alert("coucou");
}else{

    alert("bye");
};*/

/*let price = prompt("Quel es le prix ?")
let tax = prompt ("Quels est votre taxe 5%, 10%, 20%")
let allTax;

if(tax == 5){
    allTax = price*1.05
    alert(`Votre prix hors taxe ${price},Votre taxe ${tax}, Votre prix avec taxe ${allTax},`)
}else if(tax == 10){
    allTax = price*1.10
    alert(`Votre prix hors taxe ${price},Votre taxe ${tax}, Votre prix avec taxe ${allTax},`)
}else if(tax == 20){
    allTax = price*1.20
    alert(`Votre prix hors taxe ${price},Votre taxe ${tax}, Votre prix avec taxe ${allTax},`)
}else{
    alert("La taxe n'est pas bonne")
}*/


/*let random = Math.floor(Math.random() * 11);
console.log(random)
let number = prompt("Quels est le nombre cacher ?")

if(number == random){
    alert("Bravo, vous avez réussi")
}else if(number > random && number < 11){
    alert("Votre nombre est trop haut")
}else if (number < random){
    alert("Votre est trop bas")
}else{
    alert("Erreur 404")
}*/

/*let choice = prompt("Quel est votre choix entre pierre, papier, ciseau")
let random = Math.floor(Math.random() * 3);
console.log(random)
let ai;

if(random == 0){
    ai = "pierre"
    alert("L'IA a fait pierre")
}else if(random == 1){
    ai = "feuille"
    alert("L'IA a fait feuille")
}else if (random == 2){
    ai = "ciseau"
    alert("L'IA a fait ciseau")
};

if(ai == "pierre" && choice == "feuille"){
    alert("Vous avez gagner")
}else if(ai == "pierre" && choice == "pierre"){
    alert("Vous avez égalité")
}else if(ai == "feuille" && choice == "pierre"){
    alert("Vous avez perdu")
} else if(ai == "pierre" && choice == "ciseau"){
    alert("Vous avez perdu")
}else if(ai == "ciseau" && choice == "ciseau"){
    alert("Vous avez égalité")
}else if(ai == "ciseau" && choice == "pierre"){
    alert("Vous avez gagner")
}else if(ai == "feuille" && choice == "ciseau"){
    alert("Vous avez gagner")
}else if(ai == "ciseau" && choice == "feuille"){
    alert("Vous avez perdu")
};*/


/*let bank = 1000;
bank = parseInt(bank);
let add = 50;
add = parseInt(add);
let tower = 0;
while(bank < 2000){
    bank = bank + add;
    tower++;
    console.log(tower)
}

document.write(tower,bank)*/

/* let num1 = prompt("nbr1")
let num2 = prompt("nbr2")
function calcul(num1,num2){
    let result = parseInt(num1) + parseInt(num1)
    console.log(result)
}
calcul(num1,num2)*/

/*let chicken = parseInt(prompt("Combien de poulet avez vous  ?"));
let cow = parseInt(prompt("Combien de vache avez vous  ?"));
let horse = parseInt(prompt("Combien de chevaux d'animaux avez vous  ?"));


function farmhouse(chicken,cow,horse){
    let rChicken = chicken * 2;
    let rCow = cow * 4;
    let rHorse = horse * 4;
    let result = rChicken + rCow + rHorse;
    let resultAll = chicken + cow + horse;
    
    document.write(`<p>Vous avez ${resultAll} dans la ferme et vous avez au total ${result} </p>`);
    document.write(`<p>Vous avez ${chicken} poulets dans la ferme et vous avez  ${rChicken} pattes de poulets </p>`);
    document.write(`<p>Vous avez ${cow} vaches dans la ferme et vous avez  ${rCow} pattes de vaches </p>`);
    document.write(`<p>Vous avez ${horse} chevaux dans la ferme et vous avez  ${rHorse} pattes de chevaux </p>`);
}
farmhouse(chicken,cow,horse)*/


/*function game(player){ 
    
    let ai;
    let scoreAI;
    let scorePlayer;
    
    while(scoreAI < 5 || scorePlayer < 5){
        if(random == 0){
            ai = "pierre"
            alert("L'IA a fait pierre")
        }else if(random == 1){
            ai = "feuille"
            alert("L'IA a fait feuille")
        }else if (random == 2){
            ai = "ciseau"
            alert("L'IA a fait ciseau")
        };

        let paper = document.querySelector("paper")
        let rock = document.querySelector("rock")
        let scissor = document.querySelector("scissor")

        if(ai == "pierre" && player == 'paper'){
            document.write("Vous avez gagner")
            scorePlayer++
        }else if(ai == "pierre" && player =='rock'){
            document.write("Vous avez égalité")
        }else if(ai == "feuille" && player =='rock' ){
            document.write("Vous avez perdu")
            scoreAI++
        } else if(ai == "pierre" && player =='scissor' ){
            document.write("Vous avez perdu")
            scoreAI++
        }else if(ai == "ciseau" && player =='scissor' ){
            document.write("Vous avez égalité")
        }else if(ai == "ciseau" && player =='rock' ){
            document.write("Vous avez gagner")
            scorePlayer++
        }else if(ai == "feuille" && player =='scissor' ){
            document.write("Vous avez gagner")
            scorePlayer++
        }else if(ai == "ciseau" && player =='paper' ){
            document.write("Vous avez perdu")
            scoreAI++
        };
    }
}*/

/*let scoreUtilisateur = 0;
let scoreOrdinateur = 0;

function jouer(choixUtilisateur) {
    const choixOrdinateur = genererChoixOrdinateur();
    const resultat = determinerGagnant(choixUtilisateur, choixOrdinateur);
    afficherResultat(resultat, choixUtilisateur, choixOrdinateur);
    mettreAJourScore(resultat);
    afficherScore();
}

function genererChoixOrdinateur() {
    const choix = ['pierre', 'papier', 'ciseaux'];
    const index = Math.floor(Math.random() * 3);
    return choix[index];
}

function determinerGagnant(utilisateur, ordinateur) {
    if (utilisateur === ordinateur) {
        return "égal";
    }
    if ((utilisateur === 'pierre' && ordinateur === 'ciseaux') ||
        (utilisateur === 'papier' && ordinateur === 'pierre') ||
        (utilisateur === 'ciseaux' && ordinateur === 'papier')) {
        return "utilisateur";
    } else {
        return "ordinateur";
    }
}

function afficherResultat(resultat, utilisateur, ordinateur) {
    const elementResultat = document.getElementById('resultat');
    if (resultat === "égal") {
        elementResultat.textContent = `Égalité ! Vous avez tous les deux choisi ${utilisateur}.`;
    } else if (resultat === "utilisateur") {
        elementResultat.textContent = `Vous gagnez ! Vous avez choisi ${utilisateur} et l'ordinateur a choisi ${ordinateur}.`;
    } else {
        elementResultat.textContent = `Vous perdez ! Vous avez choisi ${utilisateur} et l'ordinateur a choisi ${ordinateur}.`;
    }
}

function mettreAJourScore(resultat) {
    if (resultat === "utilisateur") {
        scoreUtilisateur++;
    } else if (resultat === "ordinateur") {
        scoreOrdinateur++;
    }
}

function afficherScore() {
    const elementScore = document.getElementById('score');
    elementScore.textContent = `Score - Vous: ${scoreUtilisateur}, Ordinateur: ${scoreOrdinateur}`;
}*/
/*et voiture = {};

voiture.marque = "BATMOBILE";
voiture.annee = "1989";
voiture.buy = new Date('03-21-2008').toDateString();

let passager = 
    {
        father: "François",
        mother: "Jeannine",
    };

 let newArray = voiture.push(passager);
document.write(`<li> ${voiture.marque}</li> <li>  ${voiture.annee} </li> <li>  ${voiture.buy} </li>` );


console.log(voiture);*/

/*let array = [];
let number = prompt("Combien de prénom avez vous ?")

for (i=0; i<number;i++){
    let name = prompt("prénoms ?");
    if (name != "") {
            let newElement = array.push(name);
            document.write(`<p>${name}</p>`);
    }
    else {
        document.write("<p> invalide </p>");
    }
}

console.log(array);*/
/*let firstname = ["Jule","Juliette","Julie","Jul","Justin","Justine","Julien","Jordan","Jordi"];
let number = [];
let result = document.querySelector("p");
function play(){  
    let random = Math.floor(Math.random()*firstname.length);
     firstnameFound = firstname[random];
        firstname.splice(1, random,"");
    
    console.log(random);
    result.innerHTML = firstnameFound;
    if (number.includes(random)) {
         // Ne fait rien si l'élément existe
    }else{
        number.push(random);
    }
 
    if(firstnameFound === ''){
        result.innerHTML = "Ce prénom est déja séléctionner" ;
    }else if(number.length === firstname.length){
        result.innerHTML = "Tous le monde est séléctionner";
        console.log(number);
        return;
    }
}*/
// let picture = document.querySelector("#carrousel")
// let carousel = [
//     {
//         src: "../img/paysage.jpg",
//         alt: "paysage"
//     }

//     {
//         src: "../img/rivière.jpg",
//         alt: "rivière"
//     }

//     {
//         src: "../img/salon.jpg",
//         alt: "salon"
//     }
    
// ];
// function next(){
//     if() 
// }

// function previous(){

// }

// const city = document.querySelector("#city")
// console.log(city)
// function weather(){
//      const URL = "https://api.openweathermap.org/data/2.5/weather?id={city}&appid={API key}&units=metric";
//      let CLE_API = '9d14fab5293af26cf8dc10b7ff26e891';

//  }
// let input = document.querySelector("#searchInput");
// let foodName;
// input.addEventListener("input", function (e) {
//     foodName = e.target.value;
// meal();})
// function meal(){
//     const URL = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${foodName}`;
//     console.log("FoodName")
//     fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//     console.log(data);
//     for (let i = 1; i < foodName.length; i++) {
//         document.querySelector("#results").innerHTML = `${data.foodName["strMeal"]},${data.foodName["strMealThumb"]}`;
//     }
    
//     //document.querySelector("#results").innerHTML = ` °`;
//     })
//     .catch((err) => {
//     console.log(`Échec de récupération: ${err}`);
//     });
// };

// function searchMeals() {
//     const ingredientInput = document.querySelector('#searchInput');
//     const ingredient = ingredientInput.value;
//     const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             const mealsDiv = document.querySelector('#results');
//             mealsDiv.innerHTML = '';

//             if (data.meals) {
//                 for (let i = 0; i < data.meals.length; i++) {
//                     const meal = data.meals[i];
//                     const mealElement = document.createElement('div');
//                     mealElement.classList.add('meal');
                    
//                     mealElement.innerHTML = `
//                         <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
//                         <div class="meal-info">
//                             <h2>${meal.strMeal}</h2>
//                         </div>
//                     `;

//                     mealsDiv.appendChild(mealElement);
//                 }
//             } else {
//                 mealsDiv.innerHTML = '<p>Aucune recette trouvée.</p>';
//             }
//         })
//         .catch(error => console.error('Erreur:', error));
// }

// let array = [];
//     array.push("avion");
//     console.log(array);
//     array.push("l'avion tombe dans l'eau", "meurs", "revive");

//     for(let i = 0; i < array.length; i++){
//         document.write(`<ul> <li> ${array[i]}  </li> </ul>`);
//         if( i === 1){
//             console.log(array[1])
//         }
//     }

// let firstname = prompt("Quels est votre Prénom?");

// function Prenom(firsname){
//    alert(`Bonjour ${firstname}`);
// }
// Prenom(firstname)

// let old = prompt("Quel age avez vous ?").toLowerCase();
// let drive = prompt("avez vous le permis ?").toLowerCase();

// if(old >= 18 && drive == "oui"){
//     alert("Il a le permis");
// }else if(old >= 18 && drive == "non"){
//     alert("Il a pas le permis");
// }else{
//     alert("trop jeune");
// }

// let message = "";
// function menu(food){
//     switch(food){
//         case 'pizza':
//             // document.write("Quel bonne pizza");
//             document.getElementById("message").textContent  = "Quel bonne pizza";
//         break;
//         case 'pate':
//              document.getElementById("message").textContent  ="J'adore les pate italienne";
//         break;
//         case 'salade':
//              document.getElementById("message").textContent  ="Je mange une peu léger";
//         break;
//         case 'sushi':
//              document.getElementById("message").textContent  ="J'adore la nourriture japonaise";
//         break;
//         default:
//              document.getElementById("message").textContent  ="coucou";
//     }
// }
// console.log(food);
// menu(arg);
// document.getElementById("message").textContent = message;
// menu('sushi');

// document.querySelector("img:nth-of-type(4)").addEventListener("click",menu('sushi'))

// const form = document.getElementById("#form");
// const nameInput = document.getElementById("#name").value;
// const ageInput = document.getElementById("#age").value;
// const passwordInput = document.getElementById("#password").value;
// const errorMsg = document.getElementById("#errorMsg");
// const sucessMsg = document.getElementById("#successMsg");

// let regex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;

// form.addEventListener("submit"), function (event){
//     event.preventDefault();

//     if (regex.test(passwordValue)) {
//         sucessMsg.innerHTML = "Le Formulaire est valider";
//         sucessMsg.style.display = "block";
        
//         }
//         errorMsg.innerHTML = "Veuillez entrer un email valide !";
//         errorMsg.style.display = "block";
// } 






    

