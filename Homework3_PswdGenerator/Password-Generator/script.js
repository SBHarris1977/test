//Create the different variables that we will need
var userChoice = "";
var password = "";
var specialChar = "!@#$%^&*";
var lowerChar = "abcdefghijklmnopqrstuvwxyz";
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numChar = "1234567890";

//The first box to appear asking the user how many characters//
function run() {
  var passLength = parseInt(prompt("How many characters do you want?"));
  console.log(passLength);
  if (passLength < 8) {
    alert("Password must be at least 8 characters.");
  }
  if (passLength > 128) {
    alert("Password must be less than 128 characters.");
  }
  //Confirming that the password will include special characters, numbers, upper/lowercase//
  var special = confirm("Click OK to include special characters.");
  if (special === true) {
    userChoice += userChoice + specialChar;

  }

  var number = confirm("Click OK to include numbers.");
  if (number === true) {
    userChoice += userChoice + numChar;
  }

  var lower = confirm("Click Ok to include lowercase letters.");
  if (lower === true) {
    userChoice += userChoice + lowerChar;
  }

  var upper = confirm("Click OK to add uppercase letters.");
  if (upper === true) {
    userChoice += userChoice + upperChar;
  }
//If users selects cancel for either choice below they are prompted to select at least one//
  if (
    special === false &&
    number === false &&
    lower === false &&
    upper === false
  ) {
    alert("Must choose at least one character.");
//Loop added to keep adding elements based on user choice//
  }
  function passwordGen() {
    for (var i = 1; i <= passLength; i++) {
      password = password + userChoice.charAt(Math.floor(Math.random() * userChoice.length) + 1)

    }
    document.getElementById("display").value = password;
        
  }

  passwordGen()
}
//Function added to alert user that the password will be copied when the Copy to Clipboard button is clicked//
function clickCopy() {
  alert("Your password will be copied to the clipboard.");

var copyText = document.getElementById("display");
copyText.select();
copyText.setSelectionRange(0, 99999);/*For mobile devices*/

document.execCommand("copy");
alert ("Your Password: " + copyText.value + " has been copied.");
}
//Create prompt that asks user how many characters they want to use (min 8)

//Create the prompts that ask whether user wants to include each type as a password. If 'yes' - add that variable to userchoice


//Loop through the user choice array/
// function password(l,characters){
