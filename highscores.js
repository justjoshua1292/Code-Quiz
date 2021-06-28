var highscores= JSON.parse(localStorage.getItem("highscores"));
var scoringol = document.getElementById("scoring");

for (let index = 0; index < highscores.length; index++) {
var newli = document.createElement("li")
newli.textContent(highscores[index].initials+" - " + highscores[index].score)
    scoringol.appendChild(newli)
}