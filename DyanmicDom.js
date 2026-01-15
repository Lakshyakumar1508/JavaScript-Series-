// Append
let h2=document.createElement("h2")
h2.textContent="H2 ME HELLO"
document.body.append(h2)  //prepend use for before i.e., top in the body & append for after  i.e., last in the body

//Prepend
let h3=document.createElement("h3")
h3.textContent="H3 WALO KAISE HO"
document.querySelector("body").prepend(h3) //top in the body 

// appendChild and //remove Child  remove the tags 
let h4=document.createElement("h4")
h4.textContent="H4 WALO KAISE HO";
document.querySelector("div").appendChild(h4);
// document.querySelector("#container").appendChild(h4);
// document.querySelector(".class").appendChild(h4);

// style update using js change the css
let h12= document.querySelector("h1")
h12.style.color="red";
h12.style.backgroundColor="black"
h12.style.textTransform="capitalize "
console.dir(h12)

// Add the class on the tags
let h5=document.querySelector("h5")
h5.classList.toggle("class");
h5.textContent="HELLLO JIII THIS IS H5";

