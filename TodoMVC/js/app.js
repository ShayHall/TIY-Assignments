//Using the HTML file `index.html` as the bones, CSS files and Javascript files are used to manipulate the code.


/*
** I can add a task to my todo list so that I can remember to do it later.

	1) Attach an `addEventListener` to the `input` element of the `header` element of the `document` that...
 		A) Takes `change` as the type...
			a) When `change` is triggered, a function is fired that...
		B) Creates a new `li` element with the data from the header input is logged as a new text node:
			a) Use the listener `document.createElement()` to create a new `li` element with a new `label` element inside it. (https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
			b) Use the method `document.createTextNode` to store text from `input` element  (https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)

** I can edit a task on my todo list so that I can correct typos.

	1) Attach an `addEventListener` to the newly created `label` element that...
 		A) Takes `click` as the type...
			a) When `click` is triggered, a function is fired that...
		B) Edits the text:
 			a) Use the property `.innerHTML` on the `label` of the `li`  (https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)

** I can mark a task as complete so that I remember that I have done it.

	1) Attach an `addEventListener` to the button next to the task that...
		A) Takes `click` as the type...
			a) when `click` is triggered, a function is fired that...
		B) Adds the `class = "complete"` in the tasks `li` element:
			a) Use `.ClassName` to assign `class = "complete"` to `li` element (https://developer.mozilla.org/en-US/docs/Web/API/Element/className)

** I can mark a completed task as incomplete so that I actually complete it this time.
	1) Expand on the function in the previous section to...
 		A) Create a `toggle` effect where `class = "complete"` is added or removed...
			a) Use and `if else` statement to determine whether to add ro remove `class = "complete"` (See example from ViewModeSwitch below)
** I can delete a task from my todo list so that I don't have to see it any more.
	1)

** I can delete all the completed tasks from my todo list so that I can clean up completed tasks.
	1)

** I can filter the list of tasks so that I can see just what tasks I have completed and what are left
	1)

*/

(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!

})(window);




/* VIEW MODE SWITCH if else experiment...
var buttons = document.querySelector("div #cbp-vm");
var gridButton = document.querySelector("a.cbp-vm-icon.cbp-vm-grid");
var listButton = document.querySelector("a.cbp-vm-icon.cbp-vm-list");

gridButton.addEventListener('click', function(event) {
  if (buttons.className = "cbp-vm-switcher cbp-vm-view-grid") {
    gridButton.className = "cbp-vm-icon cbp-vm-grid cbp-vm-selected";
    listButton.className = "cbp-vm-icon cbp-vm-list";
  } else {
    listButton.className = "cbp-vm-icon cbp-vm-list cbp-vm-selected";
    gridButton.className = "cbp-vm-icon cbp-vm-grid";
	};
});

*/
