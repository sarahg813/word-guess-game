var words = ["RUGRATS", "SPONGEBOB", "POKEMON", "ANIMANIACS", "RECESS", "DOUG", "CATDOG", "SIMPSONS"];

var maxNumGuesses = 8; 
var guessedLetters = [];
var ansWordArr = [];
var numGuessesRemaining = 0;
var numWins = 0;
var numLosses = 0;
var isFinished = false;
var ansWord;


function restart() {
    //picks random word from words list
    ansWord = words[Math.floor(Math.random() * words.length)];

    ansWordArr = [];

    // adds "_" to ansWordArr
    for (var i = 0; i < ansWord.length; i++) {
        ansWordArr[i] = "_";
    }

    // reset the variables 
    numGuessesRemaining = maxNumGuesses;
    guessedLetters = [];

    //show the selected elements on the screen 
    updateScreen();
};

function updateScreen() {
    document.getElementById("numWins").innerText = numWins;
    document.getElementById("numLosses").innerText = numLosses;
    document.getElementById("numGuesses").innerText = numGuessesRemaining;
    document.getElementById("answerWord").innerText = ansWordArr.join("");
    document.getElementById("guessedLetters").innerText = guessedLetters;

};

function checkGuess(letter) {

    if (guessedLetters.indexOf(letter) === -1) {
        guessedLetters.push(letter);
        if (ansWord.indexOf(letter) === -1) {
            numGuessesRemaining--;
        } else {
            for (var i = 0; i < ansWord.length; i++) {
                if (letter === ansWord[i]) {
                    ansWordArr[i] = letter;
                } 
            }                
        }
    }

}; 



function isWinner() {
    if (ansWordArr.indexOf("_") === -1) {
        numWins++;
        isFinished = true;
    }
};

function isLoser() {
    if(numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
    }

};



document.onkeyup = function(event) {
    if (isFinished) {
        restart();
        isFinished = false;
    } else {
        if(event.keyCode >= 65 && event.keyCode <= 90) {
            checkGuess(event.key.toUpperCase());
            updateScreen();
            isWinner();
            isLoser();
        }
    }
};


restart();
updateScreen();

console.log(ansWord);








