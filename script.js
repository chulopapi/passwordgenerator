//JavaScript: Password Generator by Marlon Guandique
//Challenge #3
//Arrays defininition and values declaration

let pw = [];
let setOfRemaining = [];
let spCh = ["#", "%", "^", "&", "*", "%", "!", "@", "(", ")", "+", "-"]
let numbs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
let upperletters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "O", "W", "X", "Y", "Z"]
let lowerletters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "o", "w", "x", "y", "z",]

// function to start password generation
function generatePassword() {

  // while loop for verification of passwordLenth variable integrity = must be a number

  var passwordLength = 0
  while ((isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128)) {
    passwordLength = parseInt(window.prompt("Please provide password length (min 8 and max 128)"));
  }

  // console to debugging
  console.log("password length: ", passwordLength);
  console.log("type of password length: ", typeof (passwordLength));


  var specialCharacter = window.confirm("Do you need special character");
  if (specialCharacter) {
    let index = Math.floor(Math.random() * 100) % spCh.length

    pw.push(spCh[index])
    setOfRemaining = setOfRemaining.concat(spCh)
  }

  var wantNumbers = window.confirm("Do you want to include numbers?");
  if (wantNumbers) {
    let index = Math.floor(Math.random() * 394) % numbs.length;

    pw.push(numbs[index])
    setOfRemaining = setOfRemaining.concat(numbs)
  }
  var uletters = window.confirm("What about Upper Letters?");
  if (uletters) {
    let index = Math.floor(Math.random() * 394) % upperletters.length;

    pw.push(upperletters[index])
    setOfRemaining = setOfRemaining.concat(upperletters)
  }

  var lletters = window.confirm("Do you want Lower Letters?");
  if (lletters) {
    let index = Math.floor(Math.random() * 394) % lowerletters.length;
    pw.push(lowerletters[index])
  }

  //The user needs to at least choose one character category

  if (!lletters && !uletters && !wantNumbers && !specialCharacter) {
    alert("Ummmm.. how do you expect me to make a password?")
    return;
  }

  // adding additional characters to setOfRemaining array
  setOfRemaining.sort((a, b) => Math.random() - .50)
  let diff = passwordLength - pw.length;
  if (diff > 0) {
    for (let i = 0; i < diff; i++) {
      pw.push(setOfRemaining[i])
    }
  }
  //displaying in console
  console.log("pw array", pw)
  console.log("pw joined", pw.join(""))
  // display the password created
  return pw.join("");

}
// Assignment Code
var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", function (e) {
  console.log("Generate Password clicked", e);
  writePassword();

});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}


