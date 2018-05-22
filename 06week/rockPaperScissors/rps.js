"use strict"
var userChoice = prompt("Do you choose rock, paper or scissors?");
// to capture user input, make prompt a variable
var computerChoice = Math.random();
  if(computerChoice < 0.34) {
    computerChoice = "rock";
  }
  else if (computerChoice <=0.67) {
    computerChoice = "paper";
  }
  else {
    computerChoice="scissors";
  }
// document.write(computerChoice);
// function = an action you ask the computer to perform that you can repeat
var compare = function(x, y) {
  // x, y recognizes the call that's nested inside and is a common practice
  if(x === y){
    return "Tie";
  }
  else if(x === "rock"){
    if(y === "scissors"){
      return "computer wins";
    }
    else{// i picked paper... rock would have been a tie and is already accounted for above
      return "You Win!";
    }
  }
  else if(x === "paper"){
    if(y === "rock"){
      return "computer wins";
    }
    else{// i picked rock... paper would have been a tie and is already accounted for above
      return "You Win!";
    }
  }
  else if(x === "scissors"){
    if(y === "paper"){
      return "computer wins";
    }
    else{// i picked rock... scissors would have been a tie and is already accounted for above
      return "You Win!";
    }
  }
}
document.write("you chose: " + userChoice + "</br>");
document.write("computer chose: " + computerChoice + "</br>");
document.write(compare(computerChoice,userChoice))
