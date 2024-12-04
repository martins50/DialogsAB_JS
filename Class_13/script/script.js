// https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbytagname/
// https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/
/*
let btn = document.getElementById("btnCount");

// var headings;

btn.addEventListener("click", () => {
  let headings = document.getElementsByTagName("h2");
  alert(
    `The number of H2 tags (counted by getElementsByTagName): ${headings.length}`
  );
});

/*
btn.addEventListener('dblclick', () => {
    let headings = document.querySelectorAll('h2');
    alert(`The number of H2 tags (counted by querySelectorAll): ${headings.length}`);
});


// -----------------------------------------------------------------------------------------
// https://www.javascripttutorial.net/javascript-dom/javascript-getelementsbyclassname/
// https://www.javascripttutorial.net/javascript-dom/javascript-queryselector/
/*
let menu = document.getElementById("menu");
// let items = menu.getElementsByClassName('case1');
let items = menu.querySelectorAll(".case1");
console.log(items);

let data = [].map.call(items, (item) => item.textContent);
console.log(data);

// -----------------------------------------------------------------------------------------
// https://www.javascripttutorial.net/javascript-dom/javascript-get-parent-element-parentnode/
// https://www.javascripttutorial.net/javascript-dom/javascript-get-child-element/
// https://www.javascripttutorial.net/javascript-dom/javascript-siblings/

let getSiblings = function (e) {
  // for collecting siblings
  let siblings = [];
  // if no parent, return no sibling
  console.log("Node type: "+e.nodeType);
  console.log("Parrent node: "+e.parentNode);
  console.log("! Parrent node: "+!e.parentNode);
  if (!e.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling = e.parentNode.firstChild;

  // collecting siblings
  while (sibling) {
    console.log("Šobrīd analizējamis sibling: "+sibling);
    console.log("Tā mezgla tips: "+sibling.nodeType);
    console.log(`Vai "radinieks" neesmu "es pats": ${sibling !== e}`);

    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    console.log(siblings);
    sibling = sibling.nextSibling;
    console.log("Nākamreiz analizējamis sibling: "+sibling);
    console.log("-------------------------------------------");
  }
  return siblings;
};
*/
// https://www.javascripttutorial.net/javascript-dom/javascript-innerhtml/

let menu = document.getElementById('atsauce');
console.log(menu.innerHTML);
