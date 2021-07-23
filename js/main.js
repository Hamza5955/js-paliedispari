/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/

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
