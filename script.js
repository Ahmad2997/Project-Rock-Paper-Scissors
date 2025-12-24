//console.log("hello, world!");
//rock=0,paper=1,scissors=2
let ComputerScore=0;
let HumanScore=0;
const humanChoice=parseInt(getHumanChoice()); 
console.log("human: " + humanChoice);
const computerChoice=getComputerChoice();
console.log("computer: " + computerChoice);
console.log(playRound(humanChoice,computerChoice));
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
    switch (humanChoice){
        case 0 : if (computerChoice==0) return "Tie";
                 if (computerChoice==1) return "Computer wins"; 
                 if (computerChoice==2) return "Player wins";
        case 1 : if (computerChoice==1) return "Tie";
                 if (computerChoice==2) return "Computer wins"; 
                 if (computerChoice==0) return "Player wins";
        case 2 : if (computerChoice==2) return "Tie";
                 if (computerChoice==0) return "Computer wins"; 
                 if (computerChoice==1) return "Player wins";
        
    }
 return "didn't finish the round";

}