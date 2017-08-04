/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

function hasProperLength(str) {
  return str.length >= 7;
}

function hasNumber(str) {
  return str.match(/\d/) != null;
}

function hasUppercase(str) {
  return str.match(/[A-Z]/) != null;
}

function hasLowercase(str) {
  return str.match(/[a-z]/) != null;
}

function isPasswordValid(password) {
  return (hasProperLength(password)) 
      && (hasNumber(password)) 
      && (hasUppercase(password)) 
      && (hasLowercase(password));
}

(function testSuite() {
  var assert = chai.assert;

  assert.equal(isPasswordValid("Foobar1"), true, "should return true for valid password"); 
  assert.equal(isPasswordValid("Fooba1"), false, "should retrun false for password shorter than 7 characters");
  assert.equal(isPasswordValid("Fooobar"), false, "should retrun false for password without digits");
  assert.equal(isPasswordValid("foobar1"), false, "should retrun false for password without uppercase character");
  assert.equal(isPasswordValid("FOOBAR1"), false, "should retrun false for password without lowercase character");
  
})();