// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else
// if (nosacījums_vai_saliktais_nosacījums) darbība; darbība_kura_tiks_izpildīta_jebkurā_gadījumā;
// if (nosacījums_vai_saliktais_nosacījums)
//      darbība;
// darbība_kura_tiks_izpildīta_jebkurā_gadījumā;
// if (nosacījums_vai_saliktais_nosacījums) {darbība;}
// if (nosacījums_vai_saliktais_nosacījums) {darbības;}
// if (nosacījums_vai_saliktais_nosacījums) darbība; else savādākā_darbība;
// if (nosacījums_vai_saliktais_nosacījums) {darbības;} else {savādākas_darbības;}

// https://www.w3schools.com/js/tryit.asp?filename=tryjs_ifthen
/*
if (new Date().getHours() < 11) {
  document.getElementById("demo").innerHTML = "Good Morning!";
}

if (new Date().getHours() >= 11 && new Date().getHours() < 19) {
  document.getElementById("demo").innerHTML = "Good Day!";
}

if (new Date().getHours() >= 19) {
    document.getElementById("demo").innerHTML = "Good Evening!";
  }
*/

if (new Date().getHours() >= 11) {
  document.getElementById("demo_if").innerHTML = "Good Morning!";
} else if (new Date().getHours() >= 11 && new Date().getHours() < 19) {
  document.getElementById("demo_if").innerHTML = "Good Day!";
} else {
  document.getElementById("demo_if").innerHTML = "Good Evening!";
}
