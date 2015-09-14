var buttons = document.querySelector("div #cbp-vm");
var gridButton = document.querySelector("a.cbp-vm-icon.cbp-vm-grid");
var listButton = document.querySelector("a.cbp-vm-icon.cbp-vm-list")

gridButton.addEventListener('click', function(event) {
  buttons.className = "cbp-vm-switcher cbp-vm-view-grid";
  gridButton.className = "cbp-vm-icon cbp-vm-grid cbp-vm-selected";
  listButton.className = "cbp-vm-icon cbp-vm-list"
});

listButton.addEventListener('click', function (event) {
  buttons.className = "cbp-vm-switcher cbp-vm-view-list";
  listButton.className = "cbp-vm-icon cbp-vm-list cbp-vm-selected";
  gridButton.className = "cbp-vm-icon cbp-vm-grid";
});
