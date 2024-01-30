const counterInput = document.getElementById('counterInput');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');

function updateCounterColor(value) {
    if (value > 0) {
        counterInput.style.color = 'green';
    } else if (value < 0) {
        counterInput.style.color = 'red';
    } else {
        counterInput.style.color = 'gray';
    }
}

incrementButton.addEventListener('click', () => {
    let value = parseInt(counterInput.value);
    value++;
    counterInput.value = value;
    updateCounterColor(value);
});

decrementButton.addEventListener('click', () => {
    let value = parseInt(counterInput.value);
    value--;
    counterInput.value = value;
    updateCounterColor(value);
});


updateCounterColor(parseInt(counterInput.value));
