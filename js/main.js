/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/
/*
var j = prompt("Inserire la parola");
console.log(j);

var k = wordReverse(j);
console.log(k);

if (k === j) {
  console.log("la parola è palindroma");
} else {
  console.log("la parola non è palindroma");
}

function wordReverse(word) {
  var l = "";

  for (var i = word.length - 1; i >= 0; i--) {
    l += word[i];
  }

  return l;
}
*/
//soluzione ineficente
/*var k = isPalindrome(prompt("Inserisci una parola"));

function isPalindrome(word) {
  var z = word.split("");
  var j = [];
  console.log(j);
  for (var i = z.length - 1; i >= 0; i--) {
    j.push(z[i]);
  }
  for (var i = 0; i < z.length; i++) {
    if (z[i] == j[i]) {
      return "La parola è palindroma";
    } else {
      return "La parola non è palindroma";
    }
  }
}
console.log(k);
*/
//soluzione otimale
var j = prompt("Inserire una parola");

console.log(palindromo(j));

function palindromo(parola) {
  parolaRevers = parola.split("").reverse().join("");
  if (parolaRevers == parola) {
    return "la parola è palindroma";
  }
  return "la parola non è palindroma";
}
