var wordBank = [
    'html', 'computer', 'object',
    'css', 'array', 'string', 'variable',
    'javascript', 'boolean', 'integer',
    'function', 'element', 'flexbox',
    'method', 'attribute', 'github',
    'algorithm', 'scope', 'iteration'
];

// randomly picks a word from wordBank then slpits the letters apart 
var guessWord = wordBank[Math.floor(Math.random() * wordBank.length)];
var letters = guessWord.split('');

// display word to guess test
// document.querySelector('.wordBox').textContent = guessWord;

// create a separate div for each letter in guessWord?? not working yet
for ( var i=0; i<guessWord.length; i++ ) {
    var letterDiv = document.createElement('div');
    document.body.appendChild(letterDiv);
    letterDiv.textContent = letters[i];
}

console.log(guessWord.length)
console.log(guessWord);
console.log(letters);

// timer section
var timeEl = document.querySelector('.timer');
var secondsLeft = 20;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left to guess.";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        // Calls function to display loser message
        loserMessage();
      }
  
    }, 1000);
  }

function loserMessage() {
    timeEl.textContent = secondsLeft + " seconds left to guess. You Lose!";
}

// calling timer functions
setTime();


//event listeners for key strokes to guess the letters of the word