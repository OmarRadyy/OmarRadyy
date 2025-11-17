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

