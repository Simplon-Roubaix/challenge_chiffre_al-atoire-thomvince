function getRandomInt(min, max) {
    var startButton = document.getElementByClassName("commencez");
    var solution = Math.round(Math.random() * (30 - 0)) + min;
    return solution;
}
console.log(getRandomInt(0, 30));
        var compare = function(event) {
        var champschiffre = document.getElementById("champschiffre").value;
        if (champschiffre === solution){
        console.log("Gagné !");
        };
        else {
            console.log("Perdu ...");
        }
        };
        startButton.addEventListener('click', compare);
