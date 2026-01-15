let p=document.querySelector("p")
p.addEventListener("click",function(){
    p.style.color="green";
})
function dbclick(){
    p.style.color="red";
}

p.addEventListener("dblclick",dbclick);

p.removeEventListener("dblclick",dbclick)


// Input Event
let input=document.querySelector("input")
input.addEventListener("input",function(dets){
    console.log(dets.data);
    console.log("types");
    if (dets.data==null) console.log("remove")  //backspace==null this show the remove  
})


// Change  event tb chlta hai jab appke koi input select or text area me koi change ho jaye
let sel=document.querySelector("select")
let dev=document.querySelector("#dev")
dev.style.textTransform="capitalize "
sel.addEventListener("change",function(dets){
    console.log(dets.target.value); //always see in the console where the value is stored to change them 
    // dev.textContent="Selected"
    dev.textContent=`${dets.target.value} Selected` //Show the selected_number selected 
    // ${dets.target.value} show the dynmaic value that change when we select
})

// Keydown 
let hma=document.querySelector("#ma")
window.addEventListener("keydown",function(dets){
    if (dets.key==" ") 
        {hma.textContent="spc";}
    else
        { hma.textContent=dets.key;}
})

// Click on button open the another function
let btn=document.querySelector("button")
let fileimp=document.querySelector("#fileimp")
btn.addEventListener("click",function(){
    fileimp.click();
})

// Change 
fileimp.addEventListener("change",function(dets){
    console.log(dets.target.files[0].name)
    const file=dets.target.files[0].name
    if (file) btn.textContent=dets.target.files[0].name
})


// After submit the from the page doesnot reload 
let form = document.querySelector("form");
// Only select text inputs inside the form, exclude submit and file inputs
let selAll = form.querySelectorAll('input[type="text"]');

form.addEventListener("submit", function (dets) {
    dets.preventDefault();

    let name = selAll[0].value.trim();
    let info = selAll[1].value.trim();
    let occupation = selAll[2].value.trim();
    let profilePic = selAll[3].value.trim();

    if (!profilePic.startsWith("http")) {
        profilePic = "https://via.placeholder.com/100";
    }

    let card = document.createElement("div");
    card.classList.add("card");

    let profile = document.createElement("div");
    profile.classList.add("profile");

    let img = document.createElement("img");
    img.src = profilePic;

    let h3 = document.createElement("h3");
    h3.textContent = name;

    let h5 = document.createElement("h5");
    h5.textContent = info;

    let p = document.createElement("p");
    p.textContent = occupation;

    profile.appendChild(img);
    card.append(profile, h3, h5, p);

    main.appendChild(card);

    selAll.forEach(function(e){
        if(e.type!="submit"){
            e.value="";
        }
    })

    form.reset();
});
