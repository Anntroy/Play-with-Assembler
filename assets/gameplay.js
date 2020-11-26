const meteorite=document.querySelector(".meteorite_container");
const countTitle=document.querySelector("#count_title span");
const spaceship=document.querySelector(".spaceship_container");
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