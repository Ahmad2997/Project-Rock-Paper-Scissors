//console.log("hello, world!");
//rock=0,paper=1,scissors=2
let ComputerScore=0;
let HumanScore=0;
playGame();
//const humanChoiceString=getHumanChoice().toLowerCase(); 
//let humanChoice;
//switch (humanChoiceString){
//    case "rock" : humanChoice=0;
//    break;
//    case "paper" : humanChoice=1;
//    break;
//    case "scissors" : humanChoice=2
//    break;
//}
//console.log("human: " + humanChoice);
//const computerChoice=getComputerChoice();
//console.log("computer: " + computerChoice);
//console.log(playRound(humanChoice,computerChoice));
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
                 if (computerChoice==1) {ComputerScore++; return "Computer wins"; }
                 if (computerChoice==2) {HumanScore++; return "Player wins";}
        case 1 : if (computerChoice==1) return "Tie";
                 if (computerChoice==2) {ComputerScore++; return "Computer wins"; } 
                 if (computerChoice==0) {HumanScore++; return "Player wins";}
        case 2 : if (computerChoice==2) return "Tie";
                 if (computerChoice==0) {ComputerScore++; return "Computer wins"; } 
                 if (computerChoice==1) {HumanScore++; return "Player wins";}
        
    }
 return "didn't finish the round";

}
function playGame(){
    for (let i=0; i<5; i++ ){
        console.log(`round ${i+1}`);
        const humanChoiceString=getHumanChoice().toLowerCase(); 
        let humanChoice;
        switch (humanChoiceString){
            case "rock" : humanChoice=0;
            break;
            case "paper" : humanChoice=1;
            break;
            case "scissors" : humanChoice=2
            break;
        }
    console.log("human choice: " + humanChoice);
    const computerChoice=getComputerChoice();
    console.log("computer choice: " + computerChoice);
    console.log(playRound(humanChoice,computerChoice));
    console.log("human score: "+ HumanScore);
    console.log("computer score: "+ComputerScore);
    console.log("---------------");
    }
}