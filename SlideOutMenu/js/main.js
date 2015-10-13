// $("a.dropdown").click(function(){
//     $(this).toggleClass("active");
//     if ($(this).siblings().is('.active')) {
//       $(this).siblings().animate({top: '0'});
//     } else {
//       $(this).siblings().animate({top: '+=62px'}, 'fast');
//     };
//     $(this).siblings().toggleClass("active");
//     $("a.dropdown").not(this).removeClass("active");
//     $("a.dropdown").not(this).siblings().removeClass("active");
//     $("a.dropdown").not(this).siblings().animate({top: '0px'});
//   });//desktop JS for slide effect

  $("a.dropdown").click(function(){
    $(this).toggleClass("active");
    $(this).siblings().toggleClass("active");
    $("a.dropdown").not(this).removeClass("active");
    $("a.dropdown").not(this).siblings().removeClass("active");
  });


/*   ^^^ WORKING CODE FOR DROPDOWN ^^^ */



// $("a.dropdown").click(function(){
  // $(this).toggleClass("active");
  // $(this)siblings().animate({opacity: 1}, 'slow');
  // $("a.dropdown").not(this).removeClass("active");
  // $("a.dropdown").not(this).siblings().animate.removeClass("active");
// });
