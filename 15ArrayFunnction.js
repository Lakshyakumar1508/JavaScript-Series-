const marvelH=["iron","hulk","spider"]
const dc=["superman","batamn","flash"]

// marvelH.push(dc)

// console.log(marvelH) //Give the array inside array ([ 'iron', 'hulk', 'spider', [ 'superman', 'batamn', 'flash' ] ])
// console.log(marvelH[3][2])

// allhero=marvelH.concat(dc)
// console.log(allhero)  //[ 'iron', 'hulk', 'spider', 'superman', 'batamn', 'flash' ]

const allhero=[...marvelH,...dc]
console.log(allhero) //[ 'iron', 'hulk', 'spider', 'superman', 'batamn', 'flash' ] here we can add more than 2 array

const anoArr=[1,2,3,[4,5,6],[7,8,[3,4]]];
const reaArr=anoArr.flat(Infinity)
console.log(reaArr)

console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name:"Lakhshya"})) //Interesting

let score1=1000
let score2=1040
let score3=1050

console.log(Array.of(score1,score2, score3))