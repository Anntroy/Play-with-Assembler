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
let beginnerMode = false;
let expertMode = false;
let scoreCurrentGame=0;

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
    const levelExperts = document.getElementById("experts");
    const levelBeginers = document.getElementById("beginers");
    
    function goToStartPage() {
        displayContainer.innerHTML = "";
        displayContainer.innerHTML =`
        <button id="startButton" class="button">Start Game</button>
        `
        const startButton = document.getElementById("startButton");
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
                    goToGamePage();
                }
                counter--
            }, 1000);
        });
        function goToGamePage() {
            displayContainer.innerHTML = "";
            displayContainer.innerHTML =`
            <div class="meteorite_container">
                <img id="meteorite" class="meteorite" src="/assets/src/images/meteorite.png" alt="meteorite">
            </div>
            <div class="spaceship_container">
                <img id="spaceship" class="meteorite" src="/assets/src/images/spaceship.png" alt="spaceship">
            </div>
            <audio id="laser"src="assets/src/audio/laser.mp3"></audio>
            `
            const meteorite=document.querySelector(".meteorite_container");
            const countTitle=document.querySelector("#count_title span");
            const spaceship=document.querySelector(".spaceship_container");
            const laser=document.getElementById("laser");
        
            meteorite.addEventListener('click',changePosition)
            spaceship.addEventListener('click',losePoint)
            if(beginnerMode){
                spaceship.classList.add("oculto");
            }
            postionMeteorite();
            postionSpaceship();
            activateCooldown();
            function changePosition(e){
                scoreCurrentGame++
                laser.play();
                countTitle.textContent=scoreCurrentGame;
                postionMeteorite();
                postionSpaceship();
                console.log(e)
            }
            function postionMeteorite(){
                meteorite.style.top= getRandomNumberTop() + "%";
                meteorite.style.left= getRandomNumberLeft() + "%";
                meteorite.style.width= getRandomNumberWidth() + "%";
            }
            function postionSpaceship(){
                spaceship.style.top= getRandomNumberTop() + "%";
                spaceship.style.left= getRandomNumberLeft() + "%";
                spaceship.style.width= getRandomNumberWidth() + "%";
            }
            function losePoint(){
                scoreCurrentGame=0;
                laser.play();
                countTitle.textContent=scoreCurrentGame;
            }
            function getRandomNumberTop(){
                let random=Math.random();
                console.log(random)
                while(random>0.78){
                    random=Math.random();
                }
                console.log(Math.round(random*100))
                return random*100;
            }
            function getRandomNumberLeft(){
                let random=Math.random();
                console.log(random)
                while(random>0.92){
                    random=Math.random();
                }
                console.log(Math.round(random*100))
                return random*100;
            }
            function getRandomNumberWidth(){
                let random=Math.random();
                console.log(random*10)
                return random*10;
            }
            function activateCooldown(){
                setTimeout(()=>{goToScorePage()},10000)
                user.userScore=scoreCurrentGame;
            }
            function goToScorePage() {
                displayContainer.innerHTML = "";
                displayContainer.innerHTML =`
                <div class="display_container__your_score">
                    <h2>YOUR SCORE</h2>
                    <p>Your 10 seconds are done!</p>
                    <p>You have made <span id="click_count">0</span> clicks</p>
                    <button class="btn" id="play_again">Play again</button>
                    <button class="btn" id="play_again">Play again</button>
                </div>
                `
            };
            };
        };
    levelBeginers.addEventListener('click',beginnerOption);
    function beginnerOption(){
        console.log("aqui")
        beginnerMode = true;
        goToStartPage();
    }

    levelExperts.addEventListener('click', function (){
        expertMode = true;
        goToStartPage();
    });
};






