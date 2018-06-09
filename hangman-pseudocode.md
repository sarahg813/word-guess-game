var wordList,
    pick a random word from list,
    # of remaining guesses,
    # of wins,
    [] of guessingWord,
    [] for guessedLetters,


for (){
    display "_" to replace answerWord
}

function {
    player makes a guess from key
}

if (player guesses correct letter) {
    - replace "_" with correct letter
    - add letter to #guessedLetters
} else if (player guesses incorrectly) {
    - minus 1 from remaining guesses 
    - add letter to #guessedLetters
}

if (all the letters are answered) {
    - end game for win
    - add 1 to #numWins
}

if (remaining guesses = 0) {
    - end game for lost
}