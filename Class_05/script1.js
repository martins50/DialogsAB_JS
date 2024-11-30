const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("array_initial").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi`;

// cars[10] = "Renault"; - tā nedarām!
var N = cars.push("VW"); // var pieveinot vairākus elementus
document.getElementById("array_push").innerHTML = `${cars} masīva izmērs - ${N} elementi`;

N = cars.unshift("Mercedes"); // var pieveinot vairākus elementus
document.getElementById("array_unshift").innerHTML = `${cars} masīva izmērs - ${N} elementi`;

var cars_spliced = cars.splice(1,1,"RAF","Dodge");
document.getElementById("array_splice_with_add").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi (izdzēstie elementi - ${cars_spliced})`;


// delete nedarām
//delete cars[0];
//document.getElementById("array_delete").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi`;

var car_last = cars.pop();
document.getElementById("array_pop").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi (izdzēstais elements - ${car_last})`;

var car_first = cars.shift();
document.getElementById("array_shift").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi (izdzēstais elements - ${car_first})`;

cars_spliced = cars.splice(1,2);
document.getElementById("array_splice_without_add").innerHTML = `${cars} masīva izmērs - ${cars.length} elementi (izdzēstie elementi - ${cars_spliced})`;