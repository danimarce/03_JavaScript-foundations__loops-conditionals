/*
    1. Create a while loop that will print out all the even numbers between 10 and 40.

    2. Create a while loop that will print out all the odd numbers between 10 and 40.
*/

function loopEvenNumbers() {
    let number = 1;

    while (number <= 40) {
        if (number % 2 === 0) {
            window.console.log(number);
        }
        number++;
    }
}

function loopOddNumbers() {
    let number = 1;

    while (number <= 40) {
        if (number % 2 !== 0) {
            window.console.log(number);
        }
        number++;
    }
}  

loopEvenNumbers();
loopOddNumbers();
