/*

* What events will I use?

*1) Focus on the `button`
    - How to `switch` the active button?  -- class = "bp-vm-selected" switches betwteen 'a' elements
        <a href="#" class="cbp-vm-icon cbp-vm-grid" data-view="cbp-vm-view-grid">Grid View</a>
        <a href="#" class="cbp-vm-icon cbp-vm-list cbp-vm-selected" data-view="cbp-vm-view-list">List View</a>
    - Make a function that does that and invoke from REPL.
    -Can you wire that up to a `click` listener?
    -There are 2 buttons.
*2) What caused the layout to shift when buttons are clicked?
    (find reference to this?)
    - Write a function to do that?
    - Wire it up to a `click` event.
    -Can you toggle between them?



TODO
<a href>
-capture
-add event listener
-add class
- unadd class when other is selected

<div>
* toggle btwn view grid and view list classes
  -if grid is selected then view-grid class is added to div
  -if list is selected then view-list class is added to div
  -When grid is added, list is removed
  -When list is added, grid is removed
*/


var grid = document.getElementByClassName("cbp-vm-grid");

grid.addEventListener('click', function () {
  grid.className = 'cbp-vm-selected'

});

var list = document.getElementByClassName("cbp-vm-grid");

list.addEventListener('click', function() {
  list.className = 'cbp-vm-selected';
});















// parameter.target.style.visibility='hidden'

//
