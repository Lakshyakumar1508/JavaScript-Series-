//Async/Await
console.log("Hello")
console.log("Hello2")
setTimeout(()=>{
    console.log("HEllo3")
},2000)
console.log("Hello4")


//Callback Pattern *ek function ko agr aap ek aur function bhej de rhe ho parameter mein to woh parameter wala function kehalata h callback*
function RunAFterSomeTime(fun){
    setTimeout(
        fun,
        Math.floor(Math.random()*10)*1000)
}

RunAFterSomeTime(function(){
    console.log("Callback Function")
})

//callback hell this is not use
function CBH(username,cb,id){
    setTimeout(()=>
    {console.log(`Profile le kr aoo ${username}`),2000})
    cb({username,id:1212});
}

function sarePost(id,cb){
    setTimeout(()=>{
        cb({id:id,post:["Hey","Hello"]})
    },1000)
}

CBH("Lakshya",function(profileData){
    sarePost(profileData.id,function(post){
        console.log(post)
    })
    console.log(profileData)
})


//Promuses aap ek promise banate ho jo ki do states me se ek state me ja skta h or to woh resole hoga or to reject btt we have to code for both state

let pr=new Promise(function(res, rej){
    setTimeout(() => {
    let rn=Math.floor(Math.random()*10)
    if(rn>5) res("resolved with "+ rn);
    else rej("rejected with "+ rn);
    },3000)
})

pr.then(function(val){
    console.log("then",val)
}).catch(function(val){
    console.log("catch",val)
})     //catch rejected with 3

//Async,Await
async function abcd(){
    try{
    let val=await pr;}
    catch(err){
        console.log(err)
    }
}

abcd()  //rejected with 3

