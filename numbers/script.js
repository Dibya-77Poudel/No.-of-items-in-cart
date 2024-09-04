
let state = 0;

const stateValueElement = document.getElementById('stateValue');
const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');


function updateStateDisplay() {
    stateValueElement.textContent = state;
}

decrementBtn.addEventListener('click', () => {
    state++;
    updateStateDisplay();
});
incrementBtn.addEventListener('click', () => {
    if (state > 0) {  
        state--;
        updateStateDisplay();
    }
});

updateStateDisplay();
