var words = ["RUGRATS", "SPONGEBOB", "POKEMON", "ANIMANIACS", "RECESS", "DOUG", "CATDOG", "SIMPSONS"];

var maxNumGuesses = 8; 
var guessedLetters = [];
var ansWordArr = [];
var usedWord = [];
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

    document.getElementById("giphy-embed").src = "";
    document.getElementById("numGuesses").style.color = "";

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
            if (numGuessesRemaining <=3) {
                document.getElementById("numGuesses").style.color = "#e12d2e";
            }
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
        if(ansWord === "DOUG") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/w7iOaLoi84N6E";
        } else if (ansWord === "RUGRATS") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/3x5V8j8T341lS";
        } else if (ansWord === "SPONGEBOB") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/TdfyKrN7HGTIY";
        } else if (ansWord === "POKEMON") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/xuXzcHMkuwvf2";
        } else if (ansWord === "ANIMANIACS") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/Vpu0dyuOVbrBC";
        } else if (ansWord === "RECESS") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/ENjchsyk8aSoE";
        } else if (ansWord === "CATDOG") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/VqWjJR7vOwmSk";
        } else if (ansWord === "SIMPSONS") {
            document.getElementById("giphy-embed").src = "https://giphy.com/embed/tkYpAbKdWj4TS";
        }
            
    }
};

function isLoser() {
    if(numGuessesRemaining <= 0) {
        numLosses++;
        isFinished = true;
        document.getElementById("giphy-embed").src = "https://giphy.com/embed/3oFzmko6SiknmpR2NO";
        document.getElementById("numLosses").style.color = "#e12d2e";
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








