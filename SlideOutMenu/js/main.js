$("a.dropdown").click(function(){
  $(this).toggleClass("active");
  $(".dropdown").not(this).has(".active").removeClass("active");
  $(this).siblings().toggleClass("active");
});
