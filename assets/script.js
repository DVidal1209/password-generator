var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", "\u005c", ";", ":", "'", "\u0022", "?", "<", ".", ",", ">", "/"];
var totalCharacters = [];


console.log(totalCharacters);


function generatePassword(){
    
    let size = prompt("How many characters would you like in this password?\nPassword must be between 8 and 128 characters");
    if (/\D/.test(size)){
        alert("Only numbers are allowed");
    } else if(size < 8 || size > 128){
        alert("Password size must be between 8 and 128 characters");
    } else {
        let upperCaseTrue = confirm("Would you like upper case characters?")
        if (upperCaseTrue){
            totalCharacters = totalCharacters.concat(upperCase);
            console.log(totalCharacters);
        }
    }
}
// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
