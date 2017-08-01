/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

/*
---String sum---

"1+2+3" -> 6
"1+1+1+1+1" -> 5

itd.
"2  + 1 " -> 3
*/

function intValueOf(a) {
  return parseInt(0 + a.trim());
}

function sumIntAndString(int, str) {
  return int + intValueOf(str);
}

function stringSum(n) {
  return n.split("+").reduce(sumIntAndString, 0);
}

(function stringSumTest() {
  var assert = chai.assert;

  assert.equal(stringSum(""), 0, "should return 0 for empty string");
  assert.equal(stringSum("1"), 1, "should return 1 for 1");
  assert.equal(stringSum("1+1+1"), 3, "should add two and more numbers");
  assert.equal(stringSum("1 + 1"), 2, "should add two numbers with spaces");
  assert.equal(stringSum("1+	1"), 2, "should add two numbers with tabs");

})();