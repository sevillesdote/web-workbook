"use strict"
var userChoice = prompt("Pick a number between 0 and 500.");
var eval1 = function(x) {
  if((x >= 80) && (x <= 120)) {
    return " is within 20 of 100.";
  }
  else if((x >= 380) && (x <= 420)) {
    return " is within 20 of 400.";
  }
  else{
    return " is not within 20 of our targets. Try again...";
  }
}
document.write("you chose: " + userChoice + "</br>");
document.write(userChoice + " " + eval1(userChoice));
