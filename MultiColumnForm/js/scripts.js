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
var form = document.querySelectorAll("form");
var firstName = document.getElementById("first_name");

function casualName() {
  console.log(firstName.value);//console.log prints values as they are typed.
};





firstName.addEventListener('input', casualName);
form.addEventListener('submit', function() {
  console.log(firstName.value);
};);
/*
* PUT both `script.js` code in repo as well as results of the output as comment in WIP Issue
*For good measure, drop a few comments and be sure to use code fences.
*/







/*
**From Nested Accordion w/exact classnames changed for generic

var heading = document.querySelector("class0");
heading.addEventListener('click', function() {
  if (document.querySelector("li").className === "class1") {
    document.querySelector("li").className= "";
    } else {
    document.querySelector("li").className= "class1";
  };
});

**
*/

/*
** from ViewModeSwitch

var buttons = document.querySelector("div #cbp-vm");
var grid = document.querySelector("a.cbp-vm-icon.cbp-vm-grid");
var list = document.querySelector("a.cbp-vm-icon.cbp-vm-list")

grid.addEventListener('click', function(gridButton) {
  var currentButton = gridButton.currentTarget;
buttons.className = "cbp-vm-switcher cbp-vm-view-grid";
grid.className = "cbp-vm-icon cbp-vm-grid cbp-vm-selected";
list.className = "cbp-vm-icon cbp-vm-list"
});

list.addEventListener('click', function (listButton) {
  var currentButton = listButton.currentTarget;
  buttons.className = "cbp-vm-switcher cbp-vm-view-list";
  list.className = "cbp-vm-icon cbp-vm-list cbp-vm-selected";
  grid.className = "cbp-vm-icon cbp-vm-grid";
});

*/
