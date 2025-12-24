//console.log("hello, world!");
let ComputerScore=0;
let HumanScore=0;
console.log(getHumanChoice());
console.log(getComputerChoice());

function getComputerChoice(){
    return  getRandomInt(3);
}
function getHumanChoice(){
 let humanChoice=prompt("Rock, Paper, Scissor?");
 return humanChoice;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function playRound(humanChoice,computerChoice){
    
}