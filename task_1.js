// Функція генерує випадковe шістнадцятковe числj
// Приклад: 3674144588129547
function generateRandomNumber() {
    let randomNumber = '';
    for (let i = 0; i < 16; i++) {
      randomNumber += Math.floor(Math.random() * 10);
    }
    return randomNumber;
}

let randomNumber = generateRandomNumber();
console.log(randomNumber);