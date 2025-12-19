// creating object
let person = {
    name: "Ali",
    age: "25",
};
console.log(person.name);
person.name = "omar";
console.log(person);

person.major = "cs";
console.log(person);

delete person.age;
console.log(person);

console.log(Object.keys(person)); // will print all the keys
console.log(Object.values(person));
console.log(Object.entries(person)); // will print key and value in arrays

let person1 = {};
Object.assign(person1,person, {job:"enginner"});
console.log(person1);


// and you can also
let per = {
    name: "ali",
    age: "age",
    hello:function(){
        console.log("Hello " + this.name);
    }
}
per.hello();
console.log(per.name);


for(var k in  person1){
    console.log(k + ": the value is " + person1[k]);
}


// this is the constructor
function Person(name, age, major){
    this.name = name,
    this.age = age,
    this.major = major
}
let p1 = new Person ("omar", 20, "Ai")
console.log(p1.name)

let p2 = new Person("bakr", 19, "english commerce")
console.log(p2.name)

// with prototype
function Animal(name){
    this.name = name
}

Animal.prototype.speak = function(){
    console.log(this.name + " makes sound")
}

console.log(Animal.prototype)

// inheritence
function Dog(name){
    Animal.call(this,name)
}
Dog.prototype = Object.create(Animal.prototype)

let d = new Dog("puppy")
d.speak()






// class
class Animal1{
    constructor(name){
        this.name = name
    }
    speak(){
        console.log(this.name + " makes a sound")
    }
}

class Dog1 extends Animal1{
    constructor(name, type){
        super(name)
        this.type  = type
    }

    speak(){
        console.log(this.name + " barks")
    }

    getInfo(){
        console.log(this.name + " makes a sound")
    }
}

let d1 = new Dog1("puppy", "german type")
d1.getInfo()





// json file
let str = JSON.stringify(person1)
console.log(str)

// we want to return it back in object
let obj =  JSON.parse(str)
console.log(obj)
