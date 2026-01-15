//Event bubbling  (Base2.html)
document.querySelector("#nav").addEventListener("click",function(){
    alert("clicked");
})

document.querySelector("ul").addEventListener("click",function(dets){
    dets.target.style.textDecoration="line-through"
})

//Event Capturing
let a=document.querySelector(".a");
let b=document.querySelector(".b");
let c=document.querySelector(".c");
let btn=document.querySelector("#button");

btn.addEventListener("click",function(){
    console.log("button click");
})

c.addEventListener("click",function(){
    console.log("c click");
},true)

b.addEventListener("click",function(){
    console.log("b click");
},true)

a.addEventListener("click",function(){
    console.log("a click");
}, true ) //capture phase on


let input=document.querySelector("input")
let span=document.querySelector("span")

input.addEventListener("input",function(){
    let left=30- input.value.length;
    span.textContent=left;

    if(left<0){
        span.style.color="red";
    }
    else{
        span.style.color="black";
    }
})

