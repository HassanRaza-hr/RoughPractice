let todos:number[]=[1,2,3,4,5,6,7,]
console.log(todos.length)
if(todos.length%2==0){
    todos.splice(todos.length/2-1,2,)
    console.log(todos)
}
else{
    todos.splice(todos.length/2,1,)
    console.log(todos)
}