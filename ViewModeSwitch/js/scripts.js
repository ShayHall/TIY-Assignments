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
var monkey = document.getElementById("cbp-vm-list");

monkey.addEventListener('click', function() {
  function toggleClass(flip) {
    var layout = document.getElementById("cb-vm-options").children;
    for (var i = 0; i < layout.length; i++) {
      layout[i].className = "a.cbp-vm-icon";
    }; //End for loop
    flip.className = "class2";
  }; //END function toggleClass
});//END eventListener

// var grid = document.getElementsByClassName("cbp-vm-grid");
//
// grid.addEventListener('click', function () {
//   grid.className += 'cbp-vm-selected'
//
// });

// var list = document.getElementsByClassName("cbp-vm-list");
//
//   console.log(list);// logs --> [a.cbp-vm-icon.cbp-vm-list]
//
//   layout.addEventListener('click', function() {
//     list.className = '.cbp-vm-selected';
//     console.log(list);
// });


// function toggleClass(list, "cbp-vm-selected"){
//     if (!list || !"cbp-vm-selected"){
//         return;
//     }
//
//     var classString = element.className, nameIndex = classString.indexOf(className);
//     if (nameIndex == -1) {
//         classString += ' ' + className;
//     }
//     else {
//         classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length);
//     }
//     element.className = classString;












// parameter.target.style.visibility='hidden'

//
