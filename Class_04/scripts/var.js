/*------------------------- tests ar var -----------------------------------*/
var x = 10;
console.log("x mainīgā vērtība pirms {}: " + x);

{
  console.log("x mainīgā vērtība iekš {}: " + x);
  x = 20;
  console.log("x mainīgā vērtība iekš {} un pēc = darbības: " + x);
  var x = 100;
  console.log("x mainīgā vērtība iekš {} un pēc atkārtotas var: " + x);
  var xx = 1000;
}

console.log("x mainīgā vērtība pēc {}: " + x);
console.log("xx mainīgā vērtība pēc {}: " + xx);
x = 30;
console.log("x mainīgā vērtība pēc {} un pēc = darbības: " + x);
var x = 40;
console.log("x mainīgā vērtība pēc {} un pēc atkārtotas var: " + x);