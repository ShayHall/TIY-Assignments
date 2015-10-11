$("a.dropdown").click(function(){
  $(this).toggleClass("active");
  $(this).siblings().toggleClass("active");
  $("a.dropdown").not(this).removeClass("active");
  $("a.dropdown").not(this).siblings().removeClass("active");

});
