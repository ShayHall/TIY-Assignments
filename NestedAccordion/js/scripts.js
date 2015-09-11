/*
* WORKING CODE DO NOT DELETE!
* WORKING CODE DO NOT DELETE!

var heading = document.querySelector(".cbp-nttrigger"); //Assigned name "heading" to the method of identifying the first element with class="cbp-nttrigger"
heading.addEventListener('click', function() { //Register a listener to 'heading'
  if (document.querySelector("li").className === "cbp-ntopen") { //created an if/else statement to recognize whether the li class = cbp-ntopen exists or not.
    document.querySelector("li").className= ""; //removes li class ="cbp-ntopen"
    } else {
    document.querySelector("li").className= "cbp-ntopen";//adds class ="cbp-ntopen"
  };
});

* WORKING CODE DO NOT DELETE!
* WORKING CODE DO NOT DELETE!
*/
var heading = document.querySelectorAll("h3.cbp-nttrigger"); //Assigned name "heading" to the method of identifying the first element with class="cbp-nttrigger"
heading[0].addEventListener('click', function() { //Register a listener to 'heading'
  if (document.querySelector("li").className === "cbp-ntopen") { //created an if/else statement to recognize whether the li class = cbp-ntopen exists or not.
    document.querySelector("li").className= ""; //removes li class ="cbp-ntopen"
    } else {
    document.querySelector("li").className= "cbp-ntopen";//adds class ="cbp-ntopen"
  };
console.log(heading);
});

heading[1].addEventListener('click', function() { //Register a listener to 'heading'
  if (document.querySelector("li").className === "cbp-ntopen") { //created an if/else statement to recognize whether the li class = cbp-ntopen exists or not.
    document.querySelector("li").className= ""; //removes li class ="cbp-ntopen"
    } else {
    document.querySelector("li").className= "cbp-ntopen";//adds class ="cbp-ntopen"
  };
console.log(heading);
});

heading[2].addEventListener('click', function() { //Register a listener to 'heading'
  if (document.querySelector("li").className === "cbp-ntopen") { //created an if/else statement to recognize whether the li class = cbp-ntopen exists or not.
    document.querySelector("li").className= ""; //removes li class ="cbp-ntopen"
    } else {
    document.querySelector("li").className= "cbp-ntopen";//adds class ="cbp-ntopen"
  };
console.log(heading);
});

heading[3].addEventListener('click', function() { //Register a listener to 'heading'
  if (document.querySelector("li").className === "cbp-ntopen") { //created an if/else statement to recognize whether the li class = cbp-ntopen exists or not.
    document.querySelector("li").className= ""; //removes li class ="cbp-ntopen"
    } else {
    document.querySelector("li").className= "cbp-ntopen";//adds class ="cbp-ntopen"
  };
console.log(heading);
});

heading[4].addEventListener('click', function() { //Register a listener to 'heading'
  if (document.querySelector("li").className === "cbp-ntopen") { //created an if/else statement to recognize whether the li class = cbp-ntopen exists or not.
    document.querySelector("li").className= ""; //removes li class ="cbp-ntopen"
    } else {
    document.querySelector("li").className= "cbp-ntopen";//adds class ="cbp-ntopen"
  };
console.log(heading);
});

// var heading = document.querySelectorAll(".cbp-nttrigger");
//
// heading.addEventListener('click', function() {
//   var openAll = document.querySelectorAll("li");
//   for (var i =0; i < openAll; i++) {
//     if (document.querySelector("li").className === "cbp-ntopen") {
//       document.querySelector("li").className= "";
//       } else {
//       document.querySelector("li").className= "cbp-ntopen";
//     };
//   };
// });


// heading.addEventListener('click', function() {
//   for (var i=o; i < openAccordion.length; i++) {
//     if (document.querySelector("li").className === "cbp-ntopen") {
//       document.querySelector("li").className= "";
//       } else {
//       document.querySelector("li").className= "cbp-ntopen";
//     };
//
// });





// *TODO

// * When I click on a header...
//  //selected the first element with class "cbp-nttrigger"
// var tracer = console.log("Tracy McTracerton"); // Just checking to see if it works
// var heading = document.querySelector(".cbp-nttrigger"); //tried querySelectorAll, but it broke the code.
// var closeHeading = document.querySelector(".cbp-nttrigger"); //made a identifier to undo open click event
// /*if (class=cbp-ntopen" exists) {
// closeHeading.addEventLister("click", function() {
// document.querySelector("li").className="";});
// */
// heading.addEventListener('click', function(){
// document.querySelector("li").className= "cbp-ntopen";
// }); //tried to add useCapture parameter to addEventListener.. Didn't work.

// close heading.addEventListener('click', document.querySelector("li").className= "";// * new block of text open by making function that will : 1) add class="cbp-ntopen" to 1st <li> (first child?) of <ul id="cbp-ntaccordion" class="cbp-ntaccordion">
// });


// * the block of text closes...
//

// * We want all top-level accordians to open and close at same time...
//
