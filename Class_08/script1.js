// https://www.w3schools.com/tags/tag_input.asp
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Functions

logKey = function (event) {
  //console.log(event);
  console.log(`You pressed "${event.key}".`);
};

fname_input = document.getElementById("fname");
fname_input.addEventListener("keydown", logKey);

//document.getElementById("passwd").addEventListener("keydown",function (event) {console.log(`You pressed "${event.key}".`);})
document.getElementById("passwd").addEventListener("keydown", (event) => {
  console.log(`You pressed "${event.key}".`);
});

/*
function logKey(event) {
    //console.log(event);
    console.log(`You pressed "${event.key}".`);
  }
*/

// https://stackoverflow.com/questions/67248064/getting-the-result-from-a-fetch-function-in-javascript
// https://stackoverflow.com/questions/49432579/await-is-only-valid-in-async-function
// https://mixedanalytics.com/blog/list-actually-free-open-no-auth-needed-apis/

async function callApi(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

(async function () {
  let data = await callApi("https://dog.ceo/api/breeds/image/random");
  console.log(data);
  image_link = data.message;
  document.getElementById("image").src = image_link;
})();