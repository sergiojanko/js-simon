// Genero un numero random da min a max

function getRandomNumber(min, max, isMaxIncluded){
    if (isMaxIncluded) {
    max++;
    }
    return Math.floor(Math.random() * (max - min) + min);
}

// Genero num numeri random da 1 a 100

function numGenerator(num, numList) {
while (numList.length < num) {
    numList.push(getRandomNumber(1, 100, true));
}
return numList;
}

// * Variables declaration
const numToGuess = 5;
var simonsNumbers = [];
var guessedNumbers = [];
var wrongNumbers = [];

// generate numToGuess random numbers
simonsNumbers = numGenerator(numToGuess, simonsNumbers);

// show alert

let alertMessage = "I numeri da indovinare sono: " + simonsNumbers.join(",")
alert(alertMessage);

setTimeout(function(){
    for (let i = 0; i < numToGuess; i++){
        do
            var userNumber = parseInt(prompt("Inserisci il " + (i+1) + "° numero"));
        while(!userNumber || isNaN(userNumber));
        if (simonsNumbers.includes(userNumber)){
            guessedNumbers.push(userNumber);
        }
    }
    //  * Output alert
    alert("Hai indovintato " + guessedNumbers.length + " numeri: " + guessedNumbers.join(","));
}, 3000);



console.table(simonsNumbers);