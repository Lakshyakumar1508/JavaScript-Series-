//One time
let tm = setTimeout(function () {
    console.log("Hello")
}, 5000)

//Regular Intervals
let it = setInterval(function () {
    console.log("Intervals")
}, 5000)

//clearTimeout
clearTimeout(tm);

//clear Interval
clearInterval(it)

let count = 10

let ct = setInterval(function () {
    if (count >= 1) {
        count--
        console.log(count);
    }
    else {
        clearInterval(ct)
    }
}, 1000)

let btn = document.querySelector("#btn");
let progress = document.querySelector(".progress");
let status = document.querySelector(".status");

let percent = 0;
let timer;

setInterval(function () {
    if (percent <= 99) {
        percent += 1
        count++
        progress.style.width = `${count}%`
        status.textContent = `Downloading... ${percent}%`;
    }
    if (percent === 100) {
        clearInterval(timer);
        status.textContent = "Download Complete ✅";
    }
}, 20)
