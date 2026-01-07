// Stack and Heap

// Stack memory are used in Primitives  types that means it gives the copy of the variable

let myYoutubeName="Lakshya"
anotherName=myYoutubeName;
console.log("anotherName",anotherName)
anotherName="kumar"
console.log("Youtubename",myYoutubeName)
console.log("anotherName",anotherName)
console.log()

// Heap memory are used in Non-Prmitives types that means it gives the refrences of the variables
let user1={
    email:"lakshya@gmail.com",
    upi:"123@abl",
}

let user2=user1
console.log(user2)
console.log()

user2.email="lakshya123@gmail"
console.log(user1)
console.log(user2)