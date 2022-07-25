// Assignment code here
//generatePassword = function() {
//}

generatePassword = function() {
  var alpha = 'abcdefghijklmnopqrstuvwxyz';
   
   var num = '123456789';
   
   var alphaUp = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
   
   var specialChar = "!#$%&'()*+-./:;<=>?@[^`{|} ~";
   
   var pass = "";

   var userInput = "";
  
   var passwordLength = window.prompt('Enter password length between "8" and "128"');

    if (passwordLength <= 7) {
      window.alert("Please enter password value between '8' and '128'")
      return writePassword();
    }

    if (passwordLength >= 129) {
      window.alert("Please enter password value between '8' and '128'")
      return writePassword();
    }

    if (isNaN(passwordLength)) {
      window.alert("Please enter a numerical value.")
      return writePassword();
    }
    
  window.alert('You chose a password length of ' + passwordLength)

  var passwordLower = window.confirm('Include lowercase characters in password?')

   if (passwordLower == true) {
    window.alert("Lowercase characters will be included in password.")
  }

  else if (passwordLower == false) {
    window.alert("Lowercase character will not be included in password.")
  } 

  var passwordUpper = window.confirm('Include UPPERCASE characters in password?')

   if (passwordUpper == true) {
    window.alert("Uppercase characters will be included in password.")
  }

  else if (passwordUpper == false) {
    window.alert("Uppercase characters will not be included in password.") 
  }

  var passwordNum = window.confirm('Include numeric characters in password?')

   if (passwordNum == true) {
    window.alert("Numeric characters will be included in password.")
  }

  else if (passwordNum == false) {
    window.alert("Numeric characters will not be included in password.") 
  } 

  var passwordSpecial = window.confirm('Include special characters in password?')

   if (passwordSpecial == true) {
    window.alert("Special characters will be included in password.")
  }

  else if (passwordSpecial == false) {
    window.alert("Special characters will not be included in password.") 
  } 
  
  
  
  
  if (passwordLower) {
    userInput = alpha + userInput;
  }

  if (passwordUpper) {
    userInput = alphaUp + userInput;
    }
    
  if (passwordNum) {
    userInput =  num + userInput;
    }

  if (passwordSpecial ) {
    userInput = specialChar + userInput;
    }
  




   for (let i = 1; i <= passwordLength; i++) {
    var char = [Math.floor(Math.random() * userInput.length + 1)];  
    pass += userInput.charAt(char)
   }

   return pass 
}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
