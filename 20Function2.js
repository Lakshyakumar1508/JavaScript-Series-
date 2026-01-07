function cart(...num){
    return num
}

console.log(cart(200,300,400))

const user={
    name:"Lakshya",
    price:999,
}

function handleObj(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
}

handleObj(user)

const myArray=[200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myArray))