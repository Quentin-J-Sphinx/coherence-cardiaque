function start(e) {
    e.preventDefault();

    sctElt.classList.add('divBreathe');
    sctElt.classList.remove('hidden');
    document.body.prepend(sctElt);
    
    const respirationElt = document.getElementById('breathe-anim');
    const osciElt = document.getElementById('osc');
    
    if (respirationElt.checked === true){
        divElt.classList.add('divBreathe-round');
        divElt.classList.remove('divBreathe-osc');
    }
    
    else if (osciElt.checked === true){
        divElt.classList.add('divBreathe-osc');
        divElt.classList.remove('divBreathe-round');
    }
    
    const valueSelect = selectElt.value;
    if (divElt.classList.contains('divBreathe-round')){
        if (valueSelect === '5'){
        divElt.className ='divBreathe-round';
        }
        else if(valueSelect === '6'){
            divElt.className = 'divBreathe-round divBreathe-round--six';
        }
        else if (valueSelect === '4'){
            divElt.className = 'divBreathe-round divBreathe-round--quatre';
        }
        else if (valueSelect === '3'){
            divElt.className = 'divBreathe-round divBreathe-round--trois';
        }
    }

    else if(divElt.classList.contains('divBreathe-osc')){
        if (valueSelect === '5'){
            divElt.className ='divBreathe-osc';
            }
            else if(valueSelect === '6'){
                divElt.className = 'divBreathe-osc divBreathe-osc--six';
            }
            else if (valueSelect === '4'){
                divElt.className = 'divBreathe-osc divBreathe-osc--quatre';
            }
            else if (valueSelect === '3'){
                divElt.className = 'divBreathe-osc divBreathe-osc--trois';
            }
    }
        console.log(valueSelect);

    sctElt.append(divElt);
    divElt.append(timerElt);
    timerElt.append(countdownElt);
    
    
    const checkElt = document.getElementById('sound');
    const audioElt = document.getElementById('audio-player');
    
    if (checkElt.checked === true){
        audioElt.play();
    }
    

    // Convert minutes to seconds
    let time = timeSet* 60;
    
    // Get the HTML element that will display the countdown
    // const countdownEl = document.getElementById('countdown');
    
// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }
    
    countdownElt.textContent = `${minutes}:${seconds}`;
    
    // Stop the countdown if the time has reached 0
    if (time == 0) {
        clearInterval(countdownInterval);
        sctElt.classList.add('hidden');
        countdownElt.textContent = '';
    }
    
    // Decrement the time by 1 second
    time--;
}

//Fermer la cohérence cardiaque au clic
sctElt.addEventListener('click', () => {
    if(sctElt.classList.contains('divBreathe')){
        sctElt.classList.add('hidden')
        countdownElt.textContent = '';
        clearInterval(countdownInterval);
        const audio = document.getElementById('audio-player');
        audio.pause();
    }
})
}

const startBtn = document.getElementById('start');
const startMobile = document.getElementById('start-mobile')
const sctElt = document.createElement('section');
const divElt = document.createElement('div');
const timerElt = document.createElement('p');
const selectElt = document.getElementById('breathe');
const countdownElt = document.createElement('span');
// countdownElt.textContent = "5:00";
countdownElt.setAttribute('id', 'countdown');

const inputElt = document.getElementById('duration');
const barElt = document.getElementById('bar')

let timeSet = 5;

inputElt.addEventListener('input', () => {
    timeSet = parseFloat(inputElt.value);
    barElt.value = parseFloat(inputElt.value);
})

barElt.addEventListener('input', () => {
    timeSet = parseFloat(barElt.value);
    inputElt.value = parseFloat(barElt.value);
})

// inputElt.addEventListener('input', () => {
// barElt.value = inputElt.value;
// })

startBtn.addEventListener('click', start);
startMobile.addEventListener('click', start);