// function getRandomInt(min, max) {
//     var startButton = document.getElementByClassName("commencez");
//     var solution = Math.round(Math.random() * 10) + min;
//     return solution;
// }
// console.log(getRandomInt(0, 30));
//         var compare = function(event) {
//         var champschiffre = document.getElementById("champschiffre").value;
//         if (champschiffre === solution){
//         console.log("Gagné !");
//         };
//         else {
//             console.log("Perdu ...");
//         }
//         };
//         startButton.addEventListener('click', compare);

var champschiffre = document.getElementById("champschiffre");
var bouton = document.getElementById("commencez");
var resultat = document.getElementById("resultat");
var reponse = Math.ceil(Math.random() * 30)
function verifier() {
  if (champschiffre.value < reponse) {
    resultat.innerHTML = "Trop petit !";
  }
  if (champschiffre.value == reponse) {
    resultat.innerHTML = "Excellent !";
  }
  if (champschiffre.value > reponse) {
    resultat.innerHTML = "Trop grand !";
  }
}

bouton.onclick = verifier;
