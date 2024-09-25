const startingMinute=10;
let time= startingMinute*60;

let countdownDisplay= document.getElementById("countdown");


function buttonClicked(){
setInterval(updateCountdown,1000);
}

function updateCountdown(){
    let minute=Math.floor(time/60);
    let seconds=time%60;
    seconds= seconds<10? '0'+seconds : seconds;

    countdownDisplay.innerHTML = `${minute}:${seconds}`;
    time--;
}

