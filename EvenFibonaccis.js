var test = require('mocha').it,
    expect = require('chai').expect;
    assert = require('chai').assert;  // OR use `assert.equal` etc

function fibonacci (x) {
  var fib =[0];
  for (var v = 0, i = 0; v < x; i++) {
    if (i < 1) {
      fib[i] = 0;
    } else if (i < 2) {
      fib[i] = 1;
    } else {
      fib[i] = fib[i-1] + fib[i-2];
      v = fib[i]
    };
  };
    return fib;
};//END fibonacci
console.log(fibonacci(0));
console.log(fibonacci(1));
// console.log(fibonacci(10));
// console.log(fibonacci(50));
// console.log(fibonacci(500));
console.log(fibonacci(4000000));

test('generating the Fibonacci sequence', function(){
  expect(fibonacci(0)).to.deep.equal([ 0 ]);
  expect(fibonacci(1)).to.deep.equal([ 0, 1, 1]);
  expect(fibonacci(2)).to.deep.equal([ 0, 1, 1, 2 ]);
  expect(fibonacci(5)).to.deep.equal([ 0, 1, 1, 2, 3, 5 ]);
  expect(fibonacci(500)).to.deep.equal([ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610 ]);
}); // END test(fibonacci)

function evens(x) {
  var fib =[0];
  for (var v = 0, i = 0; v < x; i++) {
    if (i < 1) {
      fib[i] = 0;
    } else if (i < 2) {
      fib[i] = 1;
    } else {
      fib[i] = fib[i-1] + fib[i-2];
      v = fib[i]
    };
  for (var i = 0; i < fib.length; i++) {
    if (fib[i] === 0) {
            fib.splice(i, 1);
    } else if (fib[i]%2 !== 0) {//BEGIN test splice odd
      fib.splice(i, 1);
    } else {
      i = i;
    };
  }; //END even extraction
  };
    return fib;
};//END evens
// Hey, where's `fibonacci`...? Uh oh...

test('just even numbers?', function(){
  expect(evens(0)).to.deep.equal([ ]);
  expect(evens(1)).to.deep.equal([ NaN ]);
  expect(evens(2)).to.deep.equal([ 2 ]);
  expect(evens(10)).to.deep.equal([ 2, 8 ]);
  expect(evens(500)).to.deep.equal([ 2, 8, 34, 144, 610 ]);
}); // END test(evens)

//
// function sum(x) {
//
// };//END sum
//
// test('summing lists of Number', function(){
//   expect(sum([ ]).equal( 0);
//   expect.equal(sum([ 1 ]), 1);
//   expect.equal(sum([ 1, 1 ]), 2);
//   // ...et cetera, et cetera, et cetera.
// }); // END test(sum)
//
// // You expect me to write `sum`, too?
//
// test('summing even Fibonacci numbers?', function(){
//   expect( sum(evens(fibonacci(0)))).to.equal(FILL_ME_IN); // nice.
//   // There really should be more code in here...
// }); // END test(dat CHAIN tho)
