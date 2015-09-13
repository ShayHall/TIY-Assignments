/*
*
* vvv THIS IS OUR WORKING CODE!!!  DON'T DELETE!!! vvv

var list = document.getElementsByClassName("cbp-vm-list");

  console.log(list);// logs --> [a.cbp-vm-icon.cbp-vm-list]

  list.addEventListener('click', function() {
    list.className = '.cbp-vm-selected';
    console.log(list);
});

* ^^^ THIS IS OUR WORKING CODE!!!  DON'T DELETE!!! ^^^

*
*

* What events will I use?
Event- HashChangeEvent- (https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent)
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


var switcheroo = document.getElementsByClassName("cbp-vm-options");//Define 'list' as the div ID='cbp-vm'
console.log("Switcheroo is " + switcheroo.item({}));
var grid = switcheroo.item({}).firstChild;
console.log(grid);

var list = grid.nextSibling;
console.log(list);
list.addEventListener('click', function() { //add an event listener to listen for a `click` on the div ID='cbp-vm'
grid.className = "cbp-vm-icon cbp-vm-grid";//when `click` is heard, change class of firstChild to this
list.className = "cbp-vm-icon cbp-vm-list cbp-vm-selected"// when `click is heard, change class of secondChild to this
console.log(grid);
console.log(list);
});//END addEventListener and END function to switch selected to list.









/*
*
* vvv Code graveyard below. vvv

var list = document.getElementsByClassName('.cbp-vm-list');

  list.addEventListener('click', function() {
    list.className += ' cbp-vm-selected';
    console.log("tracer arrows =-->");
});

function modifyText() {
  var t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue == "three") {
    t2.firstChild.nodeValue = "two";
  } else {
    t2.firstChild.nodeValue = "three";
  }
}

// add event listener to table
var el = document.getElementById("outside");
el.addEventListener("click", modifyText, false);


var grid = document.getElementsByClassName("cbp-vm-grid");

grid.addEventListener('click', function () {
  grid.className += 'cbp-vm-selected'

});

var list = document.getElementsByClassName("cbp-vm-list");

  console.log(list);// logs --> [a.cbp-vm-icon.cbp-vm-list]

  layout.addEventListener('click', function() {
    list.className = '.cbp-vm-selected';
    console.log(list);
});

* ^^^ Code Graveyard above ^^^
*
*/











// parameter.target.style.visibility='hidden'
