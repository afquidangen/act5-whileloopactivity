function getGuess() {
    let numbertoGuess = 3;
    let guess = prompt("Guess a number between 1 to 10: ");
    
    while (guess != numbertoGuess) {
        if (guess > numbertoGuess && guess <=10 && guess > 0) {
            alert("Lower!");
        } else if (guess < numbertoGuess && guess > 0) {
            alert("Higher!");
        } else {
            alert("Invalid input.");
        }
        let guess = prompt("Guess again: ");
    }   if (guess == numbertoGuess) {
        alert("Congratulations! You guessed the number!");
    }
}

