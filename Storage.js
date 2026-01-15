// localStorage ~5mb


// localStorage.setItem("name","Lakshya");  //Store and Update the data its overwrite the old data 
// let val=localStorage.getItem("name") //Fetch the data
// console.log(val)
// localStorage.removeItem("name") // remove the data


//SesssionStorage  Use for the temporary Store the data ~5mb
// sessionStorage.setItem("name","Lakshya")

//Cookies -> Browser me chota data me save krne ke liye yeh use hota hai ~4kb
//        -> Cookies me jo v data store karoge wo data page reload pr automatic server pr jayega

// document.cookie="email=lakshya@gmail.com"

// localStorage.setItem("friend",JSON.stringify(["lks","kb","SS"]))  //JSON.stringify convert the array into string because the localStorage doesnot store the array and alll 

// let fr=JSON.parse(localStorage.getItem("friend"))
// console.log(fr)






function setDarkorLight() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        // System is in dark mode
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        // System is in light mode
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
}


// Listen for system theme change
window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", setDarkorLight);


document.body.classList.add(localStorage.getItem("theme"))

let btn = document.querySelector("button")
btn.addEventListener("click", function () {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark")
        document.body.classList.add("light")

        localStorage.setItem("theme", "Light");
    }
    else {
        document.body.classList.remove("light")
        document.body.classList.add("dark")

        localStorage.setItem("theme", "dark");
    }
})

if (localStorage.getItem("theme")) {
    document.body.classList.add(localStorage.getItem("theme"))
}
else {
    // Apply mode on page load
    setDarkorLight();
}