//Global Scope
let a=300

//Local(Block) Scope
if(true){ //Curly bracket is a scope not in objects
    let a=10
    const b=20
    var c=30

}

console.log(a)
// console.log(b)
console.log(c)  //
 