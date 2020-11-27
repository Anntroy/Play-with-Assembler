

const display = document.getElementById("display");
const display2 = document.getElementById("display2");
const display3 = document.getElementById("display3");
const display4 = document.getElementById("display4");
const display5 = document.getElementById("display5");
const display6 = document.getElementById("score");

const levelExperts = document.getElementById("experts");
const levelBeginers = document.getElementById("beginers");
const startButton = document.getElementById("startButton");
const meteorite = document.querySelector(".meteorite_container");
const countTitle = document.querySelector("#count_title span");
const spaceship = document.querySelector(".spaceship_container");
const laser = document.getElementById("laser");
const submitButton = document.getElementById("submitBtn");
const playAgain = document.getElementById("play_again");
// const userNameText = document.getElementById("username");
const displayUserScore = document.getElementById("click_count");

let beginnerMode = false;
let expertMode = false;
let scoreCurrentGame = 0;
let page = 1;

submitButton.addEventListener("click", login);
function login(e) {
  e.preventDefault();
  usersArray.push(user);
  controlPage();
}

function controlPage() {
  switch (page) {
    case 1:
      console.log("case 1");
      submitButton.removeEventListener("click", login);
      levelBeginers.addEventListener("click", beginnerOption);
      levelExperts.addEventListener("click", expertsOption);
      display.classList.toggle("oculto");
      display2.classList.toggle("oculto");
      page++;
      break;
    case 2:
      console.log("case 2");
      page++;
      levelBeginers.removeEventListener("click", beginnerOption);
      levelExperts.removeEventListener("click", expertsOption);
      startButton.addEventListener("click", countStart);
      display2.classList.toggle("oculto");
      display3.classList.toggle("oculto");
      break;
    case 3:
      page++;
      console.log("case 3");
      startButton.removeEventListener("click", countStart);
      if (beginnerMode) {
        spaceship.classList.add("oculto");
      }
      startGame();
      display3.classList.toggle("oculto");
      display4.classList.toggle("oculto");
      display6.classList.toggle("oculto");
      break;
    case 4:
      console.log("case 4");
      user.userScore = scoreCurrentGame;
      displayUserScore.innerHTML = scoreCurrentGame;
      page++;
      playAgain.addEventListener("click", controlPage);
      display4.classList.toggle("oculto");
      display5.classList.toggle("oculto");
      break;
    case 5:
      console.log("case 5");
      user.userScore = scoreCurrentGame;
      page = 1;
      playAgain.removeEventListener("click", controlPage);
      submitButton.addEventListener("click", login);
      display5.classList.toggle("oculto");
      display.classList.toggle("oculto");
      break;
  }
}

function beginnerOption(e) {
  e.preventDefault();
  console.log("aqui");
  beginnerMode = true;
  user.userLevel = "beginner";
  controlPage();
}

function expertsOption(e) {
  e.preventDefault();
  expertMode = true;
  user.userLevel = "expert";
  controlPage();
}

function countStart(e) {
  e.preventDefault();
  let counter = 3;
  let parrafo = document.createElement("p");
  startButton.classList.add("oculto");
  parrafo.style.fontSize = "100px";
  display3.appendChild(parrafo);
  let interval = setInterval(() => {
    parrafo.innerHTML = counter;
    if (counter === 0) {
      clearInterval(interval);
      parrafo.classList.add("oculto");
      controlPage();
    }
    counter--;
  }, 1000);
}

function startGame() {
  meteorite.addEventListener("click", changePosition);
  spaceship.addEventListener("click", losePoint);
  postionMeteorite();
  postionSpaceship();
  setTimeout(() => {
    meteorite.removeEventListener("click", changePosition);
    spaceship.removeEventListener("click", losePoint);
    controlPage();
  }, 10000);
  function changePosition(e) {
    scoreCurrentGame++;
    laser.play();
    countTitle.textContent = scoreCurrentGame;
    postionMeteorite();
    postionSpaceship();
    console.log(e);
  }
  function postionMeteorite() {
    meteorite.style.top = getRandomNumberTop() + "%";
    meteorite.style.left = getRandomNumberLeft() + "%";
    meteorite.style.width = getRandomNumberWidth() + "%";
  }
  function postionSpaceship() {
    spaceship.style.top = getRandomNumberTop() + "%";
    spaceship.style.left = getRandomNumberLeft() + "%";
    spaceship.style.width = getRandomNumberWidth() + "%";
  }
  function losePoint() {
    scoreCurrentGame = 0;
    laser.play();
    countTitle.textContent = scoreCurrentGame;
  }
  function getRandomNumberTop() {
    let random = Math.random();
    console.log(random);
    while (random > 0.78) {
      random = Math.random();
    }
    console.log(Math.round(random * 100));
    return random * 100;
  }
  function getRandomNumberLeft() {
    let random = Math.random();
    console.log(random);
    while (random > 0.92) {
      random = Math.random();
    }
    console.log(Math.round(random * 100));
    return random * 100;
  }
  function getRandomNumberWidth() {
    let random = Math.random();
    console.log(random * 10);
    return random * 10;
  }
}



let usersArray = [
  {
    userName: "Leia",
    userLevel: "expert",
    userScore: 20,
  },
  {
    userName: "Luke",
    userLevel: "beginner",
    userScore: 50,
  },
  {
    userName: "Darth Vader",
    userLevel: "expert",
    userScore: 10,
  },
  {
    userName: "Chiwaka",
    userLevel: "beginner",
    userScore: 30,
  },
  {
    userName: "Ewok",
    userLevel: "beginner",
    userScore: 10,
  },
];

class User {
    constructor(username, userlevel, userscore) {
      this.userName = username;
      this.userLevel = userlevel;
      this.userScore = userscore;
    }
  }
  
  const user = new User("", "", "");
  user.userName = username.value;


// function displayCurrentUser() {
//   if (user.userLevel == "beginner") {
//     beginnerUsers.push(user);
//   } else if (user.userLevel == "expert") {
//     expertUsers.push(user);
//   }
// }
// displayCurrentUser();


//Show the scores of beginner users
var beginnerScoresCard = document.getElementById("person_card_beginner");
var beginnerUsers = usersArray.filter((user) => user.userLevel == "beginner");

var beginnerResults = beginnerUsers.map(
  (
    user
  ) => `<div class="person_score_input"><p class="person_name_beginner">${user.userName}</p>
<p class="person_score_beginner"><span class="score_count">${user.userScore}</span> clicks</p></div>`
);
beginnerScoresCard.innerHTML = beginnerResults.join(" ");

//Show the scores of expert users
var expertScoreCard = document.getElementById("person_card_expert");
var expertUsers = usersArray.filter((user) => user.userLevel == "expert");
var expertResult = expertUsers.map(
  (
    user
  ) => `<div class="person_score_input"><p id="person_name_expert">${user.userName}</p>
<p id="person_score_expert"><span class="score_count">${user.userScore}</span> clicks</p></div>`
);
expertScoreCard.innerHTML = expertResult.join(" ");
