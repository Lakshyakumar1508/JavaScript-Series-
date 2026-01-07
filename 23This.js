const user={
    username:"lakshya",
    price:900,

    WelcomeMsg:function(){
        console.log(`${this.username},Welcome `)
        console.log(this)  //{ username: 'Lks', price: 900, WelcomeMsg: [Function: WelcomeMsg] }
    }

}
user.WelcomeMsg()

user.username="Lks"
user.WelcomeMsg()
console.log(this) //{}

// Array Function

function chai0(){
    console.log(this)
}
chai0()

//Output
/*{ <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Getter/Setter],
  btoa: [Getter/Setter],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  crypto: [Getter]
} */

const chai=() =>{
    let username="Lakshya"
    console.log(this.username)
}
chai()  //undefined

const add=(num1,num2) =>{
    return num1+num2
}
console.log(add(2,3))

const addt=(num1,num2) => num1+num2
console.log(addt(2,3))

const add2=(num1,num2) => {num1+num2}  //use return then work
console.log(add2(2,3))