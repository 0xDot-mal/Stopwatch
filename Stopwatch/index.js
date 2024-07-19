const display = document.getElementById(`display`);
let timer = null;
let startTIMER = 0;
let elapsedTIME = 0;
let isRunning = false;

function start(){
    
    if(!isRunning){
        startTIMER = Date.now() - elapsedTIME;
        timer = setInterval(update, 10);
        isRunning = true;
    }
}


function reset(){
clearInterval(timer)
startTIMER = 0;
elapsedTIME = 0;
isRunning = false;
display.textContent = `00:00:00:00`;
}


function stop(){
   if(isRunning){
    clearInterval(timer);
    elapsedTIME = Date.now() - startTIMER;
    isRunning = false;
   } 
}


function update(){
    const currentTIME = Date.now();
    elapsedTIME = currentTIME - startTIMER;
    let hours = Math.floor(elapsedTIME / (1000 * 60 * 90));
    let minutes = Math.floor(elapsedTIME / (1000 * 60) % 60);
    let seconds = Math.floor(elapsedTIME / 1000 % 60);
    let millseconds = Math.floor(elapsedTIME % 1000 / 10);
    hours = String(hours).padStart(2 , "0");
    minutes = String(minutes).padStart(2 , "0");
    seconds = String(seconds).padStart(2 , "0");
    millseconds = String(millseconds).padStart(2 , "0");
    display.textContent = `${hours}:${minutes}:${seconds}:${millseconds}`;

}
