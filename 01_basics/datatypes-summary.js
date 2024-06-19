/*//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);*/

// https://262.ecma-international.org/5.1/#sec-11.4.3


//Stack(primitive),Heap(Non-Primitive)

let number=34
let value=number
value=40
console.log(number)//34
console.log(value)//40
//this means that all stack datatypes are primitive and the value variable on;y get the 
//copy of variable number so number remained with the original variab;le 
let obj1={
     name:"ashi",
     age:12
}
let obj2=obj1
obj2.name="bhai"

console.log(obj1)
console.log(obj2)
//the object is an non-primitive means heap and here there is reference no copy of value so both the object variable value got changed.
