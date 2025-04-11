// just to prevent then function calling of display in side the cal func even not to call two function to display the result 
function display(res){
    console.log('Addition of two number is ${res}');
}
function calculation(a,b,cb){
    let sum=a+b;
    cb(sum);

}
calculation(4,3,display);

function first(){
    console.log("print first");
}
function second(){
    console.log("print second");
}

function third(){
    console.log("print third");

}
/*first();
setTimeout(second,1000);
third();
*/
first();
setTimeout(()=>{
    console.log("print second");
},2000);
third()

