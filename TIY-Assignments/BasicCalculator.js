

function add(A, B) {
  return A + B;
};

console.assert(add(0,0) === 0);
console.assert(add(0,1) === 1);
console.assert(add(0,2) === 2);
console.assert(add(0,3) === 3);
console.assert(add(0,4) === 4);
console.assert(add(0,5) === 5);
console.assert(add(0,6) === 6);
console.assert(add(0,7) === 7);
console.assert(add(0,8) === 8);
console.assert(add(0,9) === 9);
/*
 *
 * @param {Number} A to add to B
 * @param {Number} B to add to A
 * @return {Number} sum of A and B
 */
// END add
function sub(A, B) {
  return A-B;
};
console.assert(sub(0,0) === 0);
console.assert(sub(0,1) === -1);
console.assert(sub(0,2) === -2);
console.assert(sub(0,3) === -3);
console.assert(sub(0,4) === -4);
console.assert(sub(0,5) === -5);
console.assert(sub(0,6) === -6);
console.assert(sub(0,7) === -7);
console.assert(sub(0,8) === -8);
console.assert(sub(0,9) === -9);
/*
 *
 * @param {Number} A to subtact B
 * @param {Number} B to subtract from A
 * @return {Number} difference of B from A
 */
// END subtract
function divided(A,B) {
  return A / B;
};
console.assert(divided(1,1) === 1);
console.assert(divided(2,1) === 2);
console.assert(divided(3,1) === 3);
console.assert(divided(4,1) === 4);
console.assert(divided(5,1) === 5);
console.assert(divided(6,1) === 6);
console.assert(divided(7,1) === 7);
console.assert(divided(8,1) === 8);
console.assert(divided(9,1) === 9);

//0/0 is NaN and NaN isn't strictly equal to anything.
/*
 *
 * @param {Number} A to divide by B
 * @param {Number} B to divide into A
 * @return {Number} difference of A and B
 */
// END division
function multiply(A,B) {
  return A * B;
};
console.assert(multiply(0,0) === 0);
console.assert(multiply(0,1) === 0);
console.assert(multiply(0,2) === 0);
console.assert(multiply(0,3) === 0);
console.assert(multiply(0,4) === 0);
console.assert(multiply(0,5) === 0);
console.assert(multiply(0,6) === 0);
console.assert(multiply(0,7) === 0);
console.assert(multiply(0,8) === 0);
console.assert(multiply(0,9) === 0);

};
//0/0 is NaN and NaN isn't strictly equal to anything.
/*
 *
 * @param {Number} A to multiply to B
 * @param {Number} B to multiply to A
 * @return {Number} product of A and B
 */
// END mulitplication
