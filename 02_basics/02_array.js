//concat is used to add the elements in the new array
//while push is used to add the elements in the existing array
const arr1=["ashi","is","a","good"]
const arr2=["girl","and","likes","choclates"]
//arr1.push(arr2)
//console.log(arr1)
//const arr3=arr1.concat(arr2)
//console.log(arr3)

//spread uses (...)
const arr4=[...arr1,...arr2]
console.log(arr4)
//flat=it is used to make all the arrays within array into an single array
//flat(infinity)=
console.log(Array.from("Ashi"))
console.log(Array.from({name:"Ashi"}))//confused and will
//give a empty array as don't know to make either of key or value
Array.of()//make array of different variables

