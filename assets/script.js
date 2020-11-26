// const users = [
//   {
//     name: "Leia",
//     level: "expert",
//     score: 20,
//   },
//   {
//     name: "Luke",
//     level: "beginner",
//     score: 50,
//   },
//   {
//     name: "Darth Vader",
//     level: "expert",
//     score: 10,
//   },
//   {
//     name: "Chiwaka",
//     level: "beginner",
//     score: 30,
//   },
// ];


//Show the scores of beginner users
var beginnerScoresCard = document.getElementById("person_card_beginner");
var beginnerUsers = usersArray.filter((user) => user.userLevel == "beginner" );
var beginnerResults = beginnerUsers.map((user) => `<div class="person_score_input"><p class="person_name_beginner">${user.userName}</p>
<p class="person_score_beginner"><span class="score_count">${user.userScore}</span> clicks</p></div>`)
beginnerScoresCard.innerHTML = beginnerResults.join(' ');

//Show the scores of expert users
var expertScoreCard = document.getElementById("person_card_expert");
var expertUsers = usersArray.filter((user) => user.userLevel == "expert");
var expertResult = expertUsers.map((user) => `<div class="person_score_input"><p id="person_name_expert">${user.userName}</p>
<p id="person_score_expert"><span class="score_count">${user.userScore}</span> clicks</p></div>`)
expertScoreCard.innerHTML = expertResult.join(' ');
const displayContainer = document.getElementById("display");
const submitButton = document.getElementById("submitBtn");
const startButton = document.getElementById("startButton");

submitButton.addEventListener("click", goToLevelPage);

function goToLevelPage () {
    displayContainer.innerHTML = "";
    displayContainer.innerHTML =`
    <form class="display_container__form" action="">
    <legend class="display_container__legend">Chose your level</legend><br>
    <div class="display_container__div">
        <button type="submit" class="display_container__button" id="beginers">Beginers</button>
        <button type="submit" class="display_container__button" id="experts">Experts</button>
    </div>
</form>`
};

const levelBeginers = document.getElementById("beginers");
const levelExperts = document.getElementById("experts");
let beginnerMode = false;
let expertMode = false;

levelBeginers.addEventListener('click', function (){
    beginnerMode = true;
    goToStartPage();
});

levelExperts.addEventListener('click', function (){
    expertMode = true;
    goToStartPage();
});



function goToStartPage() {
    displayContainer.innerHTML = "";
    displayContainer.innerHTML =`
    <button id="startButton" class="button">Start Game</button>
    `
};

startButton.addEventListener("click", function(){
    let counter = 3;
    let parrafo = document.createElement("p");
    startButton.classList.add("oculto");
    parrafo.style.fontSize = "100px";
    displayContainer.appendChild(parrafo);
    let interval = setInterval(() => {
        parrafo.innerHTML = counter;
        if (counter === 0) {
            clearInterval(interval);
            parrafo.classList.add("oculto");
            // Insertamos la siguiente parte.
        }
        counter--
    }, 1000);
});
