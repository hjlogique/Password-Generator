
// Password Generator Application - pwd_generator.js

// An array variable for all possible characters
var allChar = ["abcdefghijklmnopqrstuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "!“#$%&‘()*+,-./:;<=>?@[\]^_`{|}~"];
// Assign the instruction to the Display screen
document.getElementById("pwdDisplay").textContent = 'Select the "Generate Password" button to start, and the "Clear" button to clear your password.';

// 1. Choose a number of Characters for the password
function numOfCharFunc() {
  do {
    var numOfChar = numOfChar = prompt("The number of characters in your password should be between 8, 128. Please enter a valid number.");
    // If pressed Cancel or no number is entered and pressed OK, app generates no password and exits.
    if (numOfChar == null || numOfChar == "" || isNaN(numOfChar) || numOfChar < 1) {
      alert("No Entry or Invalid chatacter(s), Password cannot be generated. Try again!");
      break;
    }
    // As long as the entered number of characters is not in the valid range, app prompts users for a valid entry.
  } while (numOfChar < 8 || numOfChar > 128);
  return numOfChar;
}

// 2. Genarate a string of characters based on the selected character type(s)
function setCharTypFunc() {
  var charTypVar = ["Lowercase", "Uppercase", "Numeric", "Special"];
  var charSetVar = "";
  for (i = 0; i < charTypVar.length; i++) {
    var confCharTyp = confirm("Would you like to have " + charTypVar[i] + " characters in your password? Press OK to confirm or Cancel to exclude.")
    if (confCharTyp == true) {
      alert("Your passsword will have " + charTypVar[i] + " characters.");
      charSetVar = charSetVar.concat(allChar[i]);
    } else {
      alert(charTypVar[i] + " characters are not included in your password.");
    }
  }
  // If None of the chracters is chosen, the function calls iteself.
  if (charSetVar == "") {
    alert("You need to at least select one of the character types, so that a password can be generated.");
    setCharTypFunc();
  }
  return charSetVar;
}

// 3. Generate a random password and display it
function genPwdFunc(event) {
  var numChar = numOfCharFunc();
  if (numChar != null && numChar != "" && !isNaN(numChar) && numChar > 1) {
    var charSet = setCharTypFunc();
    var pwdStr = "";
    for (i = 1; i < numChar; i++) {
      pwdStr += charSet.charAt(Math.floor(Math.random() * charSet.length));
    }
    document.querySelector("#pwdDisplay").textContent = pwdStr;
  }
}

// 4. Clear the display, if the text is a password (anything other than the instruction)
function clearFunc(event) {
  var pwdDisplay = document.querySelector("#pwdDisplay").textContent;
  if (pwdDisplay.substr(0, 6) == 'Select') {
    alert("No password to clear!")
  } else {
    document.getElementById("pwdDisplay").textContent = "Generate another password?";
  }
}

//The "Generate Password" button calls the enPwdFunc function
document.getElementById("pwdGenBtn").addEventListener("click", genPwdFunc);
//The "Clear" button calls the clearFunc function
document.getElementById("clearBtn").addEventListener("click", clearFunc);
