# About JavaScript

## Basic Literal Types

### `null` -- intentional empty value
`null` is often found in a place where an object can be expected but no object is relevant.

``` foo does not exist, it is not defined and has never been initialized:

`>` foo

"ReferenceError: foo is not defined"

foo is known to exist now but it has no type or value:

`>` var foo = null; foo

"null" ```


### `Boolean` -- has two literal values- 'true' and 'false'
The `Boolean` data type is primarily associated with conditional statements, which allow different actions and change control flow depending on whether a programmer-specified `Boolean` condition evaluates to `true` or `false`.


``` Boolean(5>6); /* false */

Boolean(null); /* false */

Boolean(true); /* true */

Boolean(1); /* true */ ```


### `Number` -- numeric data type
In JavaScript numbers are typically integers (whole numbers and decimals)

  > 1

  > 0

  > [3.14159 (Click for more fun!)](http://www.piday.org/million/)

  > Infinity


### String -- Words
sequence of characters used to represent text
  > "one"

  > "1"

  > "antidisestablishmentarianism"

## Special Constants

### `Infinity` --

  > console.log(1 / Infinity); /* 0 */

  > console.log(Math.log(0)); /* -Infinity */  

  > console.log(Infinity + 1); /* Infinity */  

  > console.log(Math.pow(10,1000)); /* Infinity */  

  > console.log(Infinity); /* Infinity */  



### `NaN` -- not a number
numeric data type that means an undefined value or value that cannot be represented, especially results of floating-point calculations.

  > 12/0 //NaN


### `undefined` -- variable that has not been assigned a value

  > // logs "foo string"

  > (function(){ var undefined = 'foo'; console.log(undefined, typeof undefined); })();

  > // logs "foo string"

  > (function(undefined){ console.log(undefined, typeof undefined); })('foo');

## Operators

### Arithmetic

#### `+` -- addition

Given two `Number` values, produces the sum of those values as another `Number`. For example:

  > 1 + 1 // yields 2

  > 2 + 2 // yields 4

#### `-` -- subtraction
Given two `Number` values, produces the difference of those values as another `Number`.

  > 1-1 // yields 0

  > 1-2 // yields -1


#### `/` -- division
A number called the dividend being 'divided' by another number called the divisor.  The output is another `Number` called the quotient.

  > 10 / 2 // yields 5

  > 5 / 2 // yields 2.5


#### `*` - multiplication
Given two `Number` values, produces the product of those values as another `Number`.
  > 2 * 5 `yields 10`

  > 1 * 2 `yields 2`

#### `%` -- remainder
The `remainder` operator returns the first operand modulo the second operand.

  > 10 % 5 // yields 0

  > 15%2 // yields 1

### `Unary Operators` -- Operators that only take one operand
Most operators require two operands, but some don't!

#### `typeof` -- determines type of given operand

> typeof "Word" // returns String

#### `-` -- makes a value negative
> var one = 1;
> `-one` = -1 // Makes a value negative

### Comparisons

#### `>` -- greater than
The greater than operator returns true if the left operand is greater than the right operand.

  > 1 > 2 // yields "false"

  > 2 + 2 // yields 4

#### `<` -- less than

  > 5 < 10 // yields "true"

  > "this".length < 2 // yields "false"

#### `==` -- equal to

  > 1   ==  1        // true

  > 2  ==  1        // false

  > 0   == false     // true

  > 0   == null      // false

#### `>=` -- greater than or equal
The greater than or equal operator returns true if the left operand is greater than or equal to the right operand.

  > 4 >= 3 // true

  > 3 >= 3 // true

#### `<=` -- less than or equal
The less than or equal operator returns true if the left operand is less than or equal to the right operand.

  > 3 <= 4 // true

  > 12 <= 2 // false

#### `!=` -- inequality
The inequality operator returns true if the operands are not equal.

  > 1 !=   2     // true

  > 1 !=  "1"    // false

  > 1 !=  '1'    // false

### Assignments
The basic assignment operator is equal (=), which assigns the value of its right operand to its left operand. That is, x = y assigns the value of y to x. The other assignment operators are usually shorthand for standard operations, as shown in the following definitions and examples.

  > Assignment 	x = y 	x = y

  > Addition assignment 	x += y 	x = x + y

  > Subtraction assignment 	x -= y 	x = x - y

  > Multiplication assignment 	x *= y 	x = x * y

  > Division assignment 	x /= y 	x = x / y

  > Remainder assignment 	x %= y 	x = x % y

  > Exponentiation assignment 	x **= y 	x = x ** y

#### [`dot operator`] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
The `. (dot)` operator is used to access properties.  Bracket notation is the other way to do this.

``` console.log("dots!");
"words".length;```

#### `var` -- idenitfier
A sequence of characters in the code that identifies a variable, function, or property.

  > var variableName = 3;

  >variableName + 2 // yields 5

  > variableName = 5

  >variableName +2 // yields 7

## Control Flow

Using the MDN and your own research, describe the control flow constructs: { } as a block operator, if and else Then read and cover the looping and iteration keywords: for, while, and do/while.
BEAST MODE

If you're looking for more of a challenge, read up on switch / case and the other for-type loops. Document them, as well, providing examples.
NIGHTMARE MODE

The error handling constructs -- try / catch / finally and throw -- can be a bit puzzling. Review them if you're still not satisfied with your understanding of Control Flow. Be prepared for some wackiness.

### Functions

Functions are a form of [control flow](http://en.wikipedia.org/wiki/Control_flow) used in computer programs... (you fill in the rest)

#### `function` -- keyword

`function` is used to define a function with parentheses and curly braces.
This is a function definition for 'funcFace'.
```function funcFace (arguments) {
  body of function;
}```

A function has three things:
<ol>
  <li>input</li>
  <li>output</li>
  <li>side effects</li>
</ol>
The output is `undefined` by default.

##### `anonymous function` -- no name has been assigned

``` `console.log(2)`;
function (){
}```

##### `function expression` -- defines function as part of larger expression syntax
A Function Expression is typically a variable assignment.


```_anonymous function expression_
var a = function() {
  return 3;
}```

_named function expression_
var a = function bar() {
>>>>>>> master
>    return 3;
>}
>
> //self invoking function expression
>(function sayHello() {
>    alert("hello!");
> })();


##### `function delcaration` -- defines a function with specified parameters

``` function (a,b) {
 }; ```

##### `function invocation` -- puts the function to work

``` functionName ();```

##### `function definition` -- gives a job to a function

``` function <identifier>() {
 };```

```function bar() {
   return 3;
 } ```

##### `parameters` -- named variable passed into a function

> Parameter variables are used to import arguments into functions.
> function functionName (parameter1, parameter2) {
> };

## Containers

### `Arrays`

##### [Array Literal] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Array_literals)
A list of expressions that each represent an array and is enclosed in square brackets.
When initialized, it takes the specified values as it's elements.
It's length is set to the number of arguments specified.

##### Examples
```var exampleArray = ["parameters", "elements", "arguments", ,"values"];
exampleArray.length //yeilds 5 (the empty place between commas is an unspecified element that returns `undefined`
```

##### [Array.prototype.length] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length)
The `length` property represents an integer that is always numerically greater than the highest index in the array.
If the length is assigned a number less than the number of elements in the array, the array is truncated to that length, but if the length is larger than the number of elements, it does not increase the number of elements.  _Therefore length does not neccesarily indicate the number of defined values in the array._

##### Examples
```var name = ["John", "Jacob", "Jingleheimer", "Schmidt"];
//The length of `name` is 4.
name.length = 2;
//name = ["John", "Jacob"];
// The length of `name` is now 2.
```

#### [Methods] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Methods_2)


##### [`Array.prototype.pop`] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
* _parameters:_ none
* _returns:_ the last element
* _side-effects_: removes the element returned

##### Examples
``` var rumpShaker = ["Check", "Baby", "Check" "Baby", "One", "Two", "Three", "Four"].pop
console.log(rumpShaker) //yields ["Check", "Baby", "Check" "Baby", "One", "Two", "Three", "Four"]
var wreckXnEffect = rumpShaker.pop();
console.log(wreckXnEffect) // yields ["Check", "Baby", "Check" "Baby", "One", "Two", "Three"]
console.log(popped) // yields "Four"
```

##### [`Array.prototype.charAt`] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
* _parameters:_ index- An integer between 0 and 1-less-than length of string
* _returns:_ the character of string at the place defined by parameter.
* _side-effects:_ none

##### Examples
```"Words are 2 cool".charAt(11)  //yields "2"
"0123456".charAt(0) //yields "0"```

##### [`String.prototype.charCodeAt`] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
* _parameters:_ index- an integer >= 0 and < length of string.  if it is not a number, it defaults to 0.  if it is less that 0 or greater than length of string it returns `NaN`
* _returns:_ numeric Unicode value of character at given index
* _side-effects:_

##### Examples
``` "Alphabet".charCodeAt(0); // yields 65 (the Unicode value for A) ```

##### [`Array.prototype.push()`] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
* _parameters:_ elements to add to the end of the array
* _returns:_  length of array including appended elements
* _side-effects:_ new elements added to the array

##### Examples
```var mexicanFoods = ["taco", "burrito", "quesadilla"];
var masComida = mexicanFoods.push("enchillada, "tamale");
console.log(mexicanFoods) =["taco", "burrito", "quesadilla","enchillada, "tamale"];
console.log(masComida) = 5;
```

##### [`Array.prototype.shift()`] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
* _parameters:_ none
* _returns:_ returns the removed value.  if length of property is 0, returns `undefined`
* _side-effects:_ removes element at zeroeth index and shifts values down,

##### Examples
```var dietFoods = ["cake", "lettuce", "water", "air"];
console.log(dietFoods); //yields cake, lettuce, water, air
var nutritionistWatching = dietFoods.shift();
console.log("Eat more " + dietFoods) //returns "Eat more lettuce, water, air";
console.log("Don't eat " + shifted);  returns "Don't eat cake"
```

##### [`Array.prototype.reverse()`] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
* _parameters:_ none
* _returns:_ reverses an array in place and returns a reference to to the array.
* _side-effects:_

##### Examples
```var missyElliot = ['T', 'i', ' ', 'e', 's', 'r', 'e', 'v','e', 'r', ' ', 'd', 'n', 'a', ' ', 't', 'i', ' ', 'p', 'i', 'l', 'f', ' ', 'n', 'w', 'o', 'd', ' ', 'g', 'n', 'i', 'h', 't', 'y', 'm', ' ', 't', 'u', 'p', ' ', 'I'];
missyElliot.reverse();
console.log(missyElliot) //['I', ' ', 'p', 'u' 't', ' ', 'm', 'y', ' ', 't', 'h', 'i', 'n', 'g', ' ', 'd', 'o', 'w', 'n', ' ', 'f', 'l', 'i', 'p' ' ', 'i', 't', ' ', 'a', 'n', 'd', ' ', 'r', 'e', 'v', 'e', 'r', 's', 'e', ' ', 'i', 't'] ```

##### [`string.prototype.split()`] (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
* _parameters:_
separator- optional, specifies the character(s) to use in separating string.  
limit-optional, an integer specifying a limit on the number of splits to be found
* _returns:_ an array of strings
* _side-effects:_

##### Examples
```function splittingHeadache = "I have a splitting headache";
var noise = splittingHeadache.split("a");
console.log(noise); //returns "I h", "ve ", " splitting he", "d", "che"
```

## `Objects` -- a named container for values
collection of properties. Property is an association between a name (or key) and a value.
A property's value can be a function.

```Parameter variables are used to import arguments into functions.
   function functionName (parameter1, parameter2) {
 };```

#### Control Flow constructs -- allow flow of a program to change within some code.
These statements are often `conditional statements` utilizing Booleans within `{ }`

##### { } as block operator -- used to group 0 or more statements
``` function () {
  thisIsAStatement = "in the block"
  return "This is a statement in the block"
} ```

###### if -- statement that executes based on a Boolean value.
if value is `true` the statement executes, otherwise it is skipped.
```if (`Expression that produces a Boolean Value of true`) {
  return true;
} //yields true```

###### else -- part of an `if` statement
identifies blocks of code that are executed when first condition is false.
``` if (false) {
  return "Yes";
} else {
  return "NOOOOO!!!";
}```

###### while -- executes a given statement as long as it is true
``` while (a > b) {
  a -=100;
  console.log(a + "is more than" + b);
}```
`while` recognizes `break` and `continue` keywords.  
`break` will terminate loop.
`continue` finishes current iteration of while block of statements and if true loops

###### do-while -- just like while, but executes block at least once.
``` do {
  a += 1;
} while (a < 10);```

###### switch -- evaluates an expression and checks it against case clauses and if true executes that case's statements
`break` is used to move to next case.
`default` gives a statement to execute if no

```switch (1 + 2) {
  case 3:
  console.log("Truth!");
  break;
  case "bananas":
  console.log("Lies!");
  break;
  default:
  return "Do some math."
}```

###### for -- a loop that repeats until specific condition evaluates to false
```for (`initial expression`; `condition`; `incrementExpression`)
statement

for (var i=0; i<4; i+=1) {
  console.log(i);
} //yields 1,2,3 ```


###### for ( . . . in . . .) -- statement iterates specified variable over all enumerable properties of an object.
For each distince property the specific statement will be executed.

###### try/catch --marks a block of statement to try, and if there is an exception thrown, it specified a response
```try {
  "TRYcycle" === "bicycle",
}
catch (false) {
  return "Grow up"
}```

###### throw -- throws a user-defined exception
``` example??? ```

###### the Exception type -- condition that interrupts normal code execution
```SyntaxError: Unexpected identifier (real familiar with this one...)```


## Reading JavaScript: DOM EDITION
###`DOM: Document Object Model` -- programming interface for HTML, EML, and SVG documents
provides structured representation of the document or tree and defines a way that the structure can be accessed from programs in order to manipulate structure, style, and content.

### `Window` Object -- represents a window that contains a DOM document.
The document property points to the DOM document loaded in that window.

##### `location` -- `window.location` is a read-only property that returns a `location` object with info about current location of document.  While it is read-only, it can be made into a string in most cases.

##### `document` -- returns a reference to the document contained in the window.
`doc = window.document` doc is an object reference to a document

##### `history` --`window.history` is a read-only property that returns a reference to the History object. This provides an interface for manipulating the browser session history.
``` var _historyObj_ = window.history;
ex. history.back();  //equivalent to clicking back button
```

##### `alert` -- displays an alert dialog with optional specified content and an `OK button`
It is used to inform the user with no required response other than acknowledgment of message.
``` window.alert(["message"]);```

##### `confirm` -- displays a modal dialog (user cannot access the rest of the program's interface until the dialog box is closed) with an optional message and two buttons `OK` and `Cancel`
``` result = window.confirm(["message"] // result is a Boolean value determined by selecting `OK` or `Cancel`

##### `reload` -- `location.reload` method reloads resources from current URL.
```object.reload([forcedReload]);```

#####`open` -- loads a resource into either a new browsing context (like a window) or one that already exists.
Creates a new secondary browser window.
``` var windowObjectReference = window.open(strUrl, strWindowName, [strWindowFeatures]); //`windowObjectReference` refers to newly created window.
// `strUrl` is the URL to be loaded in the newly opened window like HTML document, image file, or other resource supported by browser.
//`strWindowName` a string name for new window.
//`strWindowFeatures` optional parameter listing features(size, position, scrollbars, etc) of new window as a string.
```


##### `close` -- closes the current window
This method is only allowed to be called for windows that were opened by a script using `window.open()` method.
```window.close()

#### `location object` -- represents location of the object it is linked to.  Changes done to it are reflected on the object to which it relates.  Both `Document` and `Window` interface have linked `Location`.

##### URLUtils.href -- property that has DOMString containing whole URL
```string = object.href;
object.href = string;```

##### URLUtils.protocol -- represents the protocol scheme of the URL

##### URLUtils.host -- DOMString containing host (hostname, `:`, and port of URL)

##### URLUtils.hostname -- DOMString containing the domain of URL

##### URLUtils.port -- DOMString containing port number of URL

##### URLUtils.pathname -- DOMString containing initial `/` followed by path of URL

##### URLUtils.search -- DOMString containing a `?` followed by parameters of URL

##### URLUtils.hash -- DOMString containing a `#` followed by the fragment identifier of the URL

##### URLUtils.hash -- is DOMString containing the username specified before the domain name

##### URLUtils.hash --is DOMString containing the password specified before the domain name.

##### URLUtils.origin -- returns DOMString containing canonical form of origin of the specific location

### `Document` Object -- each web page loaded in browser has its own `document object`.
Document interface serves as an entry point into the web page's content and provides functionality which is global to the document.
Can be obtained from various APIs.

##### `head` -- Read-only property that returns the `<head>` element of current document.  
``` car objRef = document.head```

##### `body` -- property that returns `<body>` or `<frameset>` node of current document.
```var objRef = document.body;
document.body = objRef;```

##### `getElementById` -- Method that returns an object reference to the identified element
```element = document.getElementById(id);```

##### `getElementsByClassName` -- Method that returns a list of elements with the given class name.

##### `querySelector` -- returns first element within document that matches specified group of selectors

##### `querySelectorAll` -- returns list of the elements within the document that match the specified group of selectors.  Returns a NodeList object.

##### `appendChild` -- `Node.appendChild()` method adds a node to the end of the list of children in a specified parent node.  

##### `create*` create new nodes

##### `write` -- writes a string of text to a document stream opened by `document.open()`

##### `writeIn` -- writes a string of text followed by a newline character to a document.

### `HTMLElement` type -- an interface that represents any `HTML` element.  

##### `id` -- property representing the element's identifier, reflecting the id global attribute.

##### `className` -- gets and sets the value of the class attribute of specified element

##### `innerHTML` -- sets or gets the HTML syntax describing the elements descendants

##### `outerHTML` -- gets the serialized HTML fragment describing the element including its descendants.  It can be set to replace the element with nodes parsed from the given string.

##### `Node `tree -- the order in which objects implementing the `Document`, `DocumentFragment`, `DocumentType`, `Element`, `Text`, `ProcessingInstruction`, or `Comment` interface (nodes).

##### `children` -- `node.children` is a read-only property that returns a live `HTMLCollection` of the child elements of Node.

##### `parent` --`ParentNode` interface contains methods that are particular to `Node` objects that can have children.  `ParentNode` is a raw interface and no object of this type can be created; it is implemented by `Element`, `Document`, and `DocumentFragment` objects.

##### `sibling` --

##### `nextSibling` -- read-only property returns the node immediately following the specified one in its parent's `childNodes` list.

##### `firstChild` -- read-only property returns the node's first child in the tree.

##### `addEventListener` -- registers the specified listener on the `EventTarget` it's called on.

##### `dispatchEvent` -- invokes the affected `EventListener` in the appropriate order.

##### `*Attribute` family --

##### `HTMLCollection` type --

##### `NodeList`type --

(How they differ from `Array`
how they can be used _like_ an `Array`

##### `item` method --
