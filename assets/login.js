const userName = document.getElementById("username");
const submitUserNameBtn = document.getElementById("submitBtn");
let usersArray = [];

class User {
    constructor(username, userlevel, userscore) {
      this.userName = username;
      this.userLevel = userlevel;
      this.userScore = userscore;
    }
  }
  
  const user = new User('testUsername','testLevel','testScore');

userName.addEventListener('keyup', () => {
    submitUserNameBtn.disabled = !userName.value
});

submitUserNameBtn.addEventListener("click", function (e) {
    e.preventDefault();

    user.userName = userName.value;
    usersArray.push(user);
});


