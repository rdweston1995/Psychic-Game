//Array that will store all the letters of the alphabet that will be options to be the random letter selected by the computer
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", " u", "v", "w", "x", "y", "z"];
//Random letter will be selected from the array above
//var ranLetter = (Math.floor(Math.random() * alpha.length));
//document.write(ranLetter);
var ranLetter = removeLater();


//removeLater(alpha[ranLetter]);
//Variable for the userGuess that will be assigned after the user presses a key
var userGuess;
//Variable array for the users guesses to be filled after a wrong guess
var guesses = [];

//Variables for the wins loses and guesses remaining
var wins = 0, loses = 0, guessesLeft = 10;

//Initial write of the stats for the page where all the info will be the default values
rewrite(wins, loses, guessesLeft, guesses);

document.onkeyup = function(event){
    if(guessesLeft >= 0){
        userGuess = event.which;   
        if(userGuess == alpha[ranLetter].toUpperCase().charCodeAt(0)){
            wins++;
            guessesLeft = 10;         
            guesses = [];
            rewrite(wins, loses, guessesLeft, guesses);
            ranLetter = removeLater();
        }else{
            guessesLeft--;
            guesses.push(String.fromCharCode(userGuess));   
            rewrite(wins, loses, guessesLeft, guesses);
            if(guessesLeft == 0){
                guessesLeft = 10;
                loses++;
                guesses = [];
                rewrite(wins, loses, guessesLeft, guesses);
                ranLetter = removeLater();    
            }
        }
    }
}

//Function to rewrite the html on the page to update the stats
function rewrite(wins, loses, guessesLeft, guesses){
    document.getElementById("wins").innerHTML = "Wins: " + wins;
    document.getElementById("loses").innerHTML = "Loses: " + loses;
    document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById("guesses").innerHTML = "Your guesses so far: " + guesses;
}

//Function to write the page what the computer letter is for testing
//Function to get a random number to represent the letter from the alpha array
function removeLater(){
    ranLetter = (Math.floor(Math.random() * alpha.length));
    document.getElementById("answer").innerHTML = alpha[ranLetter];
    return ranLetter;
}

