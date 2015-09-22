/*

* Focus on the Javascript that would take a user's input and turn it into output
* Find a way to capture input from form
* Working in groups- Output that input to console using console.log
* Break down baby steps (See MDN for correct event to listen for and how to make it do your bidding (intead of default behavior)

-Who are you listening to?-
* TracerBullet I can see the `target`
* It's not the `button` by the way
* Get ready for the main `event`

-Where is the data?-
* Capture the form submission with JavaScript
* Then output the form data to the console
* Post the output to a comment in your WIP Issue

document.activeElement (https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement)

1.) Make variables for all of the elements receiving input
   a. start with the form element and one type within form
   b. make variable for one of each type of form elements
   c. make them all!

2.) Make functions for each form element
   a. make a function that will console.log for the form
   b. make a function for one
   c. then make function for one of each type of form element
   d. make them all

3.) Make eventListeners
   a. make eventListener for form
   b. make eventListeners for each input???

console.log(varName.data)
*/

var firstName = document.getElementById("first_name");
var lastName = document.getElementById("last_name");
var email = document.getElementById("email");
var country = document.getElementById("country");
var bio = document.getElementById("bio");
var phone = document.getElementById("phone");
var affiliations = document.getElementById("affiliations");
var occupation = document.getElementById("occupation");
var catName = document.getElementById("cat_name");
var gadget = document.getElementById("gagdet");
var talent = document.getElementById("talent");
var drink = document.getElementById("drink");
var power = document.getElementById("power");
var weapon = document.getElementById("weapon");
var comments = document.getElementById("comments");


// var info = document.getElementsByClassName("cbp-mc-submit-wrap");//This isn't working...YET!


function collectedInfo () {
  var data = [firstName.value, lastName.value, email.value, country.value, bio.value, phone.value, affiliations.value, occupation.value, catName.value, gadget.value, talent.value, drink.value, power.value, weapon.value, comments.value];
  console.log(data);//console.log prints values as they are typed.
};


firstName.addEventListener('input', collectedInfo);
lastName.addEventListener('input', collectedInfo);
email.addEventListener('input', collectedInfo);
country.addEventListener('input', collectedInfo);
bio.addEventListener('input', collectedInfo);
phone.addEventListener('input', collectedInfo);
affiliations.addEventListener('input', collectedInfo);
occupation.addEventListener('input', collectedInfo);
catName.addEventListener('input', collectedInfo);
gadget.addEventListener('input', collectedInfo);
talent.addEventListener('input', collectedInfo);
drink.addEventListener('input', collectedInfo);
power.addEventListener('input', collectedInfo);
weapon.addEventListener('input', collectedInfo);
comments.addEventListener('input', collectedInfo);

// info.addEventListener('click', function() {
//   console.log(currentTarget);
// });//This isn't working... YET!
