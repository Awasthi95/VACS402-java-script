function call(a,b,...param)
{
    let sum=a+b;
    console.log(`Addition of two numbers is : ${sum}`)

let result=0;
for(let i of param)
{
     result+=i;
}
console.log(`addition of remaining number : ${result}`);
}
call(2,3,24,5,6,7,8,9,98,65,74,85,65,25,1,25,14,36,52);