// function is used to run a local block automatically
// first is function
function sum(){
    var num1=12;
    var num2=50;
    var sum=num1+num2;
    console.log(sum);

}
sum()
// now we will use parameters to assign different values
function mulitply(num3:number, num4:number){
    var mulitply=num3*num4
    console.log(mulitply);
}
mulitply(20,10)
// now the use of the return to call only a single statement in the one function
function sum2(num5:number, num6:number){
 //   var num5=12;
   // var num6=50;
    var submation=num5+num6;
    console.log(submation);
    return submation
}




var result=sum2(10,20)+10;
/* now to use the arrow function because function does not obey the law of fundamentals and its is considered as special element and
 it takes much time so to optimized we  use arrow function*/
 var nam=(n1:number,n2:number)=>{
var sum = n1+n2;
console.log("arrow functions",sum)
 }
 nam(200,500)
 // let var const are three different keywords to assign the value to the variable
 // const are used to assign only constants eg. we use it to assign fixed values such as PIE
 // we can use let in the fixed block only and cannot use it outside
 // var can be used to assign value and changes in it also outside from the box