// Assignment code here
var userInput;
var lowercase;
var uppercase;
var numbers;
var character;

character = "!#$%&()*,-./=?@[]^_`{|}~" // list of special characters than can be in the password.
numbers = "1234567890" // list of numbers than can be in the password.
lowercase = "abcdefghijklmnopqrstuvwxyz" // list of lowercase letters that can be in the password.
uppercase = "ABCDEFGHIJKLMNOPQRDTUVWXYZ" // list of uppercase letters that can be in the password.

allSelections = lowercase + uppercase + numbers + character; // all four criterias combined. 

lowUp = lowercase + uppercase; // lowercase and uppercase combined.
lowNum = lowercase + numbers; //lowercsse and numers combined.
lowChar = lowercase + character; // lowercase and characters combined.
upNum = uppercase + numbers; // uppercase and numbers combined.
upChar = uppercase + character; // uppercase and characters combined.
numChar = numbers + character; // numbers and chracters combined.

lowUpNum = lowercase + uppercase + numbers; // lowercase, uppercase, and numbers combined.
lowUpChar = lowercase + uppercase + character; // lowercase, uppercase, and chracters combined.
lowNumChar = lowercase + numbers + character; // lowercase, numbers, and characters combined.
upNumChar = uppercase + numbers + character; // uppercase, numbers, and characters combined.


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  console.log("Yo");

  userInput = window.prompt("Choose length of password of 8-128 characters."); // prompt that will pop up once you click generate password.

   if (!userInput) {
    return "Password Generator cancelled. Please try again.";
   } else if (userInput > 8 && userInput <128) { // must select a number between 8 and 128.
    lowercase = window.confirm("Would you like LOWERCASE characters in your password?") // yes/no if the user would like lowercase chracters in their password.
    uppercase = window.confirm("Would you like UPPERCASE characters in your password?") // yes/no if the user would like uppercase chracters in their password.
    numbers = window.confirm("Would you like to have NUMBERS in your password?") // yes/no if the user would like numbers in their password.
    character = window.confirm("Would you like to have SPECIAL CHARACTERS in your password?") // yes/no if the user would like special chracters in their password.
   } else {
    return generatePassword()
   };

   if (!lowercase && !uppercase && !numbers && !character) { // if the user answers no to all of the criteria.
    return "No choices selected, please start over.";
   } else if (lowercase && uppercase && numbers && character) { // if the user answers yes to all the criteria.
   var result = "";
   for (let i=0; i < userInput; i++) {
    result += allSelections[Math.floor(Math.random() * allSelections.length)]
    console.log(result)
  }
  return result
 } else if (lowercase && uppercase && !numbers && !character) { // if the user only wants lowercase and uppercase chracters.
  var result = "";
  for (let i=0; i < userInput; i++) {
   result += lowUp[Math.floor(Math.random() * lowUp.length)]
   console.log(result)
 }
 return result
} else if (lowercase && !uppercase && numbers && !character) { // if the user only wants lowercase chracters and numbers in their password.
  var result = "";
  for (let i=0; i < userInput; i++) {
   result += lowNum[Math.floor(Math.random() * lowNum.length)]
   console.log(result)
 }
 return result
} else if (lowercase && !uppercase && !numbers && character) { // if the user only wants lowercase and special chracters in their password.
  var result = "";
  for (let i=0; i < userInput; i++) {
   result += lowChar[Math.floor(Math.random() * lowChar.length)]
   console.log(result)
 }
 return result
} else if (!lowercase && uppercase && numbers && !character) { // if the user only wants uppercase chracters and numbers in their password.
  var result = "";
  for (let i=0; i < userInput; i++) {
   result += upNum[Math.floor(Math.random() * upNum.length)]
   console.log(result)
 }
 return result
} else if (!lowercase && uppercase && !numbers && character) { // if the user only wants uppercase and special characters in their password.
  var result = "";
  for (let i=0; i < userInput; i++) {
   result += upChar[Math.floor(Math.random() * upChar.length)]
   console.log(result)
 }
 return result
} else if (!lowercase && !uppercase && numbers && character) { // if the user only wants numbers and special chracters in their password.
  var result = "";
  for (let i=0; i < userInput; i++) {
   result += numChar[Math.floor(Math.random() * numChar.length)]
   console.log(result)
 }
 return result
} else if (lowercase && uppercase && numbers && !character) { // if the user wants lowercase characters, uppercase chracters, and numbers in their password.
  var result = "";
  for (let i=0; i < userInput; i++) {
   result += lowUpNum[Math.floor(Math.random() * lowUpNum.length)]
   console.log(result)
 }
 return result
} else if (lowercase && uppercase && !numbers && character) { // if the user wants lowercase, uppercase, and special chracters in their password.
  var result = "";
  for (let i=0; i < userInput; i++) {
   result += lowUpChar[Math.floor(Math.random() * lowUpChar.length)]
   console.log(result)
 }
 return result
} else if (lowercase && !uppercase && numbers && character) { // if the user wants lowercase chracters, numbers, and special chracters in their password.
  var result = "";
  for (let i=0; i < userInput; i++) {
   result += lowNumChar[Math.floor(Math.random() * lowNumChar.length)]
   console.log(result)
 }
 return result
} else if (!lowercase && uppercase && numbers && character) { // if the user wants uppercase chracters, numbers, and special chracters in their password.
  var result = "";
  for (let i=0; i < userInput; i++) {
   result += upNumChar[Math.floor(Math.random() * upNumChar.length)]
   console.log(result)
 }
 return result
} 
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


