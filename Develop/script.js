// Assignment Code
var generateBtn = document.querySelector("#generate");


function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
 var rant = Math.random()
 return Math.floor(min*(1 - rand) + rand*max)
}

function getRandomItem(list) {
  return list[randomInt(list.length)]
}

function generatePassword() {
while (true) {

  var userInput = window.prompt("How long would you like your password to be?")

  if(userInput === null) {
    return
  }

  var passwordLength = parseInt(userInput)

  if (isNan(passwordLength)) {
    window.alert("that is not a number!")
  } else if (passwordLength < 8 || passwordLength > 128) {
 

    window.alert("Password must be between 8 and 128 characters!")
  } else {
    break
  }
  
}
 var userWantsNumbers = window.confirm("would you like to include numbers in your password?")
 var userWantsSymbols = window.confirm("would you like to include symbols in your password?")
 var userWantsLowercase = window.confirm("would you like to include lowercase letters in your password?")
 var userWantsUppercase = window.confirm("would you like to include uppercase letters in your password?")

 var numberList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
 var symbolList = ["!", "@", "#", "$", "%", "^", "&", "*"]
 var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 var uppercaseList = []

var optionsCart = []

for(var i =0; 1< lowercaseList.length; i++) {
  uppercaseList[i] = lowercaseList[i].toUpperCase()
}

if (userwantsnumbers === true) {
  optionsCart.push(numberList)
}

if (userwantsSymbols === true) {
  optionsCart.push(symbolList)
}

if (userwantslowercase === true) {
  optionsCart.push(lowercaseList)
}

if (userwantsuppercase === true) {
  optionsCart.push(uppercaseList)
}

var genaratedPassword = ""

for(var i = 0; i < passwordLength; i++) {
  var randomList = getRandomItem(optionsCart)
  var randomchar = getRandomItem(randomList)
  generatedPassword += randomchar
}

return generatedPassword


}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if(!password) return

  if (password) {
    passwordText.value = password;
  }

  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
