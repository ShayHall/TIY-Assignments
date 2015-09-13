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
