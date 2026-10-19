// Generate a random number between 1 and 100
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Count the number of attempts
let attempts = 0;

// Check whether the game is finished
let gameOver = false;

// Check the user's guess
function checkGuess() {

    if (gameOver) {
        return;
    }

    let input = document.getElementById("guessInput");
    let result = document.getElementById("result");

    let guess = Number(input.value);

    // Validate the input
    if (
        input.value === "" ||
        guess < 1 ||
        guess > 100 ||
        !Number.isInteger(guess)
    ) {
        result.textContent =
            "Please enter a whole number between 1 and 100.";
        return;
    }

    // Count valid guesses
    attempts++;

    // Compare the guess with the secret number
    if (guess > secretNumber) {

        result.textContent = "Too High! Try a smaller number.";

    } else if (guess < secretNumber) {

        result.textContent = "Too Low! Try a bigger number.";

    } else {

        result.textContent =
            "Correct! You guessed it in " + attempts + " attempts!";

        gameOver = true;
    }
}

// Reset the game
function resetGame() {

    secretNumber = Math.floor(Math.random() * 100) + 1;

    attempts = 0;

    gameOver = false;

    document.getElementById("guessInput").value = "";

    document.getElementById("result").textContent =
        "New game started! Guess a number between 1 and 100.";
}