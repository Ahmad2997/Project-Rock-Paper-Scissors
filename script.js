//console.log("hello, world!");
let ComputerScore=0;
let HumanScore=0;
function getComputerChoice(){
    return  getRandomInt(3);
}
console.log(getComputerChoice());
function getHumanChoice(){

}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}