//selector and eventhandler
document.getElementById('decrease').addEventListener ('click', decreaseCounter);
document.getElementById('reset').addEventListener ('click', resetCounter);
document.getElementById('increase').addEventListener ('click', increaseCounter);
let counterNumber = 0;
number.innerHTML = counterNumber;

//function
function decreaseCounter (e) {
    e.preventDefault();
    console.log("Decrease Counter");
    document.getElementById('number')
    counterNumber = counterNumber-1;
    number.innerHTML = counterNumber;
    colorCounter();

}

function resetCounter (e) {
    e.preventDefault();
    console.log("Reset Counter");
    let counterNumber = 0;
    number.innerHTML = counterNumber;
    number.style.color='black';
}

function increaseCounter (e) {
    e.preventDefault();
    console.log("Increase Counter");
    counterNumber = counterNumber+1;
    number.innerHTML = counterNumber;
    colorCounter();
}

function colorCounter () {
    if (counterNumber<0){
        number.style.color='red';
    }
    else if (counterNumber>0){
        number.style.color='green';
    }
    else if (counterNumber==0){
        number.style.color='black';
    }
}
