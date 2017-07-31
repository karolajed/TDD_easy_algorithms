/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

'use strict';

function fizzbuzz(n) {
  function nIsDivisibleBy(k) { return n%k === 0; };
  
  return (nIsDivisibleBy(3*5) ? "fizzbuzz" : 
         (nIsDivisibleBy(5)   ? "buzz"     : 
         (nIsDivisibleBy(3)   ? "fizz"     : n)));
}

function testSuite() {
  var assert = chai.assert;
  
  //assert.equal(actual, expected, "Should do anything...");
  
  assert.equal(fizzbuzz(1), "1", "Should return the same number when number is not divisible by 3 or 5");
  assert.equal(fizzbuzz(3), "fizz", "Should return fizz when number is divisible by 3");
  assert.equal(fizzbuzz(6), "fizz", "Should return fizz when number is divisible by 3");
  assert.equal(fizzbuzz(5), "buzz", "Should return buzz when number is divisible by 5");
  assert.equal(fizzbuzz(10), "buzz", "Should return buzz when number is divisible by 5");
  assert.equal(fizzbuzz(15), "fizzbuzz", "Should return fizzbuzz when number is divisible by 3 and by 5");
  assert.equal(fizzbuzz(30), "fizzbuzz", "Should return fizzbuzz when number is divisible by 3 and by 5");
}

testSuite();