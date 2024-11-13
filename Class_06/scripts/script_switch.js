/*
switch (analizējamā_izteiksme){
case analizējamās_izteiksmes_iespējamais_stāvoklis_1:
    darbības_1;
case analizējamās_izteiksmes_iespējamais_stāvoklis_2:
    darbības_2;
    break;
case analizējamās_izteiksmes_iespējamais_stāvoklis_3:    
case analizējamās_izteiksmes_iespējamais_stāvoklis_4:    
    darbības_3_4;
    break;
default:
    darbības_default_gadījumā;
}
*/
// ja analizējamā_izteiksme ir ar stāvokli analizējamās_izteiksmes_iespējamais_stāvoklis_1, tad
// tiks izpildītas darbības_1 un darbības_2 (NB! pilda līdz break;)
// ja, pimēram, pēc darbības_3_4 nebūtu break; tad, ja analizējamā_izteiksme būtu ar stāvokli
// analizējamās_izteiksmes_iespējamais_stāvoklis_3 vai _4, tad tiktu izpildītas gan darbības_3_4
// gan darbības_default_gadījumā;

// https://www.w3schools.com/js/tryit.asp?filename=tryjs_switch

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
document.getElementById("demo_switch").innerHTML = "Today is " + day;