const btnPlay = document.querySelector('#play');
const btnBack = document.querySelector('#back');
const audio = document.querySelector('#player');
const iconPlay = document.querySelector('#iconPlay');
let timerID;

const btnIcons = ["https://cdn.glitch.global/eb75a835-7885-4846-b82e-ffc76e6b3f22/icon_play.png?v=1653691678176", "https://cdn.glitch.global/eb75a835-7885-4846-b82e-ffc76e6b3f22/icon_pause.png?v=1653691675275", "https://cdn.glitch.global/eb75a835-7885-4846-b82e-ffc76e6b3f22/icon_playback.png?v=1653691681278"];
btnPlay.addEventListener('click', () =>  {

    if (amountTime > 0) {
        
        if (audio.paused) {
            audio.play();
            iconPlay.src=btnIcons[1];
            timerID = setInterval(calculateTime, 1000);
        }
        else {
            audio.pause();
            iconPlay.src=btnIcons[0];
            clearInterval(timerID);
        }
    }
    else {
        amountTime = timer*60;
        audio.play();
        iconPlay.src=btnIcons[1];
        timerID = setInterval(calculateTime, 1000);
    }
})

btnBack.addEventListener('click', () => {
    window.open("https://pstnv-asmr-sounds.glitch.me/", "_self");
})

let timer = 5;
let amountTime = timer*60;
function calculateTime() {
    const countdown = document.querySelector('#countdown');
    let minutes = Math.floor(amountTime/60);
    let seconds = amountTime%60;
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    countdown.textContent = `${minutes} : ${seconds}`;
    amountTime--;
    if (amountTime < 0) {
        clearInterval(timerID);
        countdown.textContent = `00:00`;
        audio.pause();
        iconPlay.src=btnIcons[2];
    }
}