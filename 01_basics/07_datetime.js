/*let myd=new Date()
console.log(myd)
console.log(myd.toDateString())
console.log(myd.toString())
console.log(myd.toISOString())
console.log(myd.toJSON())
console.log(typeof myd)

let mycre=new Date(2023,0,3)//0 is taken as first month
let mycred=new Date(2023,1,3,7,8)
console.log(mycred.toLocaleString())
let mmyde=new Date("01-19-2004")
console.log(mmyde)
*/
//timestamp=mostly used for creating quizes
let myd=new Date()
let mytime=Date.now()
console.log(mytime/1000)
console.log(myd.getDay())
console.log(myd.toLocaleString('default',{weekday:"long"}))