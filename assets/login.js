const userName = document.getElementById("username");
const submitUserNameBtn = document.getElementById("submitBtn");

// let usersArray = [];

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
];

class User {
  constructor(username, userlevel, userscore) {
    this.userName = username;
    this.userLevel = userlevel;
    this.userScore = userscore;
  }
}

const user = new User("", "", "");

userName.addEventListener("keyup", () => {
  submitUserNameBtn.disabled = !userName.value;
});

submitUserNameBtn.addEventListener("click", function (e) {
  e.preventDefault();

  user.userName = userName.value;
  usersArray.push(user);
});
