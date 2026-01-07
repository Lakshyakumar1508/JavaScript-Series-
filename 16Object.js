//Singleton

// Object.create
// Object Literals

const mySys=Symbol("Key1")

const user={
    name:"Lakshya",
    "name1":"Laksya",//Cannot access using dot
    age:21,
    [mySys]:"myKey1", //Using Square bracket for symbol datatype
    isLoggesIn:false,
    LastLoginDay:["Mon","Sat"]
}

console.log(user)
console.log(user["name"])
console.log(user.name)
console.log(typeof user.mySys)

user.name="Lakshya Kumar"
// Object.freeze(user)
console.log(user)

user.greeting=function(){
    console.log("Hello")
}

console.log(user.greeting)
console.log(user.greeting())

user.greeting2=function(){
    console.log(`Hello ${this.name}`)
}

console.log(user.greeting2())

console.log(user)