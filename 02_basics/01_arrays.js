//array
/*const ar1=[2,3,4,"ashi"]//array can have same n different datatype element
const arr2=[2,3,1,5,6]
const arr3=new Array(2,3,1,5,3)//another way of declaraing array

console.log(arr2[2])
console.log(arr2.length)

//Array Methods
arr2.push()//used for pusing element in the array
//arr2.pop()//used to remove the last elemnet from the array
//arr2.unshift(3)//used for adding element in the first index
console.log(arr2)
arr2.shift()//remove the first element
console.log(arr2)
console.log(arr2.includes())
arr2.indexOf()
arr2.join//used for joining all the elements of an array into an string*/
//usage of slice and splice
const arr4=[2,1,4,5]
console.log(arr4)
const q1=arr4.slice(1,3)
console.log(q1)
console.log(arr4)
const q2=arr4.splice(1,3)
console.log(q2)
console.log(arr4)
//in slice the last value of range not included
//while in splice its included and that whole array also get removed from the original array
