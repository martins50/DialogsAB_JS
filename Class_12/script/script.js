var agent = "";

if (navigator.userAgent.includes("Chrome")) {
  agent = "Chrome";
} else {
  agent = "nonChrome";
}

const query = "?agent=" + agent;
const url = location.origin + location.pathname + query;

// tā nedaram! - būs mūžīga rekursija :-)
// location = url;
/*
navigator.getBattery().then((battery) => {
    console.log(battery.charging);
    console.log(battery.level);
})
*/

// https://www.javascripttutorial.net/javascript-dom/javascript-getelementbyid/
// https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/

// getElementById
const elem_reference_1 = document.getElementById("first");

// getElementById querySelector equivalent
const elem_reference_2 = document.querySelector("#first");

// https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbyname/

let btn = document.getElementById("btnRate");
let output = document.getElementById("output");
let choice = document.getElementById("choice");

btn.addEventListener("click", () => {
  let rates = document.getElementsByName("rate");
  rates.forEach((rate) => {
    if (rate.checked) {
      output.innerText = `You selected: ${rate.value}`;
    }
  });
});

choice.addEventListener("click", () => {
  let rates = document.getElementsByName("rate");
  rates.forEach((rate) => {
    if (rate.checked) {
      console.log(rate.value+' checked is '+rate.checked);
    }
  });
});