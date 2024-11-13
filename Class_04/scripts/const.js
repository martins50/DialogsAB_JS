<!doctype html>
<html>
<body>
/*------------------------- tests ar const -----------------------------------*/
const z = 10;
console.log("z mainīgā vērtība pirms {}: " + z);
{
  //console.log("z mainīgā vērtība iekš {}: " + z);
  //z = 20;
  //console.log("z mainīgā vērtība iekš {} un pēc = darbības: " + z);
  const z = 100;
  console.log("z mainīgā vērtība iekš {} un pēc atkārtotas const: " + z);
}
console.log("z mainīgā vērtība pēc {}: " + z);
//z = 30;
//console.log("z mainīgā vērtība pēc {} un pēc = darbības: " + z);
//const z = 40;
//var z = 40;
//let z = 40;/console.log("z mainīgā vērtība pēc {} un pēc atkārtotas connst: " + z);
</body>
</html>