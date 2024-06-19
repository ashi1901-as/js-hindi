//``=string interpolation
const name="ashi"
const age=20
console.log(name+age)//olf-fashioned method for string concatenation
console.log(`hello everyone this is ${name} and my age is ${age} `)

//another way of string declaration
const gameName=new String('ashi-sinha')
console.log(gameName)
//using this we can use many functions of strings
//key-value pair
console.log(gameName.charAt(3))
console.log(gameName.indexOf('i'))
console.log(gameName[3])
console.log(gameName.toUpperCase())
console.log(gameName.length)
const string=gameName.substring(0,4)
console.log(string)
//4th part got excluded
//in slicing we can give negative value
const anstring=gameName.slice(-8,3)
console.log(anstring)
//trim is used to remove all the spaces extra in it
const anotherstring=" ashi likes none"
console.log(anotherstring.trim())
console.log(anotherstring.replace('likes','yes'))
//include method can also be used
console.log(anotherstring.split(""))//splitting on the basis of nospace
console.log(anotherstring.split(" "))//on the basis of spaces
//split used for array conversion of string
