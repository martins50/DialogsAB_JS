
function doSomething() {
    alert('Form submitted!');

    //location.assign('/Nodarbiba_10/level_1/?q1=1&q2=2');

    let fname = document.getElementById("fname").innerHTML;
    let fname = document.getElementById("fname").value;
    console.log(fname);
    let lname = document.getElementById("lname").value;
    location.assign('https://www.w3schools.com/action_page.php?fname=J&lname=D');
    location.assign('https://www.w3schools.com/action_page.php?fname=' + fname + '&lname='+ lname);
    location.assign(`https://www.w3schools.com/action_page.php?fname=${fname}&lname=${lname}`);

    return false;
}
