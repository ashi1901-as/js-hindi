//block scope and global scope
let a=10
var b=20

if(true)
{
   let a=20;
    var b=55;
    
}
console.log(a)//10
console.log(b)//20
//var is global but let and const is applied to block codes.

//nested functions=when the child function can easily access the variables
//of parent function
function one()
{
    const username="ashi"
    function two()
    {
        let age=20
        console.log(username)
    }
    //console.log(age)the parent funtion cannot access the variable of child function
    two()
}
one()
//same this goes with conditional statement
function addone(num)
{
    return num+1;
}
console.log(addone(4))
//storing the function in a variable
console.log(addtwo(4))//gives an error due to before initialisation
const addtwo=function(num)//
{
    return num+3
}
