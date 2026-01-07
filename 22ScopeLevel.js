function one(){
    const username="Lakshya"

    function two(){
        const website="Youtuve"
        console.log(username)
    }
    // console.log(website)  //cannot access

    two()
}
one()


if (true){
    const username="lakshya";

    if (username==="lakshya"){
        const website="Yt"
        console.log(username + website)
    }
}
// console.log(username) //This is also not accessed


console.log(add(3))
function add(value){
    return value+1
}
console.log(add(5))


// console.log(addtwo(3)) //Cannot happen
const addtwo=function(value){
    return value+2
}
addtwo(4)