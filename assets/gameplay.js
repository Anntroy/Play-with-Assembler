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
            // Insertamos la siguiente parte.
        }
        counter--
    }, 1000);
});





const meteorite=document.querySelector(".meteorite_container");
const countTitle=document.querySelector("#count_title span");
const spaceship=document.querySelector(".spaceship_container");
const laser=document.getElementById("laser");
const displayContainer = document.getElementById("display");
let scoreCurrentGame=0;


meteorite.addEventListener('click',changePosition)
spaceship.addEventListener('click',losePoint)
// if(beginnerMode){
//     spaceship.classList.add("oculto");
// }
postionMeteorite();
postionSpaceship();
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
setTimeout(()=>{alert("FINISH "+ scoreCurrentGame)},10000)




