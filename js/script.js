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
let simonsNumbers = [];

// generate numToGuess random numbers
simonsNumbers = numGenerator(numToGuess, simonsNumbers);



console.table(simonsNumbers);