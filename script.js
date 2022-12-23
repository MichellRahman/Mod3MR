// Assignment code here
function generatePassword() {
  var length = prompt("Enter password length between 8-128 characters");
  while (length < 8 || length > 128) {
    length = prompt("Enter password length between 8-128 characters");
  }
  var lowerCase = confirm("Include lowercase letters?");
  var upperCase = confirm("Include uppercase letters?");
  var digits = confirm("Include digits?");
  var special = confirm("Include special characters?");
  while (!lowerCase && !upperCase && !digits && !special) {
    alert("Must select at least one of lowercase, uppercase, digits, or special characters.");
    lowerCase = confirm("Include lowercase letters?");
    upperCase = confirm("Include uppercase letters?");
    digits = confirm("Include digits?");
    special = confirm("Include special characters?");
  }
  var allchars = "";
  if(lowerCase){
    allchars +="abcdefghijklmnopqrstuvwxyz";
  }
  if (upperCase) {
    allchars +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (digits){
    allchars += "0123456789";
  }
  if (special) {
    allchars +=" !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    allchars +='"';
  }
  var password = "";
  for (var i = 0; i < length; i++) {
    var index = Math.floor(Math.random() * allchars.length);
    password += allchars [index];
  }
  return password ; 
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
