# About JavaScript

## Basic Literal Types

### `null` -- intentional empty value
`null` is often found in a place where an object can be expected but no object is relevant.

  > // foo does not exist, it is not defined and has never been initialized:
  
  > `>` foo
  
  > "ReferenceError: foo is not defined"
  
  > // foo is known to exist now but it has no type or value:
  
  > `>` var foo = null; foo
  
  > "null"

### `Boolean` -- has two literal values- 'true' and 'false'
The `Boolean` data type is primarily associated with conditional statements, which allow different actions and change control flow depending on whether a programmer-specified `Boolean` condition evaluates to `true` or `false`.

  > Boolean(5>6); /* false */
  
  > Boolean(null); /* false */
  
  > Boolean(true); /* true */
  
  > Boolean(1); /* true */

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

The `function` keyword is used to _define_ a function with parentheses and curly braces:

    // This is a Function Definition for `whatever`...
    function whatever ( /* arguments go here */ ) {
      // body of function goes here
    }

A function has three things: 1) input, 2) output, 3) side effects.
The output is `undefined` by default.

##### `anonymous function` -- no name has been assigned 

> console.log(2);
> function(){};

##### `function expression` -- defines function as part of larger expression syntax
A Function Expression is typically a variable assignment.

> //anonymous function expression
> var a = function() {
>    return 3;
> }
> 
> //named function expression
>var a = function bar() {
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

