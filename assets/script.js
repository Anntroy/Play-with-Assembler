

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
