const billInput = document.querySelector('.billInput');
const billClass = document.querySelector('.bill');
const billErr = document.querySelector('.billErr');
const peopleClass = document.querySelector('.people')
const personErr = document.querySelector('.personErr');
const tipErr = document.querySelector('.tipErr')
const tipBtn = document.querySelectorAll('.tip button');
const tipInput = document.querySelector('.tipInput');
const perperson = document.querySelector('.person');
const total = document.querySelector('.total');
const personInput = document.querySelector('.totalPerson');
const resetBtn = document.querySelector('.reset');

let bill = 0;
let tip = 0;
let totalPerson = parseInt(personInput.value);
let totalAmount = 0;
let perPersonAmount = 0;


function calculate() {

    if (bill && tip && totalPerson) {
        resetBtn.disabled = false;
        totalAmount = bill + (bill * tip / 100);
        perPersonAmount = totalAmount / totalPerson;
        perperson.innerText = `$${perPersonAmount.toFixed(2)}`;
        total.innerText = `$${totalAmount.toFixed(2)}`;
    }
    else {
        resetBtn.disabled = true;
    }
    
}

function personFun(value) {
    totalPerson = parseInt(value);
    if(totalPerson == 0) {
        peopleClass.style.borderColor = 'hsla(0, 83%, 44%, 0.714)';
        personErr.style.display = 'block';
    }
    else {
        peopleClass.style.borderColor = 'hsl(189, 41%, 97%)';
        personErr.style.display = 'none';
    }
    calculate();
}

function tipFun(value) {
    tip = parseInt(value);
    if(tip == 0) {
        tipErr.style.display = 'block';
    }
    else {
        tipErr.style.display = 'none';
    }
    calculate();
    resetColor();
}

function billFun(value) {
    bill = parseInt(value);
    if(bill == 0) {
        billClass.style.borderColor = 'hsla(0, 83%, 44%, 0.714)';
        billErr.style.display = 'block';
    }
    else {
        billClass.style.borderColor = 'hsl(189, 41%, 97%)';
        billErr.style.display = 'none';
    }
    calculate()
}

function resetColor() {
    tipBtn.forEach((e) => {
        e.style.background = 'hsl(183, 100%, 15%)';
        e.style.color = '#ffffff'
    })
}

tipBtn.forEach((e) => {
    e.addEventListener('click', () => {
        tipInput.value = '';
        resetColor();
        e.style.background = 'hsl(172, 67%, 45%)';
        e.style.color = '#000'
        if (e.innerText.includes('50')) {
            tip = 50;
            calculate()
        }
        else if (e.innerText.includes('25')) {
            tip = 25;
            calculate()
        }
        else if (e.innerText.includes('15')) {
            tip = 15;
            calculate()
        }
        else if (e.innerText.includes('10')) {
            tip = 10;
            calculate()
        }
        else if (e.innerText.includes('5')) {
            tip = 5;
            calculate()
        }
    })
})


function reset() {
    bill = 0;
    tip = 0;
    totalPerson = 5;
    totalAmount = 0;
    perPersonAmount = 0;
    personInput.value = totalPerson;
    total.innerText = `$0.00`;
    perperson.innerText = `$0.00`
    billInput.value = ''
    resetColor();
    resetBtn.disabled = true
}