const score=300

const balance =new Number(100)
console.log(balance)


console.log(typeof balance.toString())
console.log(balance.toFixed(3))

const otherNum=23.566

console.log(otherNum.toPrecision(3))

const hun=1000000

console.log(hun.toLocaleString('en-IN'))

// Number.MAX_VALUE

console.log(Math)
console.log(Math.abs(-5))
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.min(43,34,5,6,7))

console.log(Math.random())
console.log(Math.floor((Math.random()*10) +1.))

const min=10
const max=20

console.log(Math.floor((Math.random()*(max-min+1)+min)))