//From validation

let name = document.querySelector("#name")
let email = document.querySelector("#email")
let pass = document.querySelector("#pass")
let from = document.querySelector("form")

from.addEventListener("submit", function (dets) {
    dets.preventDefault;
    if (name.value.length <= 2) {
        document.querySelector("#hide").style.display = "initial"
    }
    else {
        document.querySelector("#hide").style.display = "none"
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
        console.log("Valid Email");
    } else {
        console.log("Invalid Email");
    }

})
