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


#### `*` -- multiplication
Given two `Number` values, produces the product of those values as another `Number`.
  > 2 * 5 // yields 10

  > 1 * 2 // yields 2

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
>    return 3;
>}
>
> //self invoking function expression
>(function sayHello() {
>    alert("hello!");
> })();

##### `function delcaration` -- defines a function with specified parameters

> function (a,b) {
> };

##### `function invocation` -- puts the function to work

> functionName ();

##### `function definition` -- gives a job to a function

> function <identifier>() {
> };

> function bar() {
>    return 3;
> }

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
