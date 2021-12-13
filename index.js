// Code your solutions in this file

function writeCards(names, event) {
    const arr1 = []
    for (let i = 0; i < names.length; i++) {
        const string = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
        arr1.push(string)
    }
    return arr1 
}

function countDown(positiveNumber) {
while (positiveNumber >= 0) {
    console.log(positiveNumber);
    positiveNumber--;
    }
}