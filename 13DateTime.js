//  1 Jan 1970,UTC

// Date

let myDate=new Date()
console.log(myDate)
console.log(myDate.toString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)


let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString())

let myCreatedDateT=new Date(2023,0,23,5,3)
console.log(myCreatedDateT.toLocaleDateString())

let myCreatedDate2=new Date("2023-01-14")
console.log(myCreatedDate2.toDateString())

let myTime=Date.now()
console.log(myTime)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate)


newDate.toLocaleDateString('default',{
    weekday:"narrow",
    hour:"2-digit",
})

console.log(newDate)