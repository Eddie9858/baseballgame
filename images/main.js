const play = document.querySelector(".fa-play");
const input = document.getElementById("inputValue");
const score = document.querySelector(".score");
const max_try = document.querySelector(".maxtry");
const win = document.querySelector(".win");
const restartButton = document.querySelector(".restart");
const mynumber = [];
var yournumber = [];
var strike = 0;
var ball = 0;
var maxtry = 10;

play.addEventListener("click", gamestart);
restartButton.addEventListener("click",gamestart);


function gamestart() {
    maxtry = 10;
    score.textContent = strike +"S"+" "+ ball + "B";
    max_try.textContent = maxtry + " trys left";

    for(let i =0; i<3; i++){
        mynumber[i] = String(Math.floor(Math.random() * 10));
    }
    console.log (mynumber);

    play.style.display = "none";
    input.style.display = "flex";
    score.style.display = "block";
    max_try.style.display = "block";
    win.style.display = "none";
    restartButton.style.display = "block";
    maxtry = 10;
    strike = 0;
    ball =0;

};

function getYourNumber() {

    if (isNaN(input.value)) {
        alert("숫자를 입력해주세요!");
    } else if(input.value.length !== 3) {
        alert("세자리 숫자를 입력해주세요!");
    } else {
        for(let i = 0; i<3; i++){
            yournumber[i] = input.value[i];
        }
    }

    console.log(yournumber);
    compareNumbers();
};

function compareNumbers() {

    maxtry--;

    for(let i = 0; i<3; i++){
        if(yournumber[i] === mynumber[i]) {
            strike++;
        } else if(yournumber.includes(mynumber[i])){
            ball++;
        }
    }
    max_try.textContent = maxtry + " trys left";
    score.textContent = strike +"S"+" "+ ball + "B";

    if(strike === 3){
        play.style.display = "block";
        input.style.display = "none";
        score.style.display = "none";
        max_try.style.display = "none";
        win.style.display = "block";
        win.textContent = "정답입니다!";
        restartButton.style.display = "none";
    }else if(maxtry === 0){
        play.style.display = "block";
        input.style.display = "none";
        score.style.display = "none";
        max_try.style.display = "none";
        win.style.display = "block";
        win.textContent = "실패입니다!";
        restartButton.style.display = "none";
    }

    yournumber = [];
    strike = 0;
    ball = 0;

    if (input.value !="") {
        input.value = "";
    }
};





