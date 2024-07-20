//Immediately Invoked Function Expression
(function chai(){
    console.log("DB Connected");
})();
//()():mostly used for invoking the function immidiately
//also for not polluting the globalspace
//for sometimes using two iife we need the
//termination of line using ;
(()=>{
    console.log("DB COnnected two ");
})();

((name)=>
{
    console.log(`DB ${name}`)
})("ashi")