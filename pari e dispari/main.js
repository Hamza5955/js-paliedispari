var j = prompt("pari o dispari?", "pari");
var k = parseInt(prompt("Scegli un numero da 1 a 5", "1"));

var r = randomNumber();
var sum = r + k;

//la somma è pari o dispari ?
var result = evenOdd(sum);
var message =
  "il tuo numero " + k + ". compuert num " + r + ". La somma e " + result;
var m;

//verifico chi a vinto
if (result === j) {
  m = " Hai vinto!!!";
} else {
  m = " Hai perso!!!";
}
console.log(("result".innerText = message + m));

function randomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

function evenOdd(num) {
  if (num % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }
}
