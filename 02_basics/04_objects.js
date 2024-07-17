//const tinder=new Object()//singleton object
const tind={}//non-singleton object
const tinder={
    name:"ashi",
    class:"2nd year",
}
console.log(tinder)

//object inside object
const school={
    name:{
        locality:{
            n:"Nda"
        }
    }
}
//console.log(school.name.locality.n)
//merging of two or more object using object assign we did used that empty parenthsis
//because that will be our area where the value is stored
//and the obj3=={}
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj3=Object.assign({},obj1,obj2)
//console.log(obj3)
//we can also use the spread operator
//const obj3={...obj1,...obj2}
//now this to do when the data comes from database
const ar1=[
    {
        id:"a"
    },
    {

    },
    {

    }
]
//console.log(ar1)
//console.log(ar1[0].id)
//console.log(Object.keys(tinder))//this type is an arra
//console.log(Object.entries(tinder))
//console.log(tinder.hasOwnProperty("name"))//boolean result will be given

//destructuring of objects
const jshindi={
    name:"js",
    price:"90",
    couname:"hitesh",
}
jshindi.couname//one way of retrival
const {couname : instructor}=jshindi;//another way
console.log(instructor)//here we gave couname another name as instructor

//Api in json
//json formatter