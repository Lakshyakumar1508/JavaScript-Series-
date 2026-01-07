const myArr=[3,4,56,5,7,8]

console.log(myArr[2])
const Heros=["IronMan","Caption America","Spider","man"]

const myArr2=new Array(20,23,45,67)
console.table(Heros ,myArr2)


// Array Method

console.log(myArr.push(6))
console.log(myArr.push(7))
console.log(myArr.pop())
myArr.unshift(9) //Add on first index
myArr.shift() //Remove the first index element
console.log(myArr)
console.log(myArr.includes(9))
console.log(myArr.indexOf(3))

const newArr=myArr.join()
console.log(myArr)
console.log(newArr)
console.log(typeof newArr)

// slice,splice

console.log("A" ,myArr)

const myn1=myArr.slice(1,3)
console.log(myn1)

console.log("B" ,myArr)

const myn2=myArr.splice(1,3) //Splice remove the index element from the array
console.log(myn2)

console.log("C" ,myArr)