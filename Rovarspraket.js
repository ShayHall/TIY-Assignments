/**
 * write a function `max` that takes two `Numbers` as arguments
 * and returns the largest of them. HINT: Use `if-else`...!
 */
console.assert(max(1,3) === 3);
console.assert(max(0,3) === 3);
console.assert(max(10,3) === 10);
console.assert(max(-1,-3) === -1);
console.assert(max("aaa",0) === 0);
console.assert(isNaN(max("aaa","bbb")));

/**
 * @param {Number} A to compare to B
 * @param {Number} B to compare to A
 * @return {Number} the greater of A or B
 */
function max(A, B) {
  if (A > B) {
    return A;
  } else {
    return B;
  };
}//END max

/**
 * Write a function `maxOfThree` that takes _three_
 * `Numbers` as arguments and returns the largest of them.
 */
console.assert(maxOfThree(1,3,2) === 3);
console.assert(maxOfThree(0,3,-1) === 3);
console.assert(maxOfThree(10,3,50) === 50);
console.assert(maxOfThree(-1,-3,-10) === -1);
console.assert(maxOfThree("aaa",0,1) === 1);
console.assert(isNaN(maxOfThree("aaa","bbb","ccc")));

/**
 * @param {Number} A
 * @param {Number} B
 * @param {Number} C
 * @return {Number} greatest of A, B, and C
 */
function maxOfThree(A, B, C) {
  if ((A > B) && (A > C)) {
    return A;
  } else if (B > C) {
    return B;
  } else {
    return C;
  };
} //END maxOfThree


/** Explanation of isVowel solution
 * Write a function `isVowel` that takes a character
 * (i.e. a `String` of length 1) and returns a `Boolean`
 * indicating whether the input is a vowel or not.
* First we must determine if we are working with a string.
    -Use typeof
*Next we must determine if string is 1 character long.
    -Use .length
 */

console.assert(isVowel(0) === false);
console.assert(isVowel("B") === false);
console.assert(isVowel("b") === false);
console.assert(isVowel("a") === true);
console.assert(isVowel("E") === true);
console.assert(isVowel("AEIOU") === false);

/**
 * @param {String} char of length 1
 * @return {Boolean} whether `char` is an English vowel
 */
function isVowel(char) {
  if (typeof char == "string") {
    if (char.length == 1) {
      char = char.toUpperCase();
      switch (char) {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
          return true;
          break;
        default:
          return false;
      }//END switch
    } else {
      return false;
    };//END length if
  } else {
    return false;
  };//END typeof if
};//END isVowel

/* Explanation of disemvowelment
 * The `disemvowel` function combats the Internet
 * Trolls by handily removing all of the vowels from
 * their angry, hurtful comments. Its Super-Effective!
 *
 * @param {String} comment to disemvowel
 * @return {String} cmmnt dsmvwld
*1st I made sure comment is a string using type of
*2nd I made disemvowel return comment as itself
*3rd I made disemvowel recognize individual characters.
*I also made disemvowel recognize vowels (see isVowel test... Check!)
*Get disemvowel to delete vowels.
*Get disemvowel to return string without vowels (wtht vwls)
    -AH! I remember coming across split method... that should do everything I just described.
/*passes "banana" but not troll.
How do I combine multiple separators?
-I need to split, then run isVowel function BUT return != vowels, then join what has been returned...
*pick apart individual characters to evaluate.  turn string into array?
*/

function disemvowel(comment){
  if (typeof comment == "string") {
    removeLittleA = comment.split("a").join("");
    removeBigA    = removeLittleA.split("A").join("");
    removeLittleE = removeBigA.split("e").join("");
    removeBigE    = removeLittleE.split("E").join("");
    removeLittleI = removeBigE.split("i").join("");
    removeBigI    = removeLittleI.split("I").join("");
    removeLittleO = removeBigI.split("o").join("");
    removeBigO    = removeLittleO.split("O").join("");
    removeLittleU = removeBigO.split("u").join("");
    removeBigU    = removeLittleU.split("U").join("");
    comment = removeBigU;
    return comment;
  } else {
    return false;
  };//END typeof if
}  //END DISEMVOWEL

console.assert(disemvowel(0) === false);
console.assert(disemvowel("banana") === "bnn");
console.assert(disemvowel("This website is for losers LOL!") === "Ths wbst s fr lsrs LL!");

/**
 * The function `rovarspraket` will translate text into
 * a "rövarspråket", i.e. double every consonant and
 * place an occurrence of "o" in between them.
 *
 * For example, `rovarspraket("this is fun")` should
 * return `"tothohisos isos fofunon"`
 *
 * @see https://en.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket

 * @param {String} text to translate into "rövarspråket"
 * @return {String} translation
 */
function rovarspraket(input){
    return input.replace(/[b]/ig, /$&o$&/);
};

console.log(rovarspraket("b"));
console.assert(rovarspraket("a") === "a")
console.assert(rovarspraket("b") === "bob")
console.assert(rovarspraket("cat") === "cocatot")
console.assert(rovarspraket("javascript") === "jojavovasoscocroripoptot")
console.assert(rovarspraket(0) === "0")
