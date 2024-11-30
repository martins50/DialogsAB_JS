// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
//https://www.w3schools.com/js/js_functions.asp


function funkcijas_vaards_1() {}

function funkcijas_vaards_2() {
  return 1;
}

function square_1(number) {
  return number * number;
}

const square_2 = function (number) {
  return number * number;
};

const factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
  };

funkcijas_vaards_1();
funkcijas_vaards_2();

document.getElementById("demo").innerHTML = `Skaitļa ${5} kvadrāts ir ${square_1(
  5
)}`;
document.getElementById("demo").innerHTML =
  document.getElementById("demo").innerHTML +
  `<br>Skaitļa ${7} kvadrāts ir ${square_2(7)}`;

console.log(`Faktoriāls no ${3} ir ${factorial(3)}`); // 3! = 1 * 2 * 3 = 2! * 3 = 1! * 2 * 3   NB! 0! = 1