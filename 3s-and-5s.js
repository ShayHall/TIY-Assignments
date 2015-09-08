var test = require('mocha').it,
    expect = require('chai').expect, // Use `expect(X).to.be` et al
    assert = require('chai').assert;  // OR use `assert.equal` etc

/**If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

* @param {Number} `N` defines one more than maximum natural number to evaluate
* @return {Number} sum of all the multiples of 3 or 5 below `N`.
*/

function threes(N){
  var arr = [];
  for (var i = 3, j = 0; i < N; i = i + 3, j=j+1) {
    arr[j] = i;
  }
  console.log(arr);
  return arr;
} //END `threes`

test('getting a list of multiples of 3', function(){
  expect(threes(2)).to.deep.equal([]); //Test 2
  expect(threes(4)).to.deep.equal([ 3 ]); //Test 4
  expect(threes(10)).to.deep.equal([ 3, 6, 9 ]); //Test 10
  expect(threes(20)).to.deep.equal([ 3, 6, 9, 12, 15, 18 ]); // Test 20
  expect(threes(50)).to.deep.equal([ 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 48 ]); // Test 50
}); // END test `threes`


function fives(N){
  var hiFive = [];
  for (var i = 5, j = 0; i < N; i += 5, j++) {
    hiFive[j] = i;
  }
  console.log(hiFive);
  return hiFive;
} //End `fives`

test('getting a list of multiples of 5', function(){
  expect(fives(2)).to.deep.equal([ ]); //Test 2
  expect(fives(4)).to.deep.equal([ ]); //Test 4
  expect(fives(10)).to.deep.equal([ 5 ]); //Test 10
  expect(fives(20)).to.deep.equal([ 5, 10, 15 ]); // Test 20
  expect(fives(50)).to.deep.equal([ 5, 10, 15, 20, 25, 30, 35, 40, 45 ]); // Test 50
}); // END test `fives`



function sum(N){
  var arr = [];
  var hiFive = [];
  var threesAndFives = 0;
    for (var i = 3, j = 0; i < N; i = i + 3, j=j+1) {
      arr[j] = i;
    }; //END `threes`
      for (var a = 5, b = 0; a < N; a += 5, b++) {
        hiFive[b] = a;
      }; //End `fives`
        var conCat = arr.concat(hiFive);//concatenate two arrays into one
        var organized = conCat.sort();//BEGIN testing array.prototype.sort
          for (var i = 0; i < organized.length; i++) {
            if (organized[i] === organized[i+1]) {//BEGIN test splice duplicate before summing
              organized.splice(i, 1);
            } else {
              i = i;
            };
          }; //END testing array.prototype.sort
        for (var x = 0; x < organized.length; x++) {
          x = x;
          threesAndFives += organized[x];
        };
      return threesAndFives;//for loop that adds all values of array
}; //End `sum`

test('getting a list of sum of 3 and 5', function(){
  expect(sum(2)).to.deep.equal(0); //Test 2
  expect(sum(4)).to.deep.equal(3); //Test 4
  expect(sum(10)).to.deep.equal(23); //Test 10
  expect(sum(20)).to.deep.equal(78); //Test 20
  expect(sum(50)).to.deep.equal(543); //Test 50
  expect(sum(1000)).to.deep.equal(233168); // Test 1000
}); // END test `sum`
