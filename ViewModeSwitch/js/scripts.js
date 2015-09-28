/* View Mode Switch javascript code */

$(".cbp-vm-grid").click(function(){
  alert("WHAT!?");
  $(this).addClass("cbp-vm-selected");
  $(".cbp-vm-icon.cbp-vm-list").removeClass("cbp-vm-selected");
  $("#cbp-vm").removeClass("cbp-vm-view-list");
  $("#cbp-vm").addClass("cbp-vm-view-grid");
});

$("a.cbp-vm-list").click(function(){
  alert("WHAT!?");
  $(this).addClass("cbp-vm-selected");
  $(".cbp-vm-icon.cbp-vm-grid").removeClass("cbp-vm-selected");
  $("#cbp-vm").removeClass("cbp-vm-view-list");
  $("#cbp-vm").addClass("cbp-vm-view-grid");
});
