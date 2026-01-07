function sayMyName(){
    console.log("lks");
    console.log("lakshya");
}

sayMyName()

function sum(num1,num2) //Paramter is num1 and num2  
{
    console.log(num1+num2);
}
sum(3,4) //arguments is 3 and 4
sum(3,"a")
sum(3,null)


function sub(num1,num2){
    let result=num1-num2
    return result
}
console.log(sub(3,1))



function loginUser(username){
    if (username === undefined){
        console.log("Please enter name")
    }
    else{
        return `${username} just logged In`
    }
}
console.log(loginUser()) 
console.log(loginUser("lakshya"))



function loginUser2(username="lakshya"){
    if (username === undefined){
        console.log("Please enter name")
    }
    else{
        return `${username} just logged In`
    }
}
console.log(loginUser2())