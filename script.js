let button1 = document.getElementById("num1");
let button2 = document.getElementById("num2");
let button3 = document.getElementById("num3");
let button4 = document.getElementById("num4");

let timeron;
let timer;
let init = 3600000;
init = 2000;
let secs;
let min;
let ispaused = false;

button1.addEventListener("click", start);
button2.addEventListener("click", pause);
button3.addEventListener("click", stopTimer);
button4.addEventListener("click", quit);


const cd = document.getElementById("cd");

function start(){
    if (ispaused === true){
        ispaused = false;
        button1.textContent = `1. Set a study timer for 1 hour`;
        timeron = null;
    }
    if (timeron /= null){
        return
    }
    
    timeron = true;
    timer = setInterval(() => {
    init--;
    const min = Math.floor(init / 60000);
    const secs = init % 60;
    if (init > 0){
        cd.textContent = `Studying Time- ${min}:${secs < 10 ? "0" : ""}${secs}`;
    }
},1000);
    if (init === 0){
        document.getElementById("msg").hidden = false;
        cd.hidden = true;
    }
    
}

function pause(){
    if (timeron === null){
        return;
    }
    ispaused = true;
    clearInterval(timer);
    button1.textContent = `1. Resume`;
}

function stopTimer(){
    if (timeron === null){
        return;
    }
    cd.textContent = `Time- 00:00`;
    clearInterval(timer);
    timeron = null;
    init = 3600000;
}

function quit(){
    window.close();
}
