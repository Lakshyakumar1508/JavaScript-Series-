// document.querySelector
// document.querySelectorAll
// document.getElementById
// document.getElementsByClassName

let h11=document.getElementById("h11");
console.log(h11); 
console.dir(h11); 

let abx=document.getElementsByClassName("abx")
 console.dir(abx)

let abc=document.querySelector("h1")
console.dir(abc)

let abcd=document.querySelectorAll("h1")
console.dir(abcd)


// Change the frontend text
let h1=document.querySelector("h1")
console.dir(h1);
h1.textContent="Hello Lakshya"; //Change the text
h1.innerText="Hello"  //Change the text
h1.innerHTML="<i>Lakshya</i>"   //we can write the html in this 
// h1.hidden=true;  Hide the h1 tags

// Change the attribute
let a=document.querySelector("a")
a.href="http://www.google.com"
a.setAttribute("href","www.google.com")  //setAttribute
console.log(a.getAttribute("href"))  //show the value of Attribute
// a.removeAttribute("href")  //Remove the Attribute
 
