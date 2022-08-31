// Function to generate and display password
function generatePassword(){

    // Declaration of arrays containing all possible characters for the password
    var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", "\u005c", ";", ":", "'", "\u0022", "?", "<", ".", ",", ">", "/"];
    var totalCharacters = [];

    // Function to generate password once all checks are complete
    function checks(){
        // Checks to see if the user wants upper case characters in the password and adds them to the total pool of characters if the user wishes it
        let upperCaseTrue = confirm("Would you like upper case characters?")
        if (upperCaseTrue){
            totalCharacters = totalCharacters.concat(upperCase);
        }
        // Checks to see if the user wants lower case characters in the password and adds them to the total pool of characters if the user wishes it
        let lowerCaseTrue = confirm("Would you like lowercase characters?");
        if (lowerCaseTrue){
            totalCharacters = totalCharacters.concat(lowerCase);
        }
        // Checks to see if the user wants numbersin the password and adds them to the total pool of characters if the user wishes it
        let numbersTrue = confirm("Would you like numbers?")
        if (numbersTrue){
            totalCharacters = totalCharacters.concat(numbers);
        }
        // Checks to see if the user wants special characters in the password and adds them to the total pool of characters if the user wishes it
        let specialCharactersTrue = confirm("Would you like special characters?");
        if (specialCharactersTrue){
            totalCharacters = totalCharacters.concat(specialCharacters);
        }

        if (!upperCaseTrue & !lowerCaseTrue & !numbersTrue & !specialCharactersTrue){
            alert("There must be at least one option selected");
            checks();
        }
        // Declaration of variables needed to complete the while loop
        var sizeNum = parseInt(size); /* ensures that the size variable is changed to an integer */
        var count = 0;
        var password ="";

        // While loop to create the password from the array of characters
        while (count != sizeNum){
            password =password + totalCharacters[Math.floor(Math.random()*totalCharacters.length)];
            count = count + 1;
        }

        // Declaration of the password texbox as a variable
        var passwordTextBox = document.getElementById("password"); 
        // Displaying the password in the textbox
        passwordTextBox.textContent = password;
    }

    // Accept input from the user for password size
    let size = prompt("How many characters would you like in this password?\nPassword must be between 8 and 128 characters");
    
    // Checks to see if user selected cancel
    if (!size){

    } else
    // Condition to ensure only numbers are entered
    if (/\D/.test(size)){
        alert("Only numbers are allowed");
        generatePassword();
    } else

    // Condition to ensure the number entered is between 8 and 128
    if(size < 8 || size > 128){
        alert("Password size must be between 8 and 128 characters");
        generatePassword();
    } else
    // What to be done once the above 2 contitions are not met
    {
        checks();   
    }
}