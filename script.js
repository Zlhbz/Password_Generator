// Assignment Code
var generateBtn = document.querySelector("#generate");
var clipBtn = document.querySelector("#clipboard");
var numChar;

var upperCase;
var lowerCase;
var numeric;


var arrUpperCase = [];
var arrLowerCase = [];
var arrNumeric = [];
var allChar;

gettingInput();

function gettingInput() {
    numChar = parseInt(prompt("How many characters do you want your password be?"));

    while (numChar < 8 || numChar > 128) {
        alert(" Plese enter right number!!!")
        numChar = parseInt(prompt("How many characters do you want your password be?"));
    }
    lowerCase = confirm("Do you want lowercase characters to be included in your password?");
    upperCase = confirm("Do you want uppercase characters to be included in your password?");
    numeric = confirm("Do you want numeric characters to be included in your password");
}



function creatingAllCharArray() {

    if (upperCase || lowerCase || numeric) {
        if (upperCase) {
            allChar = concat(arrUpperCase);
        }

        if (lowerCase) {
            allChar = concat(arrLowerCase);
        }

        if (numeric) {
            allChar = concat(arrNumeric);
        }
    }
    else {
        alert("Please pick one of the three!!!");
        gettingInput();

    }










    // Write password to the #password input
    function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");

        passwordText.value = password;

        copyBtn.removeAttribute("disabled");
        copyBtn.focus();
    }

    function copyToClipboard() {
        // BONUS 
    }

    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
