// https://www.w3schools.com/tags/tag_input.asp
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions

function logKey(event) {
    //console.log(event);
    console.log(`You pressed "${event.key}".`);
  }
fname_input = document.getElementById("fname");
fname_input.addEventListener("keydown", logKey);

//document.getElementById("passwd").addEventListener("keydown",function (event) {console.log(`You pressed "${event.key}".`);})
document.getElementById("passwd").addEventListener("keydown",(event) => {console.log(`You pressed "${event.key}".`);})

