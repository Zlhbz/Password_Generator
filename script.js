// Assignment Code
var generateBtn = document.querySelector("#generate");
var clipBtn = document.querySelector("#clipboard");
var numChar;

var upperCase;
var lowerCase;
var numeric;
var specialChar;


var arrUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var arrLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var arrNumeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var arrSpecialChar = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
var allChar = [];

writePassword();

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    var copyBtn = document.querySelector("#generate");

    copyBtn.addEventListener("click", function () {
        passwordText.value = password;
    });

    // copyBtn.removeAttribute("disabled");
    // copyBtn.focus();
}


function generatePassword() {
    createAllCharArray();
    var password = "";
    for (var i = 0; i < numChar; i++) {
        var j = Math.floor(Math.random() * allChar.length);
        password = password + allChar[j];
    }
    return password;
}


function createAllCharArray() {
    getInput();
    var temp = [];

    while (!upperCase && !lowerCase && !numeric && !specialChar) {
        alert("Please pick at least one of the four options!")
        getInput();
    }
    if (upperCase) {
        temp = allChar.concat(arrUpperCase);
        allChar = temp;
        console.log(allChar);
    }
    if (lowerCase) {
        temp = allChar.concat(arrLowerCase);
        allChar = temp;
    }
    if (numeric) {
        temp = allChar.concat(arrNumeric);
        allChar = temp;
    }
    if (specialChar) {
        temp = allChar.concat(arrSpecialChar);
        allChar = temp;
    }

}


function getInput() {
    numChar = parseInt(prompt("Please enter the length of the password!! It should be 8-128 characters!"));

    while (numChar < 8 || numChar > 128) {
        alert("Please enter again! It should be 8-128 characters!!")
        numChar = parseInt(prompt("How many characters do you want your password be?"));
    }
    lowerCase = confirm("Please confirm if you want LOWER case characters in your password!");
    upperCase = confirm("Please confirm if you want UPPER case characters in your password!");
    numeric = confirm("Please confirm if you want NUMERIC characters in your password!");
    specialChar = confirm("Please confirm if you want SPECIAL characters in your password!");
}



    // Write password to the #password input


//     function copyToClipboard() {
//         // BONUS 
//     }

//     // Add event listener to generate button
//     generateBtn.addEventListener("click", writePassword);

// // BONUS EVENT LISTENER
