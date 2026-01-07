//  Primitive datatypes(7)
// String , Number,Boolean ,null ,undefinied ,Symbol ,BigInt

const id=Symbol('123')
const anoid=Symbol('123')
console.log(id ===anoid)

const bigNum=2345748392n
console.log(typeof bigNum)

// Javascripts is dynamically types languages

// Reference Datatypes or Non-Primitives 
//  Array ,Objects, Functions


const heros=["Hello","Lakshya", "Kumar"] //Array

let intro={
    name:"Lakshya",
    age:21,
}  //Objects

const myFunction=function(){
    console.log("Hello")
} //Function

