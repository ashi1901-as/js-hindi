function addnum(number1,number2)
{
    //console.log(number1+number2)
}
addnum(3,4)
//number1&number2=parametres
//the passed number during the function call is argument
//making the function return some value
function sunum(num1,num2)
{
    let vari=num1-num2;
    return vari;
       //or
    return (num1+num2);
}
const res=sunum(5,1)
console.log(res);

function loginuser(name)
{
    return(`${name} is nice`);
}

console.log(loginuser("Ashi"))
console.log(loginuser())//undefined

//when we don't know how many parametres are going to be passed
function price(...num1)//...=res operator(hold any number of values)
{
    return num1;
}
console.log(price(2,89,345,800))//array type

//using object with function
const user={
    name:"ashi",
    year:"3rd"
}
function handleobj(anyobject)//will refer now any object avail
{
     console.log(`name is ${anyobject.name} and in ${anyobject.year}`)
}

handleobj({
    name:"ashi",
    year:"4th"
})

//using array with function

const arr=[2,6,78]
function arraysecond(arrget)
{
    return arrget[2];
}
console.log(arraysecond(arr));
console.log(arraysecond([4,6,1,5,2]))
