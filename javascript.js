document.writeln("this is an external file");
document.writeln(2=="2"); // check value only
document.writeln(2==="2"); // check the value and data type

let temp = 90;
if(temp>=100){
    document.writeln("Boiling!");
}else if(temp < 100 && temp >= 60){
    document.writeln("Hot");
}else if (temp < 60 && temp >= 30){
    document.writeln("Warm");
}else{
    document.writeln("Cold");
}

let t = 70;
var Status;
if(t>=100){
    Status="boiling";
}else{
    Status = "not boiling";
}

// or with shorthand
var Status = (t >=100)?"boiling":"not boiling";

//switch

let day = 2;

switch(day){
    case 1:  document.writeln("sunday"); break;
    case 2: document.writeln("monday"); break;
    case 3: document.writeln("Tuesday"); break;
    default:
        document.writeln("none");
}

// loops (for)

for(var i=1; i<5; i++){
    document.writeln(i);
}

// (while)
var i = 1;
while(i<5){
    document.writeln(i);
    i++;
}

do{
    document.writeln(i);
}while(i<5);






// function
function hello(){
    console.log("Hello")
}
hello();

function sum(n1, n2){
    var result = n1 + n2;
    console.log(result);
}
sum(2,3);

//or
function sum(n1=3, n2=4){
    var result = n1 + n2;
    console.log(result);
}
sum();

// with return value
function multiply(num1, num2){
    var result = num1*num2;
    return result;
}

console.log(multiply(2,5));




var y = function(){
    console.log("this is y");
}

y();

function callAnotherFn(anotherFn){
    console.log("this is the calling function");
    anotherFn()
}

callAnotherFn(function(){
    console.log("this is the other fnction")
});
//or
callAnotherFn(y);


// another context
// it  is  same difference
var x = (() => {
    console.log("this is x")
})







for (let i = 0; i < 5; i++){
    var z= 70;
    console.log(i);
}
console.log(7);




// function hello(){
//     let r = 2;
//     var m = 9;
//     console.log("Hello");
// }
// console.log(r);


// array 
var arr = [100,200,400,500,"name","major"]
console.log(arr);
console.log(arr[3]);
arr[5] = 900;
console.log(arr);
console.log(arr.length);
// with pop
arr.pop();
console.log(arr);

// with push
arr.push(800);
console.log(arr);
// with splice (deletion).   3 element one is required and others are option
arr.splice(4);  // from index 4 to end of the list
console.log(arr);
//or
arr.splice(4,2);
console.log(arr);
// or you can add
arr.splice(4,1,"omar");
console.log(arr);



// shift
arr.shift(); // it will deletes the first element
console.log(arr);


// unshift
arr.unshift(123);
console.log(arr);



var arr1 = [10,20,30,40,20,20]
console.log(arr1.indexOf(20));
console.log(arr1.lastIndexOf(20));

// if you want to take the specific element in the list
var minArr = arr1.slice(2,5);
console.log(minArr);

// concatenate
var arr2 = [1,2,3];
var arr3 = [7,8,9];
var newArray = arr2.concat(arr3);
console.log(newArray);


// join 
let arrstr = ["welcome", "Ali", "and", "Sara"]
let str = arrstr.join(" ");
console.log(str);

// iterate the array with for loop
for(var i = 0; i <arrstr.length; i++){
    console.log(arrstr[i]);
}

// with forEach
arrstr.forEach(function(element){
    console.log(element);
})


for (var element of arrstr){
    console.log(element);
}


// with (sort)
let arr4 = ["a", "wlcome", "omar", "rady"];
console.log(arr4.sort());

// with numbers
let arr5 = [12,2,5];
console.log(arr5.sort((a,b)=>a-b));


// DOM.     getElemetnById  it will returns one element  but if you see s it is vice verse
var obj1 = document.getElementById("first")
console.log(obj1);

var obj2 = document.getElementsByClassName("child");
// or var obj2 = document.getElementsByClassName("child")[1];
console.log(obj2);

// you can access with tag name
var obj3 = document.getElementsByTagName("h2");  // it will returns array
console.log(obj3); // return array


var obj3 = document.getElementsByTagName("h2")[1];
console.log(obj3);


// you can also access the css

var obj5 = document.querySelector("#container");


obj1.innerHTML = "first";

obj1.innerHTML = "first <img src = 'web.png'>";

var obj6 = document.getElementsByTagName("input")[0];
obj6.setAttribute("placeholder", "name");
obj6.setAttribute("value", "omar rady");

// obj5.style. = "white";



let element1 = document.createElement("div");
let text = document.createTextNode("text");

element1.appendChild(text);
document.body.appendChild(element1);

var obj8 = document.getElementById("s");
obj8.addEventListener("click",function(){
    alert("hi")
})


// call back
function sayHello() {
  console.log("Hello!");
}

function doSomething(callback) {
  console.log("Doing something...");
  callback(); // هنا بننادي على الكول باك
}

doSomething(sayHello);





// creating object
let person = {
    name: "Ali",
    age: "25",
}
console.log(person.name);
