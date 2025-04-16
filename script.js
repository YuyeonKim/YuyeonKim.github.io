
let studentArray = ["Yuyeon", "Jessica", "Kevin", "Julliette", "lucy"];

console.log("hello",studentArray[1]);
console.log("hello",studentArray[2]);
console.log("hello",studentArray[3]);

for (leti=0; i<studentArray.length; i++)
{
    console.log("HELLO", studentArray[i]);
}


//string variables = use quotes 
let myname = "yuyeon";
let myID = "s4101278";
let myNewName ="Jess";
let myCity = "Melbourne";

//number variables
let number = 10;
let number2 = parseInt ("20");
let sum = number * number2;
console.log("total is", sum);
const grade = 75

if (grade >=75) {
    console.log("I got distinction");
}else{
    console.log("below distinction");
}
const weather = "sunny";

if (weather === "sunny")
{
    console.log("today is sunny weather");
}else{
    console.log("too bad no sun today");
}
// + for addition as well as joining text
// -b for substraction 
//* for multiplication 
// / for division 

const msg = `<h1>Today's weather is ${weather}
<p> this is so nice to see the sun again </p>

</h>`;
console.log(msg);

//boolean variables - true or false
let isThisEvening = false;
let isThisRMIT = true;

//object variables {}
const myStudentDetails ={
    name: "Yuyeon",
    id: 1234
    homeTown: "Townsville",
};

let array = [2, 4, 6, 8, 10];
let student1 = "Yuyeon";
let student2 = "Jessica";
console.log(student1, student2);
let studentArray = ["Yuyeon", "Jessica", "Kevin", "Kevbabu"];
console.log(studentArray[2]);
console.log(studentArray[0]);
//console.log(myStudentDetails);
//console.log("my hometown is", myStudentDetails.homeTown);

//console.log("Hi");
//console.log("How are you?");
// this is a comment 

// I am declaring a variable called 'myNmae' to contain my name 
//console.log("Hi, I am",myname);
//console.log("Hi, my student id is",myID);
//myName = "Jessica";
//console.log("Hi, I am", myName);
//let myNewName = prompt("what is your name?");
//console.log("Hello", myNewName);
//console.log("Hello", myNewName, myCity);

//if you know the value is not going to chnage, define it using const
//or else use let
let a = 30;
{
    let a = 10;
    console.log("Hello",a);
}
console.log("Hello",a);