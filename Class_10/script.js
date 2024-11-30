//https://www.w3schools.com/js/js_object_display.asp
/*
const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  //document.getElementById("demo").innerHTML =
  //person.name + "," + person.age + "," + person.city;

  let text = "";
  console.log("testa rinda: "+text)
for (let x in person) {
    console.log (x); lue
  text += person[x] + " ";//Text = text + person{x}
  console.log(text);
};
*/
/*
const names_and_values_of_prop_of_person = Object.entries(person);
for (let [x, y] of names_and_values_of_prop_of_person ) {
    //x - property_name
    //y _ property_value
    if(y instanceof Function)
    {console.log(y + "ir funkcijas")}
    console.log(x+": "+y);
    
    //text += Y + "(this value "+ x +"property)"
    text += y + " ";
    console.log(text);
};

console.log("testa rinda" +text);


document.getElementById("demo").innerHTML = text;
*/
function Person(first, last, age, eye,) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "Latvian";
  this.fullName = function() {
    return this.firstName + " " + this.lastName
  };

}
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");

const mySelf = new Person("Johnny", "Rally", 22, "green")



