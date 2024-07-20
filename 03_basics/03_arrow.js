//this keyword tell about correct context
//when there is a function inside a object this keyword is used
//to invoke that object
const register={
    username:"ashi",
    age:20,
    degree:"BTECH",
    welcome:function()
    {
        console.log(`${this.age} is it`)
        console.log(this.username)
    }
}
register.welcome()
register.username="Vaibhav"
register.welcome
console.log(this)//empty object because it is not pointing to anyof it
//this is not used inside a function can only invoke with object
// function chai()
// {
//     let name="ashi"
// }
// chai()
//arrow function usage
const func=() => {
     let name="ashi"
     console.log(this)//it give empty parenthesis
 }
 //implict return used when there is only one return statement
const addtwo=(num1,num2)=> num1+num2
console.log(addtwo(3,5))
//for returning value through arrow function you need
//the brackets
myarray=[3,4,5,6]
myarray.forEach(()=>{})
 


