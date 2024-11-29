// https://www.javascripttutorial.net/javascript-bom/javascript-window/

var counter = 1;
var showCounter = () => console.log({ counter });

console.log(counter);
console.log(window.counter);

showCounter();
window.showCounter();

const inner_width = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;
console.log(window.innerWidth, document.documentElement.clientWidth, document.body.clientWidth);
console.log("Pārlūka loga iekšējās daļas platums - "+inner_width);

const inner_height = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;    
console.log(window.innerHeight, document.documentElement.clientHeight, document.body.clientHeight);
console.log("Pārlūka loga iekšējās daļas augstums - "+inner_height);

const outer_width = window.outerWidth;
console.log("Pārlūka loga ārejās daļas platums - "+outer_width);

const outer_height = window.outerHeight;
console.log("Pārlūka loga ārējās daļas augstums - "+outer_height);

//let url = 'http://127.0.0.1:5500/Class_07/'
//let jsWindow = window.open(url,'Class_07');

//let url = 'http://127.0.0.1:5500/Class_07/'
//let jsWindow = window.open(url,'Class_07');
/*
let jsWindow = window.open(
    //"https://rtu.lv",
    "http://127.0.0.1:5500/Class_08/index.html",
    //"RTU",
    "C08",
    'height=600,width=800');

    setTimeout(() => {
        jsWindow.resizeTo(600, 300);
    }, 3000);
    
    setTimeout(() => {
        jsWindow.moveBy(150,-60);
    }, 4000); 

    setTimeout(() => {
        jsWindow.close();
    }, 20000);  
    */
/*
    alert("lietotāj info");



    let jsWindow = window.open(
        //"https://rtu.lv",
        "http://127.0.0.1:5500/Class_08/index.html",
        //"RTU",
        "C08",
        'height=600,width=800');
    
        setTimeout(() => {
            jsWindow.resizeTo(600, 300);
        }, 3000);
        
        setTimeout(() => {
            jsWindow.moveBy(150,-60);
        }, 4000); 
    
        setTimeout(() => {
            jsWindow.close();
        }, 10000);
*/
/*
        //alert("lietotāj info");
        let result = window.confirm("Labi vai Atcelt"); 

        let message = result ? 'You clicked the Labi button' :
    'You clicked the Cancel button';

alert(message)

let lang = prompt('What is your favorite programming language?');

let feedback = lang.toLowerCase() === 'javascript' ? `It's great!` :
    `It's ${lang}`;

alert(feedback);
*/
/*
var timeoutID;

function showAlert() {
    timeoutID = setTimeout(alert, 3000, 'setTimeout Demo!');
    console.log("New TimeoutID -"+timeoutID);
}

function clearAlert() {
    console.log("timeoutID to be cleared -"+timeoutID);
    clearTimeout(timeoutID);
}
*/

//https://www.javascripttutorial.net/javascript-bom/javascript-setinterval/

let intervalID;

function start() {
  intervalID = setInterval(toggleColor, 1000);
  console.log("New intervalID - " + intervalID);
  document.getElementById("start").disabled = true;
}

function stop() {
  clearInterval(intervalID);
  console.log("intervalID to be cleared - " + intervalID);
  document.getElementById("start").disabled = false;
}

function toggleColor() {
  let e = document.getElementById("flashtext");
  e.style.color = e.style.color == "red" ? "blue" : "red";
}