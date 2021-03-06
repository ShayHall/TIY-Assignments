//Using the HTML file `index.html` as the bones, CSS files and Javascript files are used to manipulate the code.
(function (window) {
	'use strict';

	var newTodo = document.querySelector(".new-todo");
	var itemsList = [];

	newTodo.addEventListener('change', function(event) {
		itemsList.push(newTodo.value);
		console.log(itemsList[itemsList.length-1]);
	}); //When class `.new-todo` receives text, it will add that to the newList array and return the most recent value added.

})(window);

	//function creates a new `li` element...
	 //with the data from the `header` `input` logged as a new text node:
	//if `taskList` and `taskText` work as side effects, I don't need to return anything.

	// ** I can add a task to my todo list so that I can remember to do it later.
	// 	1) Attach an `addEventListener` to the `input` element of the `header` element of the `document` that...
	//  		A) Takes `change` as the type...
	// 			a) When `change` is triggered, a function is fired that...
	// 		B) Creates a new `li` element with the data from the header input is logged as a new text node:
	// 			a) Use the listener `document.createElement()` to create a new `li` element with a new `label` element inside it. (https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement)
	// 			b) Use the method `document.createTextNode` to store text from `input` element  (https://developer.mozilla.org/en-US/docs/Web/API/Document/createTextNode)






	// ** I can edit a task on my todo list so that I can correct typos.
	//
	// 	1) Attach an `addEventListener` to the newly created `label` element that...
	//  		A) Takes `click` as the type...
	// 			a) When `click` is triggered, a function is fired that...
	// 		B) Edits the text:
	//  			a) Use the property `.innerHTML` on the `label` of the `li`  (https://developer.mozilla.org/en-US/docs/Web/API/Element/innerHTML)
	//
	// ** I can mark a task as complete so that I remember that I have done it.
	//
	// 	1) Attach an `addEventListener` to the button on the left of the task that...
	// 		A) Takes `click` as the type...
	// 			a) When `click` is triggered, a function is fired that...
	// 		B) Adds the `class = "complete"` in the tasks `input` within `li` element:
	// 			a) Use `.ClassName` to assign `class = "complete"` to `li` element (https://developer.mozilla.org/en-US/docs/Web/API/Element/className)
	//
	// ** I can mark a completed task as incomplete so that I actually complete it this time.
	// 	1) Expand on the function in the previous section to...
	//  		A) Create a `toggle` effect where `class = "complete"` is added or removed...
	// 			a) Use and `if else` statement to determine whether to add ro remove `class = "complete"` (See example from ViewModeSwitch below)
	//
	// ** I can delete a task from my todo list so that I don't have to see it any more.
	// 	1) Attach an `addEventListener` to the `button` on the right of the task that...
	// 		A) Takes `click` as the type...
	// 			a) When `click` is triggered, a function is fired that...
	// 		B) Remove `li` element containing the `div` with target `childNode`
	// 			a) Use `Node.removeChild` within a function. For example, see: (http://www.dustindiaz.com/add-and-remove-html-elements-dynamically-with-javascript/)
	//
	// ** I can delete all the completed tasks from my todo list so that I can clean up completed tasks.
	// 	1) Attach an `addEventListener` to the `button` in the footer that...
	// 		A) Takes `click` as the type...
	// 			a) When `click` is triggered, a function is fired that...
	// 		B) Removes all `li` elements with `class="completed"`
	// 			a) Create a vareable to capture all `class="completed"`
	// 				b) Use `getElementsByClassName` to gather these elements
	// 			b) Use this variable as the object on which to call property `.parentNode` and method `.removeChildNode` so as to remove all children of the parent from which the elements with `class="completed"` were gathered.  This is a variation on some code I saw here (https://dzone.com/articles/removing-element-plain) and I believe I scanned something similar somewhere else, as well...
	//
	// ** I can filter the list of tasks so that I can see just what tasks I have completed and what are left
	// 	1) Attach an `addEventListener` to each of the `a` elements in the `ul` with `class="filters"` in the footer that...
	// 		A) for "All"...
	// 			a) Takes `click` as the type...
	// 				i.) When `click` is triggered, a function is fired that...
	// 			b) adds `class="view"` to all existing `li` elements.
	// 		B) for "Active"...
	// 			a) Takes `click` as the type...
	// 				i.) When `click` is triggered, a function is fired that...
	// 			b) adds `class="view"` to all existing `li` elements without an assigned `class`.
	// 		C) for "Completed"...
	// 			a) Takes `click` as the type...
	// 				i.) When `click` is triggered, a function is fired that...
	// 			b) adds `class="view"` to all existing `li` elements wit an assigned `class="completed"`.
