/*
    1. Create a variable called "loggedIn" that starts off as false.
    2. Create a while loop that runs while "loggedIn" is false.
    3. Each loop iteration, print out: "Incorrect login credentials".
    4. After 3 loop iterations, change "loggedIn" to true.
    5. After the loop is done, print out: "Successfully logged in!".

    HINT: Be careful of an infinite loop!
*/

function simulateLoginAttempts() {
    let loggedIn = false;

    let index = 1;

    while (loggedIn === false) {
        window.console.log('Incorrect login credentials');

        if (index === 3) {
            loggedIn = true;
        }

        index++;
    }

    window.console.log('Successfully logged in!');
}

simulateLoginAttempts();
