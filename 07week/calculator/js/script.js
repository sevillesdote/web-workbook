function addNumber(num) {
  document.querySelector("#results").value += num;
}

function clearResults() {
  document.querySelector("#results").value = "";
}

function addition() {
  document.querySelector("#results").value += "+";
}

function subtraction() {
  document.querySelector("#results").value -= "-";
}

function multiply() {
  document.querySelector("#results").value *= "*";
}

function division() {
  document.querySelector("#results").value /= "/";
}

function equals() {
  document.querySelector("#results").value = eval(document.querySelector("#results").value);
}

function deleteLast() {
  let current = document.querySelector("#results").value;
  document.querySelector("#results").value = current.slice(0, -1);
}

// function addNumber(num) {
//   document.querySelector("#results").value += num;
// }
//
// function clearResults() {
//   document.querySelector("#results").value = "";
// }
//
// function addition() {
//   document.querySelector("#results").value += "+";
// }
//
// function equals() {
//   document.querySelector("#results").value = eval(document.querySelector("#results").value);
// }
//
// function deleteLast() {
//   let current = document.querySelector("#results").value;
//   document.querySelector("#results").value = current.slice(0, -1);
// }
