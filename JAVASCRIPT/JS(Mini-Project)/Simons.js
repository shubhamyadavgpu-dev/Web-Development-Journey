let gameseq = [];
let userseq = [];


let btns = ["yellow", "green", "red", "blue"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 500);
}

function levelUp() {
  userseq = [];
  level++;
  h2.innerText = `level ${level}`;
  let randind = Math.floor(Math.random() * 3);
  let randcolor = btns[randind];
  let randBtn = document.querySelector(`.${randcolor}`);
  // console.log(randind);
  // console.log(randcolor);
  // console.log(randBtn);
  gameseq.push(randcolor);
  console.log(gameseq);
  gameFlash(randBtn);
}

function checkAns(index){
  if(userseq[index] === gameseq[index]){
    if(userseq.length === gameseq.length){
      setTimeout(levelUp , 1000);
    }
    // console.log("Same Value");
  }
  else{
    h2.innerHTML = ` GAME OVER your score was <b>${level} </b> </br>Press any key to restart the game`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor="white";
    } , 150)
    reset();
  }
}

function btnpress(){
  let btn = this ;
  //console.log(this);
  userFlash(btn);
  userColor = btn.getAttribute("id");
  // console.log(userColor);
   userseq.push(userColor);
  
   checkAns(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click" , btnpress);
  }
   function reset(){
    started  = false;
    gameseq = [];
    userseq = [];
    level = 0;
}