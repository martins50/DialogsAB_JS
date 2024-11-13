// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while

let n = 0;

console.log(`Salidzināšanas rezultāts pirms cikla - ${n} < ${3} ir ${n < 3}`);

while (n < 3) {
  //break;
  n++;
  //continue;
  //console.log(n < 3);
  console.log(
    `Salidzināšanas rezultāts ciklā (pēc n pieauguma) - ${n} < ${3} ir ${n < 3}`
  );
}

console.log(`Salidzināšanas rezultāts pēc cikla - ${n} < ${3} ir ${n < 3}`);
console.log(n);
// Expected output: 3

let a = 1,
  A = 3,
  b = 1,
  B = 4;
while (a <= A) {
  b = 1;
  while (b <= B) {
    console.log(a + " " + b);
    b++;
  }
  a++;
}
