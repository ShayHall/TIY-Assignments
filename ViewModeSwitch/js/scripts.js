/* View Mode Switch javascript code */

/**
*
* When `list` button is clicked...
  -`list` button color changes to dark blue.
  -`grid` button color changes to light gray.
  -`div` with class `list` becomes "visible"
  -`div` with class `grid` becomes "invisible"

* When `grid` button is clicked...
  -`grid` button color changes to dark blue.
  -`list` button color changes to light gray.
  -`div` with class `grid` becomes "visible"
  -`div` with class `list` becomes "invisible"

**/

var toggle = document.querySelector("div #cbp-vm");
var gridButton = document.querySelector("#grid");
var listButton = document.querySelector("list");

gridButton.addEventListener('click', function(event) {
  console.log("BUBBLES!");
  toggle.className = "cbp-vm-switcher cbp-vm-view-grid";
  gridButton.className = "cbp-vm-icon cbp-vm-grid cbp-vm-selected";
  listButton.className = "cbp-vm-icon cbp-vm-list"
});

listButton.addEventListener('click', function (event) {
  toggle.className = "cbp-vm-switcher cbp-vm-view-list";
  listButton.className = "cbp-vm-icon cbp-vm-list cbp-vm-selected";
  gridButton.className = "cbp-vm-icon cbp-vm-grid";
});
