//  https://www.w3schools.com/js/tryit.asp?filename=tryjs_array_find

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);
//let first = numbers.findIndex(myFunction);
//let first = numbers.findLast(myFunction);
//let first = numbers.findLastIndex(myFunction);

document.getElementById("array_find").innerHTML = "First number over 18 is " + first;
//document.getElementById("array_find").innerHTML = "Index of first number over 18 is " + first;
//document.getElementById("array_find").innerHTML = "First (from end) number over 18 is " + first;
//document.getElementById("array_find").innerHTML = "Index of first (from end) number over 18 is " + first;

function myFunction(value, index, array) {
  console.log(value, index, value > 18, array);
  return value > 18;
}