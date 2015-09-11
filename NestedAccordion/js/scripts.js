// *TODO
// * When I click on a header...
 //selected the first element with class "cbp-nttrigger"
  var heading = document.querySelector(".cbp-nttrigger"); //get an error saying:

heading.addEventListener('click', function(){ //get an error saying: "Uncaught TypeError: Cannot read property 'addEventListener' of null" (anonymous function)	@	scripts.js:6
  var tracer = console.log("Tracy McTracerton"); // Just checking to see if it works
  document.querySelector("li").className= "cbp-ntopen";// * a new block of text open up by making function that will : 1) add	 class="cbp-ntopen" to first <li> (first child?) of <ul id="cbp-ntaccordion" class="cbp-ntaccordion">
  heading.addEventListener('click', tracer); //Just checking to see if it works.

});


// Align clicked header to top of page....

// * When I click again on the same header...
//

// * the block of text closes...
//

// * We want all top-level accordians to open and close at same time...
//
