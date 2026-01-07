const tinderUser=new Object() //Singleton Object 

tinderUser.id="123abc"
tinderUser.name="lakshya"
tinderUser.isLogged=false

console.log(tinderUser)

const regularUser={
    email:"some@ggg.com",
    fullName:{
        userFullName:{
            First:"Lakshya",
            Last:"Kumar"
        }
    }
}

console.log(regularUser.fullName.userFullName.First)
console.log(regularUser.fullName?.userFullName.First)

const obj1={1:"a",2:"b"}
const obj2={1:"a",3:"c"}

// const obj3={obj1,obj 2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '1': 'a', '2': 'b' } }
// const obj3=Object.assign({},obj1,obj2)  //{ '1': 'a', '2': 'b', '3': 'c' }
const obj3={...obj1,...obj2}
console.log(obj3)


// const users={
//     {
//         id:1,
//         email="ljs",
//     },
//     {...

//     },
// }

// user[1].email

console.log(Object.keys(tinderUser))
console.log(Object.entries(tinderUser))
console.log(Object.values(tinderUser))
console.log(typeof Object.keys(tinderUser))

console.log(tinderUser.hasOwnProperty("id"))