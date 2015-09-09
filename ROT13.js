/**
 * The function `reverse` computes the reversal
 * of a given `String` (don't copy-pasta!)
 *
 * @param {String} S to reverse
 * @return {String}
 */
function reverse(S){
  /**Explanation of reverse thought process
*recognize each character distinctly... turn into array?  slice? split?
*Where will we split/splice it? How do we define the space? between characters?  index#? empty string("")?
*run `array.prototype.reverse` to reverse the array.
* turn array back into a string... magic?  .join  `YES!`
*/
return S.split("").reverse().join("");
// YOUR CODE HERE: NO INTERNET COPY-PASTA!
}

console.assert(reverse("") === ""); // Really?
console.assert(reverse("A") === "A"); // Jerk.
console.assert(reverse("cat") === "tac");
console.assert(reverse("ward") === "draw");
console.assert(reverse("books") === "skoob"); // Rokey, dokey...
console.assert(reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew");
console.assert(reverse("ti esrever dna ti pilf nwod gniht ym tup I") === "I put my thing down flip it and reverse it");

    // YOUR CODE HERE: NO INTERNET COPY-PASTA!
}

console.assert(reverse("") === ""); // Really?

console.assert(reverse("A") === "A"); // Jerk.

console.assert(reverse("cat") === "tac");

console.assert(reverse("ward") === "draw");

console.assert(reverse("books") === "skoob"); // Rokey, dokey...

console.assert(
  reverse("we don't want no trouble") === "elbuort on tnaw t'nod ew"
);

/**
 * Function `encode` accepts a `String` and produces
 * the appropriate ROT13 "encoded" version, i.e. every
 * character in `phrase` is "rotated" ahead by 13 characters.
 *
 * @see String.prototype.charCodeAt
 * @see String.prototype.fromCharCode
 * @see http://en.wikipedia.org/wiki/ROT13
 *
 * // Start with just `phrase`...
 * @param {String} phrase to encode
 * // Add `N` in part 2!
 * // @param {Number} N rotation to apply, default 13
 * @return {String} encoded with ROT13
 */


/**
What we need to do:
*turn string into array
*turn each letter of string into a unicode
*add 13
*turn unicode into string
*concatenate string
*/
function encode(phrase, N) {
  var code = phrase.split("");
  for (var i=0; i < code.length; i++) {
    code[i] = code[i].charCodeAt() + N;
    if (code[i] > 122) {
      code[i] = String.fromCharCode(code[i] - 26);
    } else {
      code[i] = String.fromCharCode(code[i]);
    }
  }
  console.log(code.join(""))
  return code.join("");
}

console.log("I have a " + (encode("Ares", 13)) + " gun");

console.assert(encode("hello", 13) === "uryyb");
console.assert(encode("uryyb", 13) === "hello");
console.assert(encode("hello", 2) === "jgnnq");

function encode(phrase/*, N */){
    // YOUR CODE HERE... EMPHASIS ON **YOUR**
}

/**
 * Function `decode` accepts a `phrase` and `N` and
 * decoded it appropriately, i.e. every _word_ character
 * in `phrase` is rotated backward by `N` characters.
 *
 * @param {String} phrase to decode
 * @param {Number} N rotation to apply, default 13
 * @return {String} decoded by ROT-N
*/
function decode(phrase, N){
  var code = phrase.split("");
  for (var i=0; i < code.length; i++) {
    code[i] = code[i].charCodeAt() - N;
    if (code[i] < 97) {
      code[i] = String.fromCharCode(code[i] + 26);
    } else {
      code[i] = String.fromCharCode(code[i]);
    }
  }
  return code.join("");
}

 */
function decode(phrase, N){
    // YOUR CODE HERE
}

// Produce more examples, please...
console.assert(encode("hello") === "uryyb");
console.assert(encode("uryyb") === "hello");

console.assert(encode("hello", 2) === "jgnnq")
console.assert(decode("jgnnq", 2) === "hello")
