
//create..
// A string value to store the underlying character for the letter
// A boolean value that stores whether that letter has been guessed yet
// A function that returns the underlying character if the letter has been guessed, 
// or a placeholder (like an underscore) if the letter has not been guessed
// A function that takes a character as an argument and checks it against the underlying character, 
// updating the stored boolean value to true if it was guessed correctly`
var Letter = function(character){
	this.character = character;
	this.letterCorrect = false;
	this.showCharacter = function(){
		if(this.letterCorrect) {
			return this.character;
		} else {
			return "_";
		}
	};
	this.trueCharacter1 = function(guessCharacter){
		if(guessCharacter == this.character) {
			this.letterCorrect = true;
		}
	};
	this.guessedStatus = function() {
		return this.letterCorrect;
	};
};

// testing, change the letterCorrect variable to true during this process
// var letter1 = new Letter("b");
// letter1.showCharacter();

module.exports = Letter;