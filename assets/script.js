var wordBank = [
    'html', 'computer', 'object',
    'css', 'array', 'string', 'variable',
    'javascript', 'boolean', 'integer',
    'function', 'element', 'flexbox',
    'method', 'attribute', 'github',
    'algorithm', 'scope', 'iteration'
];
var winCount = 0;
var lossCount = 0;


// timer section
var timeEl = document.querySelector('.timer');
var secondsLeft = 10;

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds left to guess.";
    if(secondsLeft <= 0) {
      clearInterval(timerInterval);
        // Calls function to display message
      timesUpMessage();
      document.getElementById("start-btn").disabled = false; // start game button back on
      guessWord = localStorage.getItem('guessWord');
      for ( var i=0; i<guessWord.length; i++ ) {
        document.querySelector('letterDiv').textContent = letters[i];
        console.log(letters[i]);
        console.log(guessWord);
      };
    };
  
  }, 1000);
  
};


function timesUpMessage() {
    timeEl.textContent = secondsLeft + " seconds left to guess";
};


function playGame() {
  // randomly picks a word from wordBank then slpits the letters apart 
  var guessWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  var letters = guessWord.split('');
  document.querySelector('.wordBox').textContent = '';
  console.log(guessWord);
  // create a separate div for each letter in guessWord
  for ( var i=0; i<guessWord.length; i++ ) {
    var letterDiv = document.createElement('div');
    document.querySelector('.wordBox').appendChild(letterDiv);
    localStorage.setItem('letters', letters[i]);
  };

  //event listener for key strokes to guess the letters of the word
  document.addEventListener( 'keydown', function(event) {
    var key = event.key.toLowerCase();
    letterDiv =  document.querySelector('.wordBox').children;

    for ( var i=0; i<guessWord.length; i++ ) {
      if(key===guessWord[i]){
        letterDiv[i].textContent = guessWord[i];
        console.log('test');
      };
    };
  });
};

// checking wins and losses 














//event listener for clicking a start game button
document.getElementById('start-btn').addEventListener('click', function() {
  secondsLeft =10;
  document.getElementById("start-btn").disabled = true; // disables start button while game is in progress
  localStorage.setItem('letters','') // clears previous word before generating a new game
  setTime(); // calling timer functions
  playGame();

});

// reset game button