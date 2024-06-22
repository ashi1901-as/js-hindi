//objects(keys-value)-literals&constructor
//singelton object created when from constructor


Object.create//this created using object constructor
//object literals
const sym1=Symbol ("key1")
const user={
     name:"ashi",
    age:20,
    location:"patna",
    email:"loggedin",
    lastloggeddays:["Monday","Tuesday"],
    [sym1]:"key1"
}
console.log(user.email)
console.log(user["email"])
console.log(user[sym1])

//value to change
user.email="sinha@gmail.com"
//Object.freeze(user)
//console.log(user)
//using of functions in objects
user.func1=function(){
    console.log("name is bad")
}
console.log(user.func1()) 
//if tou want to reference the object value in same object
//use= this
user.func2=function()
{
    console.log(`hello this is ${this.name}`)
}
console.log(user.func2())
