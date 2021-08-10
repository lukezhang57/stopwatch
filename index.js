const displaytime = document.getElementById("time")
const start = document.getElementById("startstop")
const stop = document.getElementById("stop")
const reset = document.getElementById("reset")
const modeButton = document.getElementById("modeIcon")

let active = false;
let mode = "dark";
let interval;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;

startstop.addEventListener("click", function(){
    if (!active){
        interval = setInterval(function(){updateTime()}, 10)
        active = true;
        startstop.innerText = "Stop";
    }
    else {
        clearInterval(interval);
        active = false;
        startstop.innerText = "Start";
    }
})

function updateTime(){
    milliseconds++;
    if (milliseconds === 100){
        seconds++;
        milliseconds = 0;
    }
    if (seconds === 60){
        minutes++;
        seconds = 0;
    }
    let time = "";
    if (minutes < 10){
        time = "0" + minutes + ":"
    }
    else {
        time = minutes + ":"
    }
    if (seconds < 10){
        time = time + "0" + seconds + "."
    }
    else {
        time = time + seconds + "."
    }
    if (milliseconds < 10){
        time = time + "0" + milliseconds
    }
    else {
        time = time + milliseconds;
    }
    displaytime.innerText = time;
}
    
reset.addEventListener("click", function(){
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    displaytime.innerText ="00:00.00"
})

modeButton.addEventListener("click", function(){
    if (mode === "dark"){
        document.body.style.background = "#EFEFEF";
        displaytime.style.color = "#000000";
        modeButton.className = modeButton.className.replace("far fa-sun","far fa-moon");
        mode = "light";
    }
    else {
        modeButton.className = modeButton.className.replace("far fa-moon","far fa-sun");
        document.body.style.background =  "#000000";
        displaytime.style.color = "#FFFFFF";
        mode = "dark";
    }
})


