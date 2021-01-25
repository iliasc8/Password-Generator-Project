// Assignment Code
var generateBtn = document.querySelector("#generate");



var capitalChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var smallChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numericChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChar = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var resultOutput = [];
var userChoice = [];
capitalChar[1]

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Input

function generatePassword() {
	var passwordlength = prompt("How many characters would you like your password? Please pick a number between 8 and 128");
	console.log("password length ");


	var numeric = confirm("Do you want to include numbers?");
	console.log("numeric");
	var capitalletters = confirm("Do you want to include capital letters?");
	console.log("capitalletters");
	var smalletters = confirm("Do you want to include small letters?");
	console.log("smalletters");
	var specialcharacters = confirm("Do you want to include special characters?");
	console.log("specialcharacters");


	// Condition statements

	if (numeric) {
		resultOutput = resultOutput.concat(numericChar);

	}

	if (capitalletters) {
		resultOutput = resultOutput.concat(capitalChar);

	}

	if (smalletters) {
		resultOutput = resultOutput.concat(smallChar);

	}

	if (specialcharacters) {
		resultOutput = resultOutput.concat(specialChar);
	}
	console.log(resultOutput)

	// Loop for random choice
	for (var i = 0; i < passwordlength; i++) {

		userChoice.push(resultOutput[Math.floor(Math.random() * resultOutput.length)]);
	}

	return userChoice.join("");
}
console.log(userChoice)

