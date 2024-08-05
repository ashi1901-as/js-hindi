//for few true values the condition is true
const useremail="sinha.ashi000gmail"//won't work when the string is true
if(useremail)
{
    console.log("have ID");
}
else
{
    console.log("no ID");
}
//falsy values false,0,-0,bigInt,0n,
//null,undefined,NaN 

//truthy values "0",'false'," ",[],{}
//function(){} 
const empobj={}
if(Object.keys(empobj).length===0){
    console.log("empty object")
}
//Nullish Coalescing Operator(??):null undefined
let val1=5??10
let v2
v2=null??20??3
console.log(v2)//whatever first value it gets got printed
console.log(val1)

//Ternary Operator
//(con?true:false)