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
console.log(guessWord);
var letters = guessWord.split('');
console.log(letters);
// display word to guess test
// document.querySelector('.wordBox').textContent = guessWord;

// create a separate div for each letter in guessWord?? 
for ( var i=0; i<guessWord.length; i++ ) {
    var letterDiv = document.createElement('div');
    document.querySelector('.wordBox').appendChild(letterDiv);
    localStorage.setItem('letters', letters[i]);
}

console.log(guessWord.length);


// timer section
var timeEl = document.querySelector('.timer');
var secondsLeft = 20;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left to guess.";
  
      if(secondsLeft <= 0) {
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

document.addEventListener( 'keydown', function(event) {
  var key = event.key.toLowerCase();
  console.log(key);
  letterDiv =  document.querySelector('.wordBox').children;
  console.log(letterDiv.length);
  for ( var i=0; i<guessWord.length; i++ ) {
    // letterDiv.textContent = "";
    // for ( var i=0; i<guessWord.length; i++ ) {
      if(key===guessWord[i]){
        
      //  .appendChild(letterDiv);
        letterDiv[i].textContent = guessWord[i];
        // console.log('test');
        // console.log(letters[i])

      }
    // }
  }
});

// function to compare user input to each letter
// for every i in guessword length i want to check if user input matches on guessword letter

//if  user input == at least one of my letters i want the letter to be revealed
// textContent