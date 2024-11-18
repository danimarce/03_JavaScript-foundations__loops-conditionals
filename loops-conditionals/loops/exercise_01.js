/*
    1. Create a for loop that iterates while the index is less than or equal to 10.
    2. In each iteration:
        * Generate a new random number between 1 and 10 (hint: check the documentation regarding Math.floor and Math.random methods)
        * Evaluate if the random number is greater than or equal to 5
        * If it is greater than or equal to 5, print "Logged In with (number)!"
        * If it is less than 5, print "Logged Out with (number)!"
*/

function simulateRandomLogins() {
    for (let index = 1; index <= 10; index++) {
        let randomNumber = Math.random();
        randomNumber = Math.floor((randomNumber * 10) + 1);
    
        if (randomNumber >= 5) {
            window.console.log('Logged In with ' + randomNumber);
        }
    
        if (randomNumber < 5) {
            window.console.log('Logged Out with ' + randomNumber);
        }
    }
}

simulateRandomLogins();
